import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './css/globals.scss'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/helper/scroll-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rakesh Syal | Full Stack Developer',
  description: 'Portfolio website of Rakesh Syal - Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  )
}
