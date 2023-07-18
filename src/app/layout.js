import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Menubar from '@/components/menubar/Menubar'
import Head from '@/components/head/Head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kodagu',
  description: 'Kodagu intern',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-50">
      <Navbar/>
      <div className="flex justify-between mt-4">
      <Menubar/>
      <Sidebar/>
      <Head/>
      </div>
      </div>
        {children}
        </body>
    </html>
  )
}
