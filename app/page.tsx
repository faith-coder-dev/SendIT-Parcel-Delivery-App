"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "https://media.istockphoto.com/id/1456999523/photo/portrait-of-black-man-worker-working-in-large-warehouse-retail-store-industry-factory-rack-of.jpg?s=612x612&w=0&k=20&c=pKO4drQuaHgvgGBfGVPhcxX8RBbJQDUSpV5d8qx9JmA=",
  "https://www.opentext.com/assets/images/products-solutions/solution-industry-category/opentext-image-is-logistics-and-transportation-en.jpg",
  "https://3.bp.blogspot.com/-B57Viipj0a4/U3nk8OXBh7I/AAAAAAAAGk4/NBHq_KcCYMY/s1600/_1-PVDU+(Large).jpg",
  "https://tse3.mm.bing.net/th/id/OIP.CxTg8G5MMcyTCy39TB3ALQHaDt?w=1200&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
]

const roleCards = [
  {
    title: "User",
    description: "Send parcels, track deliveries, and manage your orders.",
  },
  {
    title: "Driver",
    description: "Deliver parcels, update locations, and manage assignments.",
  },
  {
    title: "Admin",
    description: "Manage orders, update statuses, and oversee operations.",
  },
]

export default function Page() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 6200)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="scroll-smooth bg-slate-950 text-white">
      <header className="fixed top-0 z-40 w-full border-b border-cyan-500/20 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="text-2xl font-bold tracking-tight text-cyan-400">
            SendIT
          </a>
          <div className="flex items-center gap-3 text-xs font-medium text-slate-200 sm:gap-5 sm:text-sm">
            <a href="#home" className="transition hover:text-cyan-300">Home</a>
            <a href="#roles" className="transition hover:text-cyan-300">Who are you</a>
            <a href="#services" className="transition hover:text-cyan-300">Services</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 sm:px-6">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                index === activeImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-slate-950/65" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-cyan-400 sm:text-6xl md:text-7xl">SendIT</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-100 sm:text-2xl">
            Fast, reliable, and secure courier delivery — from pickup to doorstep.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#roles"
              className="rounded-full bg-cyan-400 px-10 py-4 text-lg font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-300"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-full border border-cyan-400 px-10 py-4 text-lg font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="roles" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Who are you?</h2>
          <p className="mt-4 text-xl text-slate-300">Select your role to get the best experience.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roleCards.map((role) => (
            <article
              key={role.title}
              className="rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-10 text-center transition hover:border-cyan-300/60 hover:bg-slate-900"
            >
              <h3 className="text-3xl font-semibold text-cyan-300">{role.title}</h3>
              <p className="mt-6 text-lg text-slate-200">{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-900/60 px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-4xl font-bold text-cyan-400 sm:text-5xl">Services</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Parcel Pickup</h3>
              <p className="mt-3 text-base text-slate-300">Schedule doorstep pickup for personal and business deliveries.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Live Tracking</h3>
              <p className="mt-3 text-base text-slate-300">Monitor package movement in real time with status updates.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Fleet Coordination</h3>
              <p className="mt-3 text-base text-slate-300">Route assignments and delivery management for operations teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-10 text-center">
          <h2 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Ready to send?</h2>
          <p className="mt-4 text-xl text-slate-300">Use the role section above to continue as User, Driver, or Admin.</p>
          <a
            href="#roles"
            className="mt-8 inline-flex rounded-full bg-cyan-400 px-10 py-4 text-lg font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Choose a Role
          </a>
        </div>
      </section>
    </main>
  )
}
