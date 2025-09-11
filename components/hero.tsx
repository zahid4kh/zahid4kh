import { Button } from "@/components/ui/button"
import { Github, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">Zahid Khalilov</h1>
          <div className="h-1 w-24 metallic-gradient mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-2">Creative Builder & Maker</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build things for the joy of creation. From desktop applications to mobile libraries, I enjoy crafting
            solutions that make development more enjoyable.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Gera, Germany</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>halilzahid@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/zahid4kh" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
