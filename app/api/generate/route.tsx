import { ImageResponse } from 'next/og'
import BackgroundImage from './background'

async function fetchArticleData(url: string) {
  let title = 'Something Went Wrong'
  let imageUrl = 'https://http.cat/500'

  const req = await fetch(url)
  if (req.status !== 200 || !req.ok) {
    title = req.statusText
    imageUrl = `https://http.cat/${req.status}`

    return {
      title,
      imageUrl
    }
  }

  const articleContent = await req.text()

  // Extract title using regex
  const h1Match = articleContent.match(/<h1[^>]*class="[^"]*wp-block-post-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/)
  if (h1Match) {
    title = h1Match[1].replace(/<[^>]*>/g, '').trim()
  }

  // Extract og:image meta tag
  const ogImageMatch = articleContent.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i) ||
    articleContent.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:image"[^>]*>/i)
  if (ogImageMatch) {
    imageUrl = ogImageMatch[1]
  }

  return {
    title,
    imageUrl
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const articleUrl = searchParams.get('url')

  if (!articleUrl) {
    return new Response('Missing url parameter, supply ?url=', { status: 400 })
  }

  let title = 'Something Went Wrong'
  let image = 'https://http.cat/500'
  let fontData = new ArrayBuffer()

  try {
    const [
      fontResponse, articleData
    ] = await Promise.allSettled([
      fetch(
        new URL('/fonts/Figtree-SemiBold.ttf', request.url)
      ),
      fetchArticleData(articleUrl)
    ])

    if (fontResponse.status === 'fulfilled' && articleData.status === 'fulfilled') {
      fontData = await fontResponse.value.arrayBuffer()
      title = articleData.value.title
      image = articleData.value.imageUrl
    }
  } catch (err) {
    return new Response('Failed to fetch article data or fonts', { status: 500 })
  }

  return new ImageResponse(
    (
      <div style={{ display: 'flex', position: 'relative', width: '100%', height: '100%' }}>
        <BackgroundImage style={{ position: 'absolute', left: 0, top: 0, zIndex: '1', width: '100%', height: '100%' }} />
        <img src={image} style={{
          display: 'block',
          zIndex: '2',
          position: 'absolute',
          left: 32,
          top: 103,
          width: 511,
          height: 384,
          objectFit: 'cover',
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
        }} />
        <div style={{
          display: 'flex',
          zIndex: '2',
          position: 'absolute',
          left: 32,
          top: 483,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: 512,
          height: 129,
          color: '#0220B6',
          padding: '6px 12px'
        }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '2%', fontFamily: 'Figtree' }}>{title}</h1>
        </div>
      </div>
    ),
    {
      width: 576,
      height: 720,
      fonts: [{ name: 'Figtree', data: fontData, style: 'normal', weight: 600 }]
    },
  )
}

export const runtime = 'edge'
export const maxDuration = 30
