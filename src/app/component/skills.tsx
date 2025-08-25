"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import {
  FileCode,
  Paintbrush,
  Code2,
  Code,
  Globe,
  Calculator,
  Brain,
  Database,
  KeyRound,
} from "lucide-react"

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS / Tailwind", icon: Paintbrush },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Code },
  { name: "WordPress", icon: Globe },
  { name: "Computerize Accounting", icon: Calculator },
  { name: "openAI agent SDK", icon: Brain },
  { name: "Sanity CMS", icon: Database },
  { name: "Clerk Auth", icon: KeyRound },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-sky-500">Skills</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <skill.icon className="w-10 h-10 text-sky-500 mb-3" />
                <p className="font-medium">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
