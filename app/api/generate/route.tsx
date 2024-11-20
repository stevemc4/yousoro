import { ImageResponse } from 'next/og'
import BackgroundImage from './background'
import { parse } from 'node-html-parser'

async function loadGoogleFont (font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@600&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

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
  const article = parse(articleContent)

  title = article.querySelector('h1.wp-block-post-title')?.textContent ?? 'Something Went Wrong'
  imageUrl = article.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? imageUrl

  return {
    title,
    imageUrl
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const articleUrl = searchParams.get('url')
  let title = 'Please Provide URL'
  let image = 'https://http.cat/400'


  if (articleUrl) {
    const articleData = await fetchArticleData(articleUrl)
    title = articleData.title
    image = articleData.imageUrl
  }

  return new ImageResponse(
    (
      <div style={{
        display: 'flex'
      }}>
        <BackgroundImage style={{ position: 'absolute', left: 0, top: 0, zIndex: '1' }} />
        <img
          src={image}
          style={{
            display: 'block',
            zIndex: '2',
            position: 'absolute',
            left: 85,
            top: 270,
            width: 1341,
            height: 1008,
            objectFit: 'cover',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28
          }}
        />
        <div style={{
          display: 'flex',
          zIndex: '2',
          position: 'absolute',
          left: 83,
          top: 1270,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: 1344,
          height: 338,
          color: '#0220B6',
          padding: '16px 32px'
        }}>
          <h1 style={{ fontSize: 64, fontWeight: 600, letterSpacing: '2%', fontFamily: 'Figtree' }}>{title}</h1>
        </div>
      </div>
    ),
    {
      width: 1512,
      height: 1890,
      fonts: [
        {
          name: 'Figtree',
          data: await loadGoogleFont('Figtree', title),
          style: 'normal',
        }
      ]
    },
  )
}

 export const runtime = 'edge'
 export const maxDuration = 30
