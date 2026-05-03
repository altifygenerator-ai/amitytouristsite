"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })

    setSubmitted(true)
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* HERO */}
      <section className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-3">
          Local Business Promotion
        </p>

        <h1 className="text-4xl font-semibold mb-6">
          Promote Your Business in Amity
        </h1>

        <p className="text-[color:var(--color-muted)] leading-relaxed">
          Get your business in front of locals and visitors looking for places to eat,
          stay, shop, and explore around Amity and the surrounding area.
        </p>

        {/* 📞 PHONE CTA */}
        <div className="mt-6">
          <a
            href="tel:8702604880"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition hover:scale-[1.02]"
          >
            Call or Text: (870) 260-4880
          </a>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="grid md:grid-cols-3 gap-6 mb-14">
        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Basic Listing</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Get your business listed with contact info, description, and directions.
          </p>
        </div>

        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Featured Spot</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Be one of the first businesses visitors see on the homepage or listings.
          </p>
        </div>

        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">More Visibility</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Reach people searching for local businesses, cabins, food, and services.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT INFO */}
        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Who this is for
          </h2>

          <ul className="space-y-3 text-[color:var(--color-muted)]">
            <li>• Restaurants, cafes, and food spots</li>
            <li>• Cabins, rentals, and lodging</li>
            <li>• Shops and boutiques</li>
            <li>• Local services and contractors</li>
            <li>• Attractions and community stops</li>
          </ul>

          <p className="mt-6 text-sm text-[color:var(--color-muted)]">
            If you're not sure, just reach out — we can point you in the right direction.
          </p>

          {/* SECOND PHONE CTA */}
          <div className="mt-6">
            <a
              href="tel:8702604880"
              className="inline-block text-sm underline text-[color:var(--color-accent)]"
            >
              Or call/text (870) 260-4880 →
            </a>
          </div>
        </div>

        {/* FORM */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Request a Listing
          </h2>

          {submitted ? (
            <p className="text-green-600 font-medium">
              Thanks! We’ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Name"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                placeholder="Email"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                placeholder="Business Name"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />

              <textarea
                placeholder="Tell us about your business and what you're interested in"
                className="w-full border border-black/10 p-3 rounded-lg bg-white min-h-[140px]"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button className="w-full bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition">
                Submit Request
              </button>

            </form>
          )}
        </div>

      </section>

    </main>
  )
}