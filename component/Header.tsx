import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
  return (

    <header className="bg-primary py-6">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
            <span className="text-primary text-xl font-bold">LT</span>
          </div>
          <h1 className="text-primary-foreground text-xl font-bold">Little Triumphs</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-primary-foreground font-medium hover:underline">
            Home
          </Link>
          <Link href="#services" className="text-primary-foreground font-medium hover:underline">
            Services
          </Link>
          <Link href="#about" className="text-primary-foreground font-medium hover:underline">
            About Us
          </Link>
          <Link href="#contact" className="text-primary-foreground font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="outline" className="bg-primary-foreground text-primary">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Header
