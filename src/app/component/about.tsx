import Image from "next/image"
import Link from "next/link"

// ===== ABOUT SECTION =====
function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white border-t border-b bg-gradient-to-br from-sky-200 via-white to-sky-300 pt-24 shadow-inner"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center px-4">
        
        {/* Image (Only on large screens) */}
        <div className="hidden lg:flex relative rounded-2xl overflow-hidden shadow-lg justify-center">
          <Image
            src="/kamrantwo.jpg"
            alt="Kamran Tasleem Ahmed"
            width={500}
            height={400}
            priority
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-sky-500">
              Kamran Tasleem Ahmed
            </span>
            . I’m a beginner in web development, currently learning{" "}
            <span className="font-semibold">Next.js</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>.  
            I have been a{" "}
            <span className="font-semibold">student at Governor House Sindh (GIAIC)</span>{" "}
            for the past <span className="font-semibold">1.5 years</span>, where I started
            my journey in <span className="font-semibold">AI</span> and{" "}
            <span className="font-semibold">Cloud Computing</span>.
          </p>

          <p className="text-gray-600 md:text-lg leading-relaxed mt-4">
            This portfolio is part of my practice work, where I share what I’m
            learning and building step by step. I’m excited to explore more about{" "}
            <span className="font-semibold">Artificial Intelligence</span>,{" "}
            <span className="font-semibold">Cloud Computing</span>, and{" "}
            <span className="font-semibold">Web Development</span>.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 mt-6 text-white font-medium shadow hover:bg-sky-600 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export { About }
