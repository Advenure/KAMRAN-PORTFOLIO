"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

type Blog = {
  id: number
  title: string
  img: string
  url: string
  excerpt: string
  tags: string[]
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Ecommerce Avion Furniture website",
    img: "/hack/furnituerone.png",
    url: "https://furniturewebsiteapi-1lgo.vercel.app/",
    excerpt: "This appears to be a multi page for a furniture brand named Avion.",
    tags: ["Next.js", "Tailwind", "TypeScript", "API Fetch","Clerk","Stripe"],
  },
  {
    id: 2,
    title: "Ecommerce Summer Collection",
    img: "/hack/summercloth.png",
    url: "https://hackathon-cyan-one.vercel.app/",
    excerpt: "This appears to be a multi page for a Cloth brand named Shop.com.",
    tags: ["Next.js", "Tailwind", "TypeScript", "API Fetch","Clerk","Stripe"],
  },
  {
    id: 3,
    title: "Motor Car",
    img: "/hack/motor.png",
    url: "https://blog-website-three-murex.vercel.app/",
    excerpt: "This appears to be a multi page for a Car brand named Ahmed CAR.",
    tags: ["Next.js", "Tailwind", "TypeScript", "API Fetch","Clerk","Stripe"],
  },
  {
    id: 4,
    title: "Fetching Like a Pro: Route Handlers",
    img: "/hack/furniture Best.png",
    url: "https://furniro-market.vercel.app/",
    excerpt: "This appears to be a landing page for a furniture brand named Roket.",
    tags: ["Next.js", "Tailwind", "TypeScript", "API Fetch","Clerk","Stripe"],
  },
]

export default function Blogs() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm tracking-widest uppercase bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
            Hackathon
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Team Project
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Case studies and deep-dives featuring Next.js, Tailwind, TypeScript, Stripe, Clerk & API patterns.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((b) => (
            <SwiperSlide key={b.id}>
              <article className="group bg-white rounded-2xl overflow-hidden border shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={b.img}
                    alt={b.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="mt-3 font-semibold text-lg group-hover:text-sky-600 transition">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 flex-1">{b.excerpt}</p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <Link
                      href={b.url}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-full px-4 py-2 transition"
                    >
                      Watch Live <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
