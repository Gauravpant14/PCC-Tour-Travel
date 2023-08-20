import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import NavigateTop from '@/components/NavigateTop'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
     <Header/>
     <Main/>
     <Footer/>
     <NavigateTop />
   </main>
  )
}
