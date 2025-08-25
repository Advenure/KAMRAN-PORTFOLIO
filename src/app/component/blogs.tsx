import Image from "next/image"
import Link from "next/link"
function Blog() {
 const projects = [
  {
    id: 1,
    title: "Watch Live",
    img: "/blogswebsite/ice.png",
    url: "https://ice-cream-website-kohl.vercel.app/#service",
  },
  {
    id: 2,
    title: "Watch Live",
    img: "/blogswebsite/moble.png",
    url: "https://iphone-pro-max.vercel.app/",
  },
  {
    id: 3,
    title: "Watch Live",
    img: "/blogswebsite/watch.png",
    url: "https://your-live-project-3.com",
  },
  {
    id: 4,
    title: "Watch Live",
    img: "/blogswebsite/blogs.png",
    url: "https://milstone-three-bdgs.vercel.app/",
  },
  {
    id: 5,
    title: "Watch Live",
    img: "/blogswebsite/glaxy watch.png",
    url: "https://ecommerce-project-fawn.vercel.app/",
  },
  {
    id: 6,
    title: "Watch Live",
    img: "/blogswebsite/game.png",
    url: "https://arista-mc-xnlt.vercel.app/",
  },
]


  return (
    <section id="portfolio" className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Portfolio website</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A showcase of my recent works in web development and design. Each project reflects creativity and attention to detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
  <Link
    key={p.id}
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
  >
    <Image
      src={p.img}
      alt={p.title}
      width={600}
      height={400}
      className="object-cover w-full h-full group-hover:scale-105 transition"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
      <span className="text-white text-lg font-medium">{p.title}</span>
    </div>
  </Link>
))}

        </div>
      </div>
    </section>
  )
}

export { Blog }
