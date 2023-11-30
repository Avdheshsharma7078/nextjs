import { Inter } from 'next/font/google'
import './globals.css'
import CustomNavbar from '@/components/CustomNavbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <CustomNavbar/>
    <div className='mt-2'>
      {children}
    </div>
    <Footer/>
        </body>
    </html>
)
}
