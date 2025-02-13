import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Rocket, Brain, Palette, Users } from "lucide-react"
import imgaeLastThird from '../public/jaikishan-patel-x-DkJEpGJ0I-unsplash-min.jpg'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="py-4 bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            FutureKids Academy
          </h1>
          <nav>
            <ul className="flex space-x-6">
              {["Home", "About", "Programs", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Welcome to the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Early Learning
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Where imagination meets innovation, preparing young minds for a world of endless possibilities.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105">
              Enroll Now <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="programs" className="py-20 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Futuristic Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProgramCard
                icon={<Rocket className="w-12 h-12 text-blue-400" />}
                title="Space Explorers"
                description="Embark on interstellar adventures and learn about the cosmos."
              />
              <ProgramCard
                icon={<Brain className="w-12 h-12 text-purple-400" />}
                title="Mini Innovators"
                description="Develop problem-solving skills through cutting-edge tech play."
              />
              <ProgramCard
                icon={<Palette className="w-12 h-12 text-pink-400" />}
                title="Digital Artists"
                description="Create masterpieces using next-gen digital art tools."
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Glimpse into Tomorrow</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=500&q=80",
                "https://images.unsplash.com/photo-1510751007277-36932aac9ebd?w=500&q=80",
                "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?w=500&q=80",
                "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?w=500&q=80",
                "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&q=80",
                imgaeLastThird,
                "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&q=80",
                "https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?w=500&q=80",
              ].map((src, index) => (
                <GalleryImage key={index} src={src} alt={`Futuristic learning environment ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-t from-gray-900 to-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Connect with the Future</h2>
            <p className="mb-8 text-gray-300">Have questions about our innovative programs?</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105">
              Contact Us <Users className="ml-2 inline" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 FutureKids Academy. Shaping tomorrow's innovators today.</p>
          <p className="mt-2">123 Quantum Lane, Neoville, FT 54321</p>
          <p>Holo-Phone: (555) 876-5432 | Quantum-Mail: info@futurekids.edu</p>
        </div>
      </footer>
    </div>
  )
}

function ProgramCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="text-4xl mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  )
}

function GalleryImage({ src, alt }) {
  return (
    <div className="aspect-square relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="filter hover:brightness-110"
      />
    </div>
  )
}

