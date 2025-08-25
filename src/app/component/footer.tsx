import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        
        {/* Brand / Intro */}
        <div>
          <h2 className="text-xl font-bold text-white">Kamran Tasleem Ahmed</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A passionate web developer creating modern, responsive and user-friendly websites with Next.js, Tailwind CSS & TypeScript.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="hover:text-sky-400 transition">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-sky-400 transition">About</Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-sky-400 transition">Portfolio</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-sky-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-5">
            <Link 
              href="https://www.linkedin.com/in/kamran-tasleem-72a66136b" 
              target="_blank" 
              className="p-2 bg-gray-800 rounded-lg hover:bg-sky-600 transition"
            >
              <Linkedin size={20} />
            </Link>

            <Link 
              href="kamranwebstock@gmail.com" 
              className="p-2 bg-gray-800 rounded-lg hover:bg-sky-600 transition"
            >
              <Mail size={20} />
            </Link>

            <Link 
              href="https://github.com/Advenure?tab=repositories" 
              target="_blank" 
              className="p-2 bg-gray-800 rounded-lg hover:bg-sky-600 transition"
            >
              <Github size={20} />
            </Link>

           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kamran Tasleem Ahmed. All rights reserved.
      </div>
    </footer>
  )
}
