"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        "your_service_id",    // ← replace with EmailJS service ID
        "your_template_id",   // ← replace with EmailJS template ID
        form.current,
        "your_public_key"     // ← replace with EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅")
          form.current?.reset()
        },
        (error) => {
          console.error(error.text)
          alert("Failed to send message ❌")
        }
      )
  }

  return (
    <section id="contact" className="py-20  border-t ">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a project idea, collaboration, or just want to say hello? Feel free to reach out!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-sky-500" size={20} /> kamranwebstock@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-sky-500" size={20} /> +92 313 2181688
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-sky-500" size={20} /> Karachi, Pakistan
            </li>
          </ul>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/923132181688?text=Hello%20Kamran%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            <MessageCircle size={20} /> Message on WhatsApp
          </Link>
        </div>

        {/* Contact Form (EmailJS) */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-sky-500 text-white px-6 py-3 font-medium hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
