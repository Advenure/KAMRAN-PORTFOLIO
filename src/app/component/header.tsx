"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight, Download } from "lucide-react"

export default function NavBaar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b ">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            Kamran Ahmed<span className="text-sky-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#home" className="hover:text-sky-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-sky-500">
              About
            </Link>
            <Link href="#blog" className="hover:text-sky-500">
              Hackathone
            </Link>
            
            <Link href="#contact" className="hover:text-sky-500">
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg border"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col items-start px-4 py-2 space-y-2 text-sm font-medium">
              <Link href="#home" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="#blog" onClick={() => setOpen(false)}>
                Hackathone
              </Link>
            
              <Link href="#contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
         className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-white to-sky-300 pt-24 shadow-inner"
>
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          {/* Text content */}
          <div>
           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
  Hi, I’m <span className="text-sky-500">Kamran</span> 👋
</h1>
<p className="mt-4 text-gray-600 md:text-lg">
  Welcome to my simple portfolio website. I’m learning web development and 
  practicing with Next.js and Tailwind CSS. This site is just a small start 
  to show my work and projects as I keep improving. 🚀
</p>

           <div className="mt-6 flex flex-wrap gap-4">
  <Link
    href="#portfolio"
    className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 md:px-6 md:py-2 text-white font-medium shadow hover:bg-sky-600 transition"
  >
    View Work <ArrowRight size={18} />
  </Link>

  <Link
    href="/KAMRAN AHMED RESUME.pdf"
    download
    className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-white font-medium shadow hover:bg-gray-900 transition"
  >
    <Download size={18} />
    Download CV
  </Link>
</div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg border">
            <Image
              src="/kamrantwo.jpg"
              alt="Hero"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
