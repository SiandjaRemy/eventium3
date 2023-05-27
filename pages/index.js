import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from './main/main'


const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  return (
    <main>
      <Head>
        <title>Eventium</title>
        <meta name="keywords" content='v, Drel, Genius'/>
      </Head>
      <Main />
    </main>
  )
}
