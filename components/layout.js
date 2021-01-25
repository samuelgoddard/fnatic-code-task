import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full flex-1 py-5">
        {children}
      </div>
      <Footer />
    </div>
  )
}
