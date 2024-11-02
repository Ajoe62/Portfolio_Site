import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Joseph Akharume - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}