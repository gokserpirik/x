import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './Sidebar'
import TwitterHome from './Tweets'
import Followside from './Followside'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  justify-between ml-32 lg:ml-72">

      <Sidebar />

      <TwitterHome />
      <Followside />
    </main>
  )
}
