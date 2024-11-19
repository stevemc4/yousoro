import { CSSProperties } from "react"

interface Props {
  style?: CSSProperties
}

export default function BackgroundImage({ style }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1512" height="1890" fill="none" style={style}>
      <g clip-path="url(#a)">
        <mask id="b" width="1512" height="1890" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }}>
          <path fill="#fff" d="M1512 0H0v1890h1512V0Z" />
        </mask>
        <g mask="url(#b)">
          <path fill="#FBFDFE" d="M1512 0H0v1890h1512V0Z" />
          <path fill="url(#c)" fill-rule="evenodd" d="M63.5 1534H84a84 84 0 0 1-84 84v-20.6a63.3 63.3 0 0 0 63.5-63.4Z" clip-rule="evenodd" />
          <path fill="url(#d)" fill-rule="evenodd" d="M104.5 1534a63.5 63.5 0 0 0 63.5 63.4v20.6a83.7 83.7 0 0 1-84-84h20.5Z" clip-rule="evenodd" />
          <path fill="url(#e)" fill-rule="evenodd" d="M0 1618a83.8 83.8 0 0 1 84 84H63.5A63.5 63.5 0 0 0 0 1638.5V1618Z" clip-rule="evenodd" />
          <path fill="url(#f)" fill-rule="evenodd" d="M168 1618v20.5a63.3 63.3 0 0 0-63.5 63.5H84a84 84 0 0 1 84-84Z" clip-rule="evenodd" />
          <path fill="url(#g)" fill-rule="evenodd" d="M336 1597.5v20.5a84.1 84.1 0 0 0 84-84h-20.5a63.3 63.3 0 0 1-63.5 63.5Z" clip-rule="evenodd" />
          <path fill="url(#h)" fill-rule="evenodd" d="M504 1597.5a62.4 62.4 0 0 1-44.4-18.6 63.7 63.7 0 0 1-18.3-44.9H421c0 22.2 8.7 43.6 24.3 59.3A82.6 82.6 0 0 0 504 1618v-20.5Z" clip-rule="evenodd" />
          <path fill="url(#i)" fill-rule="evenodd" d="M420 1702a83.8 83.8 0 0 0-84-84v20.5a63.5 63.5 0 0 1 63.5 63.4H420Z" clip-rule="evenodd" />
          <path fill="url(#j)" fill-rule="evenodd" d="M421 1702h20.3c0-16.9 6.6-33 18.3-45a62.4 62.4 0 0 1 44.4-18.5V1618c-22 0-43.2 8.8-58.7 24.6A84.3 84.3 0 0 0 421 1702Z" clip-rule="evenodd" />
          <path fill="url(#k)" fill-rule="evenodd" d="M252 1597.5v20.5c-22 0-43.2-8.9-58.7-24.7A84.3 84.3 0 0 1 169 1534h20.3c0 16.8 6.6 33 18.3 44.9a62.4 62.4 0 0 0 44.4 18.6Z" clip-rule="evenodd" />
          <path fill="url(#l)" fill-rule="evenodd" d="M315.5 1534a63.5 63.5 0 0 1-63.5 63.4v20.6a83.8 83.8 0 0 0 84-84h-20.5Z" clip-rule="evenodd" />
          <path fill="url(#m)" fill-rule="evenodd" d="M252 1618a84.3 84.3 0 0 0-59.4 24.2A82.6 82.6 0 0 0 168 1701h20.5a63.1 63.1 0 0 1 63.5-62.7V1618Z" clip-rule="evenodd" />
          <path fill="url(#n)" fill-rule="evenodd" d="M252 1618v20.3a64 64 0 0 1 45 18.3 62.4 62.4 0 0 1 18.5 44.4H336a83 83 0 0 0-24.6-58.8A84.3 84.3 0 0 0 252 1618Z" clip-rule="evenodd" />
          <path fill="url(#o)" fill-rule="evenodd" d="M672 1597.5v20.5a84.1 84.1 0 0 0 84-84h-20.5a63.3 63.3 0 0 1-63.5 63.5Z" clip-rule="evenodd" />
          <path fill="url(#p)" fill-rule="evenodd" d="M840 1597.5a63.5 63.5 0 0 1-63.5-63.5H756a83.8 83.8 0 0 0 84 84v-20.5Z" clip-rule="evenodd" />
          <path fill="url(#q)" fill-rule="evenodd" d="M756 1702a83.8 83.8 0 0 0-84-84v20.5a63.5 63.5 0 0 1 63.5 63.4H756Z" clip-rule="evenodd" />
          <path fill="url(#r)" fill-rule="evenodd" d="M756 1702h20.5a63.3 63.3 0 0 1 63.5-63.5V1618a84.1 84.1 0 0 0-84 84Z" clip-rule="evenodd" />
          <path fill="url(#s)" fill-rule="evenodd" d="M567.5 1618H588a84 84 0 0 0-84-84v20.5a63.3 63.3 0 0 1 63.5 63.5Z" clip-rule="evenodd" />
          <path fill="url(#t)" fill-rule="evenodd" d="M608.5 1618a63.5 63.5 0 0 1 63.5-63.5V1534a83.8 83.8 0 0 0-84 84h20.5Z" clip-rule="evenodd" />
          <path fill="url(#u)" fill-rule="evenodd" d="M504 1701c22.3 0 43.6-8.7 59.4-24.3A82.6 82.6 0 0 0 588 1618h-20.5c0 16.6-6.7 32.6-18.6 44.3a63.7 63.7 0 0 1-44.9 18.4v20.3Z" clip-rule="evenodd" />
          <path fill="url(#v)" fill-rule="evenodd" d="M672 1701v-20.3a64 64 0 0 1-45-18.4 62.4 62.4 0 0 1-18.5-44.3H588c0 22 8.9 43.1 24.6 58.7A84.3 84.3 0 0 0 672 1701Z" clip-rule="evenodd" />
          <path fill="url(#w)" fill-rule="evenodd" d="M861.3 1534H841a83 83 0 0 0 83 83v-20.3a62.5 62.5 0 0 1-62.7-62.7Z" clip-rule="evenodd" />
          <path fill="url(#x)" fill-rule="evenodd" d="M987.5 1534c0 16.6-6.7 32.6-18.6 44.3a63.7 63.7 0 0 1-44.9 18.4v20.3c22.3 0 43.6-8.7 59.4-24.3a82.6 82.6 0 0 0 24.6-58.7h-20.5Z" clip-rule="evenodd" />
          <path fill="url(#y)" fill-rule="evenodd" d="M924 1618a82.8 82.8 0 0 0-83 83h20.3a62.8 62.8 0 0 1 62.7-62.8V1618Z" clip-rule="evenodd" />
          <path fill="url(#z)" fill-rule="evenodd" d="M924 1618v20.3a64 64 0 0 1 45 18.3 62.4 62.4 0 0 1 18.5 44.4h20.5a83 83 0 0 0-24.6-58.8A84.3 84.3 0 0 0 924 1618Z" clip-rule="evenodd" />
          <path fill="url(#A)" fill-rule="evenodd" d="M1071.5 1533h20.5c0 22-8.9 43.1-24.6 58.7a84.3 84.3 0 0 1-59.4 24.3v-20.3a64 64 0 0 0 45-18.4 62.4 62.4 0 0 0 18.5-44.3Z" clip-rule="evenodd" />
          <path fill="url(#B)" fill-rule="evenodd" d="M1112.5 1533c0 16.6 6.7 32.6 18.6 44.3a63.6 63.6 0 0 0 44.9 18.4v20.3a84.3 84.3 0 0 1-59.4-24.3 82.6 82.6 0 0 1-24.6-58.7h20.5Z" clip-rule="evenodd" />
          <path fill="url(#C)" fill-rule="evenodd" d="M1008 1616a83.8 83.8 0 0 1 84 84h-20.5a63.6 63.6 0 0 0-63.5-63.5V1616Z" clip-rule="evenodd" />
          <path fill="url(#D)" fill-rule="evenodd" d="M1176 1616v20.5a63.3 63.3 0 0 0-63.5 63.5H1092a84.1 84.1 0 0 1 84-84Z" clip-rule="evenodd" />
          <path fill="url(#E)" fill-rule="evenodd" d="M1344 1595.5v20.5a84.1 84.1 0 0 0 84-84h-20.5a63.3 63.3 0 0 1-63.5 63.5Z" clip-rule="evenodd" />
          <path fill="url(#F)" fill-rule="evenodd" d="M1512 1595.5a63.6 63.6 0 0 1-63.5-63.5H1428a83.8 83.8 0 0 0 84 84v-20.5Z" clip-rule="evenodd" />
          <path fill="url(#G)" fill-rule="evenodd" d="M1428 1700a83.8 83.8 0 0 0-84-84v20.5a63.6 63.6 0 0 1 63.5 63.4h20.5Z" clip-rule="evenodd" />
          <path fill="url(#H)" fill-rule="evenodd" d="M1428 1700h20.5a63.2 63.2 0 0 1 63.5-63.5V1616a84.1 84.1 0 0 0-84 84Z" clip-rule="evenodd" />
          <path fill="url(#I)" fill-rule="evenodd" d="M1176 1552.5V1532a84 84 0 0 1 84 84h-20.5a63.2 63.2 0 0 0-63.5-63.5Z" clip-rule="evenodd" />
          <path fill="url(#J)" fill-rule="evenodd" d="M1280.5 1616a63.6 63.6 0 0 1 63.5-63.5V1532a83.8 83.8 0 0 0-84 84h20.5Z" clip-rule="evenodd" />
          <path fill="url(#K)" fill-rule="evenodd" d="M1176 1700a83.8 83.8 0 0 0 84-84h-20.5a63.5 63.5 0 0 1-63.5 63.4v20.6Z" clip-rule="evenodd" />
          <path fill="url(#L)" fill-rule="evenodd" d="M1344 1700v-20.6a63.2 63.2 0 0 1-63.5-63.4H1260a84.1 84.1 0 0 0 84 84Z" clip-rule="evenodd" />
          <path fill="#0C0C0C" fill-rule="evenodd" d="M114.8 270h1282.4c17 0 30.8 13.8 30.8 30.8V1278H84V300.8c0-17 13.8-30.8 30.8-30.8Z" clip-rule="evenodd" />
          <mask id="M" width="1344" height="1009" x="84" y="269" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }}>
            <path fill="#fff" fill-rule="evenodd" d="M114.8 270h1282.4c17 0 30.8 13.8 30.8 30.8V1278H84V300.8c0-17 13.8-30.8 30.8-30.8Z" clip-rule="evenodd" />
          </mask>
          <g mask="url(#M)">
            <path fill="url(#N)" d="M84 270h1344v1008H84z" />
          </g>
          <path fill="#fff" fill-rule="evenodd" d="M84 1278h1344v311.9a27 27 0 0 1-27 27H111a27 27 0 0 1-27-27v-312Z" clip-rule="evenodd" />
          <path stroke="#C2C2C2" stroke-miterlimit="8" stroke-width="2" d="M84 297a28 28 0 0 1 28-28h1287a28 28 0 0 1 28 28v1291a28 28 0 0 1-28 28H112a28 28 0 0 1-28-28V297Z" clip-rule="evenodd" />
          <path fill="#0220B6" fill-rule="evenodd" d="M822.2 105c4 0 7 1.2 9.4 3.6 2.3 2.4 3.4 6 3.4 11V138h-3.9v-16.5c0-3.6-.4-6.3-1.2-8.1-.9-1.9-2-3.1-3.4-3.8-1.5-.7-3.1-1-4.9-1-3 0-5.4 1.1-7.2 3.4a15.3 15.3 0 0 0-2.5 9.4V138H808v-32.2h3.6l.2 5 .4-.7a11.1 11.1 0 0 1 10-5.1Zm33.9 0c3 0 5.5.7 7.5 2.2 2.1 1.4 3.7 3.4 4.8 6 1 2.5 1.6 5.4 1.6 8.7h-25.2v1.5c.2 1.8.7 3.4 1.5 4.9a11 11 0 0 0 10.1 6.3c2.4 0 4.5-.7 6.2-1.9 1.7-1.2 3-2.7 4-4.6l3 2a13.8 13.8 0 0 1-7.6 7 16 16 0 0 1-5.6.9 14.8 14.8 0 0 1-13.4-8 18 18 0 0 1-2-8.5c0-3.2.6-6 2-8.6a14.1 14.1 0 0 1 13.1-7.9Zm0 3.5a10.6 10.6 0 0 0-9.9 6.2c-.5 1-.8 2-1 3.2l-.2.6h21v-.3c-.2-1.2-.5-2.2-.9-3.3-.7-2-1.9-3.6-3.4-4.7a9 9 0 0 0-5.6-1.7ZM934 105c1.8 0 3.4.3 4.9.8 1.5.5 2.7 1.3 3.8 2.2a9 9 0 0 1 2.3 3.5l-3.4 1.4a6.5 6.5 0 0 0-3-3.4c-1.4-.7-3-1-5.2-1-2.3 0-4 .4-5.3 1.4-1.3 1-2 2.3-2 4 0 .9.5 1.8 1.6 2.7 1 1 2.6 1.6 4.7 2.2l2.7.7a16 16 0 0 1 5.3 2.2c1.5.9 2.6 2 3.4 3.2a8.1 8.1 0 0 1-.3 9 9.2 9.2 0 0 1-4 3 16.5 16.5 0 0 1-12 0c-1.7-.7-3.1-1.6-4.2-2.7a9.9 9.9 0 0 1-2.3-3.6l3.4-1.2a8.5 8.5 0 0 0 3.5 3.7 11.2 11.2 0 0 0 10.9 0c1.6-.9 2.4-2.2 2.4-3.9 0-1.5-.6-2.7-1.8-3.7a13 13 0 0 0-5-2.3l-3.2-.8a17 17 0 0 1-6.6-3.3 6.5 6.5 0 0 1-2.3-5c0-2.8 1-5 2.9-6.7 2-1.6 4.8-2.4 8.8-2.4Zm-62 1h3.9l9 26.4 9.2-26.4h3.9l9 26.3 9.1-26.3h3.9l-11 32h-3.9l-9-26.4L887 138h-4l-11-32Z" clip-rule="evenodd" />
          <path fill="#0220B6" d="M681.8 96h-7.3v9.8H669v6h5.5v16.6c0 3 .9 5.5 2.7 7.1 1.8 1.7 4.5 2.5 8 2.5 1 0 2.2-.2 3.4-.6a18 18 0 0 0 3.4-1.7l-2.7-5.4-1.8 1-1.4.2c-1.4 0-2.5-.4-3.2-1.1-.8-.8-1.1-1.9-1.1-3.3v-15.3h8.9v-6h-9V96Zm32.2 16.8V106a13.2 13.2 0 0 0-11 5.8v-5.7h-7V138h7v-17a7 7 0 0 1 1.5-4.8 9 9 0 0 1 4.1-2.6 19 19 0 0 1 5.4-.8ZM583.6 105a14.8 14.8 0 0 1 14.3 8.6l-6.7 2.5a8 8 0 0 0-3.1-3.3c-1.4-.8-3-1.3-4.8-1.3a8.6 8.6 0 0 0-7.9 4.9 11 11 0 0 0-1.1 5.1c0 2 .4 3.6 1.2 5.1a8.7 8.7 0 0 0 8 4.8 8.2 8.2 0 0 0 8-5l6.5 2.5a13.9 13.9 0 0 1-5.7 6.7 15.8 15.8 0 0 1-8.6 2.4c-3.2 0-6.1-.7-8.6-2.1a15.3 15.3 0 0 1-6-5.8 16.8 16.8 0 0 1-2.1-8.6c0-3.2.7-6 2.1-8.6a16.7 16.7 0 0 1 14.5-7.9Z" />
          <path fill="#0220B6" fill-rule="evenodd" d="M624.6 107.2a13.8 13.8 0 0 0-7.5-2.2 15.3 15.3 0 0 0-14 8 18.8 18.8 0 0 0-.1 17.1c1.4 2.4 3.2 4.4 5.6 5.8a19 19 0 0 0 14.6 1.1c1.9-.7 3.5-1.6 4.8-3 1.4-1.2 2.5-2.6 3.4-4.3l-6.5-2.8a7.8 7.8 0 0 1-7.4 4.6 9 9 0 0 1-4.6-1.2 8.4 8.4 0 0 1-3.3-3.3l-.9-2.4-.2-1.4H632c0-3.8-.7-7-2-9.8a15 15 0 0 0-5.4-6.2Zm-12.3 5.2a8.1 8.1 0 0 1 4.5-1.2c1.7 0 3.1.5 4.4 1.3a8 8 0 0 1 2.8 4l.3 1H609l.1-.4.4-1.2a7.7 7.7 0 0 1 3-3.5Z" clip-rule="evenodd" />
          <path fill="#0220B6" d="M653.8 105c3.9 0 6.9 1.2 9 3.6 2.1 2.4 3.2 6 3.2 11V138h-7.2v-16.5c0-2.6-.3-4.6-.9-6a5.6 5.6 0 0 0-2.4-2.9c-1-.6-2.3-.8-3.7-.8-2.4 0-4.3.7-5.6 2.4a11 11 0 0 0-2 7V138H637v-32.2h6.8l.3 4.4.2-.2a11 11 0 0 1 3-3.1c1.8-1.3 4-1.9 6.5-1.9Z" />
          <path fill="#0220B6" fill-rule="evenodd" d="M738 106.7a15 15 0 0 0-7.4-1.7 15 15 0 0 0-6 1.1c-1.7.7-3.1 1.7-4.2 3-1.1 1.1-2 2.4-2.7 3.8l6.1 2.2a7.5 7.5 0 0 1 2.8-2.9 8 8 0 0 1 3.8-1 6 6 0 0 1 3.9 1.2c1 .8 1.6 1.9 2 3.3.3.7.5 1.5.6 2.4v.2h-7.6c-3.9 0-7 .8-9 2.6-2.2 1.7-3.3 4.2-3.3 7.5 0 3 1 5.4 3 7a13 13 0 0 0 8.6 2.6c3.8 0 6.6-1.2 8.3-3.7l.4-.5v3.4h6.7V120c0-3.3-.5-6-1.5-8.3-1-2.2-2.5-3.9-4.4-5Zm-12.3 18.2c1-.8 3-1.2 5.7-1.2h5.7v.5c0 1.4-.4 2.7-1 3.9a7.1 7.1 0 0 1-6.6 4c-1.7 0-3-.4-4-1-1-.8-1.5-1.7-1.5-3 0-1.4.6-2.5 1.7-3.2Z" clip-rule="evenodd" />
          <path fill="url(#O)" fill-rule="evenodd" d="M770.9 100h5.1c0 5.8-2.2 11.4-6.2 15.6A20.4 20.4 0 0 1 755 122v-5.4c4.2 0 8.3-1.7 11.2-4.8A17 17 0 0 0 771 100Z" clip-rule="evenodd" />
          <path fill="url(#P)" fill-rule="evenodd" d="M781.4 100a16.6 16.6 0 0 0 16.6 16.6v5.4a22 22 0 0 1-22-22h5.4Z" clip-rule="evenodd" />
          <path fill="url(#Q)" fill-rule="evenodd" d="M755 122a21 21 0 0 1 21 21h-5.1a15.9 15.9 0 0 0-15.9-15.9V122Z" clip-rule="evenodd" />
          <path fill="url(#R)" fill-rule="evenodd" d="M798 122v5.1a17 17 0 0 0-11.8 4.7c-3 3-4.8 7-4.8 11.2H776c0-5.6 2.3-11 6.4-14.9 4.2-4 9.8-6.1 15.6-6.1Z" clip-rule="evenodd" />
          <path fill="#0C0C0C" d="M736.2 1785a5 5 0 0 0-3.6-3.4c-3-.8-15.6-.8-15.6-.8s-12.5 0-15.6.8a5 5 0 0 0-3.6 3.5c-.8 3-.8 11.4-.8 11.4s0 8.3.8 11.3a5 5 0 0 0 3.6 3.5c3 .8 15.6.8 15.6.8s12.5 0 15.6-.8a5 5 0 0 0 3.6-3.5c.8-3 .8-11.3.8-11.3s0-8.4-.8-11.4Zm-23.2 16.5v-10.1c0-.8.8-1.3 1.5-.9l9 5.1a1 1 0 0 1 0 1.7l-9 5.1c-.7.4-1.5-.1-1.5-.9Zm-73.3-22.7a9.8 9.8 0 0 0-9.8 9.8v15.7c0 5.4 4.4 9.8 9.8 9.8h15.6c5.4 0 9.8-4.4 9.8-9.8v-15.7c0-5.4-4.4-9.8-9.8-9.8h-15.6Zm0 4h15.6a6 6 0 0 1 6 5.8v15.7a6 6 0 0 1-6 5.9h-15.6a5.9 5.9 0 0 1-6-6v-15.6a6 6 0 0 1 6-5.8Zm17.6 2a2 2 0 1 0 0 3.8 2 2 0 0 0 0-3.9Zm-9.8 1.9a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6Zm0 3.9a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8ZM508 1776.9c-11 0-20 8.7-20 19.6 0 9.8 7.4 17.9 17 19.3v-14.1h-5v-5.2h5v-3.4c0-5.7 2.8-8.2 7.6-8.2 2.4 0 3.6.2 4.1.3v4.5h-3.2c-2 0-2.8 1.8-2.8 4v2.8h6l-.8 5.2h-5.2v14.1a19.7 19.7 0 0 0 17.3-19.3c0-10.9-9-19.6-20-19.6Zm50.7 1.9 14.2 19.9-13.4 15.4h5.3l10.5-12.1 8.6 12h13.8l-14.8-20.7 12.6-14.5h-5.2l-9.8 11.2-7.9-11.2h-13.9Zm7.7 4h4.1l19.6 27.4H586l-19.6-27.5Zm208.4-4a6 6 0 0 0-6 6v23.4a6 6 0 0 0 6 5.9h23.5c3.2 0 5.8-2.7 5.8-5.9v-23.5a6 6 0 0 0-5.9-5.9h-23.5Zm0 4h23.5a2 2 0 0 1 2 2v23.4a2 2 0 0 1-2 2h-23.5a2 2 0 0 1-2-2v-23.5c0-1.1.8-2 2-2Zm11.7 3.9v13.7a2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1 1-2 2-2v-3.9a5.9 5.9 0 0 0-5.8 5.9 6 6 0 0 0 11.8 0v-7.4a6 6 0 0 0 3.8 1.5v-4s-1.4-.3-2.4-1.2c-.9-.8-1.5-1.8-1.5-2.6h-3.9Zm64.7 18.7a10.8 10.8 0 0 1-9.6-5.5c-.9-1.8-1.4-3.8-1.4-6.1s.5-4.3 1.4-6a10.5 10.5 0 0 1 9.5-5.6c1.3 0 2.6.3 3.9.8a10.5 10.5 0 0 1 5.6 5l-2.4 1.1c-.4-.9-1-1.6-1.7-2.3a8.4 8.4 0 0 0-5.4-2.1 8 8 0 0 0-7.1 4.4c-.7 1.3-1 3-1 4.7 0 1.8.3 3.4 1 4.8a8.2 8.2 0 0 0 3 3.2 8 8 0 0 0 7 .6 8.8 8.8 0 0 0 4.3-4.3l2.4 1.2a10.6 10.6 0 0 1-9.5 6Z" />
          <path fill="#0C0C0C" fill-rule="evenodd" d="M871 1805.4a8 8 0 0 1-4-1 7.7 7.7 0 0 1-2.9-3 10 10 0 0 1 0-8.7 7.6 7.6 0 0 1 7-4 7 7 0 0 1 3.8 1 7 7 0 0 1 2.5 3.1c.6 1.3 1 2.9 1 4.7h-12.7c.1 1 .3 2 .7 2.7a5 5 0 0 0 4.8 2.8c1.1 0 2-.2 2.9-.8.7-.5 1.4-1.2 1.8-2l2.2 1a7.1 7.1 0 0 1-4 3.7c-1 .3-2 .5-3 .5Zm4.6-10h-9.7c0-.9.3-1.6.7-2.2a5 5 0 0 1 1.9-1.7c.8-.4 1.6-.6 2.5-.6a4.4 4.4 0 0 1 4 2.3c.3.6.5 1.3.6 2.1Z" clip-rule="evenodd" />
          <path fill="#0C0C0C" d="M881.7 1789h2.4l.1 2.4a5.5 5.5 0 0 1 5-2.8c1.3 0 2.4.3 3.3.8a5 5 0 0 1 2.2 2.3c.5 1.1.8 2.6.8 4.3v9h-2.6v-8.2c0-1.6-.2-2.8-.5-3.6-.4-.8-.9-1.4-1.5-1.7-.7-.3-1.4-.5-2.2-.5a4 4 0 0 0-3.3 1.5c-.8 1-1.2 2.4-1.2 4.2v8.3h-2.5v-16Zm23.8 16.4c-1.5 0-2.7-.4-3.6-1.2-.8-.8-1.3-2-1.3-3.5v-9.4h-2.8v-2.3h2.8v-5h2.6v5h4.8v2.3h-4.8v9.2c0 .8.2 1.4.6 1.9.5.4 1.1.6 1.9.6h.7a4 4 0 0 0 1-.7l1 2.1c-.5.4-1 .6-1.5.8l-1.4.2Z" />
          <path fill="#0C0C0C" fill-rule="evenodd" d="m932.3 1805-.1-2.2a5 5 0 0 1-.4.7c-1 1.2-2.4 1.9-4.3 1.9s-3.4-.4-4.4-1.3c-1-.9-1.6-2-1.6-3.6s.5-2.9 1.6-3.7a7 7 0 0 1 4.5-1.3h4.5a8 8 0 0 0-.4-2c-.2-.9-.7-1.5-1.3-2a4 4 0 0 0-2.3-.6c-.9 0-1.6.2-2.3.6a4 4 0 0 0-1.5 1.6l-2.3-.9c.4-.7.9-1.4 1.4-1.9a6 6 0 0 1 2-1.2c.8-.3 1.7-.5 2.7-.5a7 7 0 0 1 3.7 1 5 5 0 0 1 2.2 2.5c.5 1.1.7 2.5.7 4.2v8.7h-2.4Zm-.2-7.4v.7c0 1-.1 1.8-.5 2.6a4 4 0 0 1-1.6 1.7c-.7.4-1.5.5-2.4.5-1.1 0-2-.2-2.6-.7-.6-.5-1-1.1-1-2 0-.9.4-1.6 1-2 .6-.6 1.7-.8 3.2-.8h4Zm25.5 6.7a8 8 0 0 0 4.1 1c1.1 0 2.2 0 3-.4a7.2 7.2 0 0 0 4-3.6l-2.2-1.2c-.4 1-1 1.6-1.8 2.2a5.7 5.7 0 0 1-5.7 0 5 5 0 0 1-2-2 7 7 0 0 1-.6-2.8H969c0-1.8-.3-3.4-1-4.7a7 7 0 0 0-2.5-3 6 6 0 0 0-3.8-1.2 7.6 7.6 0 0 0-6.9 4c-.7 1.3-1 2.8-1 4.4 0 1.6.3 3 1 4.3a7.7 7.7 0 0 0 2.8 3Zm-1-9h9.6c0-.8-.2-1.5-.6-2a4.4 4.4 0 0 0-4-2.4c-.8 0-1.7.2-2.5.6a5 5 0 0 0-1.8 1.7c-.4.6-.7 1.3-.7 2.1Z" clip-rule="evenodd" />
          <path fill="#0C0C0C" d="M988.6 1805.4a6.9 6.9 0 0 1-5.3-2c-.5-.5-1-1.1-1.2-1.8l2.2-1c.4.8 1 1.4 1.7 1.8a4 4 0 0 0 2.4.7 5 5 0 0 0 2.5-.6c.7-.4 1-1 1-1.7a2 2 0 0 0-.8-1.6c-.5-.4-1.2-.7-2.2-1l-1.5-.4c-1.5-.4-2.6-1-3.4-1.7a3.6 3.6 0 0 1-1.2-2.7c0-1.5.5-2.7 1.5-3.5 1-.9 2.4-1.3 4.4-1.3 1 0 1.8.2 2.6.4.7.3 1.4.7 2 1.2.5.5 1 1 1.2 1.8l-2.3 1c-.2-.8-.7-1.3-1.3-1.6a6 6 0 0 0-2.4-.5c-1 0-1.7.2-2.3.7a2 2 0 0 0-.8 1.7c0 .4.2.8.7 1.2.4.4 1.1.7 2 .9l1.6.4c1 .3 2 .7 2.6 1.2.7.5 1.3 1 1.6 1.7.4.6.6 1.3.6 2 0 1-.3 1.8-.8 2.5a5 5 0 0 1-2 1.6 8 8 0 0 1-3 .6Z" />
          <path fill="#0C0C0C" fill-rule="evenodd" d="M1000.8 1804.3a8 8 0 0 0 4.1 1c1.1 0 2.1 0 3-.4a7 7 0 0 0 4-3.6l-2.2-1.2c-.4 1-1 1.6-1.8 2.2a5 5 0 0 1-2.9.8c-1 0-2-.3-2.8-.8a5 5 0 0 1-2-2c-.3-.8-.5-1.8-.6-2.8h12.6c0-1.8-.3-3.4-1-4.7a7 7 0 0 0-2.5-3 6 6 0 0 0-3.8-1.2 7.6 7.6 0 0 0-6.9 4c-.7 1.3-1 2.8-1 4.4 0 1.6.3 3 1 4.3a7.7 7.7 0 0 0 2.8 3Zm-1-9h9.6c0-.8-.2-1.5-.6-2-.4-.8-1-1.4-1.6-1.8a5.4 5.4 0 0 0-4.9 0 5 5 0 0 0-1.8 1.7c-.4.6-.7 1.3-.7 2.1Z" clip-rule="evenodd" />
          <path fill="#0C0C0C" d="M974.8 1796.2v8.8h-2.6v-16h2.6v2.9a6 6 0 0 1 2.3-2.2 7 7 0 0 1 3.3-.8v2.4a8 8 0 0 0-2.7.5 4 4 0 0 0-2.1 1.5c-.6.7-.8 1.7-.8 2.9Zm-30.3 5.9 5.4-13.1h2.7l-6.7 16h-2.7l-6.7-16h2.7l5.3 13.1Zm-30.3-5.9v8.8h-2.6v-16h2.6v2.9a6 6 0 0 1 2.3-2.2 7 7 0 0 1 3.3-.8v2.4a8 8 0 0 0-2.7.5c-.8.3-1.5.8-2.1 1.5-.6.7-.8 1.7-.8 2.9Z" />
        </g>
      </g>
      <defs>
        <linearGradient id="c" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="d" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="e" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="f" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="g" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="h" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="i" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="j" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="k" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="l" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="m" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="n" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="o" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="p" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="q" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="r" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="s" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="t" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="u" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="v" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="w" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="x" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="y" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="z" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="A" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="B" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="C" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="D" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="E" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="F" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="G" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="H" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="I" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="J" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="K" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <linearGradient id="L" x1="0" x2="1512" y1="1617" y2="1617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".2" stop-color="#14C2F8" />
          <stop offset=".4" stop-color="#5615F7" />
          <stop offset=".6" stop-color="#FC1CAC" />
          <stop offset=".8" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FFCF01" />
        </linearGradient>
        <radialGradient id="O" cx="0" cy="0" r="1" gradientTransform="matrix(30.4 0 0 30.4 755 122)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".3" stop-color="#14C2F8" />
          <stop offset=".7" stop-color="#5615F7" />
          <stop offset="1" stop-color="#FC1CAC" />
        </radialGradient>
        <radialGradient id="P" cx="0" cy="0" r="1" gradientTransform="matrix(31.1 0 0 31.1 798 122)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFCF01" />
          <stop offset=".5" stop-color="#FF470D" />
          <stop offset="1" stop-color="#FC1CAC" />
        </radialGradient>
        <radialGradient id="Q" cx="0" cy="0" r="1" gradientTransform="matrix(29.7 0 0 29.7 755 122)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#32EA85" />
          <stop offset=".3" stop-color="#14C2F8" />
          <stop offset=".7" stop-color="#5615F7" />
          <stop offset="1" stop-color="#FF1DC4" />
        </radialGradient>
        <radialGradient id="R" cx="0" cy="0" r="1" gradientTransform="matrix(30.4 0 0 30.4 798 122)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFCF01" />
          <stop offset=".5" stop-color="#FF5001" />
          <stop offset="1" stop-color="#FC1CAC" />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h1512v1890H0z" />
        </clipPath>
        <pattern id="N" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use xlinkHref="#S" transform="scale(0)" />
        </pattern>
      </defs>
    </svg>
  )
}
