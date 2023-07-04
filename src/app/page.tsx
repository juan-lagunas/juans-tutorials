import Header from "./components/Header"
import ModernHouse from "./components/modern/ModernHouse"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <Header />
      <ModernHouse />
      <Footer />
    </div>
  )
}
