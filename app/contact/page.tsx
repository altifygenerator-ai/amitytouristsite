"use client";

import { useState } from "react";

const suggestionTypes = [
  "Business to add",
  "Business update or correction",
  "Old photo or local memory",
  "History detail",
  "Nearby place or day trip",
  "Community event",
  "City or resource info",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    suggestionType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-3">
          Help Build the Guide
        </p>

        <h1 className="text-4xl font-semibold mb-6 md:text-5xl">
          Promote, suggest, or help update Amity.
        </h1>

        <p className="text-[color:var(--color-muted)] leading-relaxed text-lg">
          This guide is for local businesses, old Amity memories, nearby stops,
          city information, corrections, and anything that helps people better
          understand Amity and the surrounding area.
        </p>

        <div className="mt-6">
          <a
            href="tel:8702604880"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition hover:scale-[1.02]"
          >
            Call or Text: (870) 260-4880
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-14">
        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm border border-black/5">
          <h2 className="text-lg font-semibold mb-2">Basic Listing</h2>
          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
            Get your local business added with a short description, contact
            info, link, and directions so people can find it.
          </p>
        </div>

        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm border border-black/5">
          <h2 className="text-lg font-semibold mb-2">Local Suggestions</h2>
          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
            Send businesses, nearby places, event ideas, old photos, local
            memories, corrections, or spots that deserve more attention.
          </p>
        </div>

        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm border border-black/5">
          <h2 className="text-lg font-semibold mb-2">Community Memory</h2>
          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
            Amity’s value is not just tourism. It is history, family stories,
            schools, churches, businesses, and the places people remember.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-[color:var(--bg-card)] rounded-xl p-6 shadow-sm border border-black/5">
          <h2 className="text-xl font-semibold mb-4">What can be submitted?</h2>

          <ul className="space-y-3 text-[color:var(--color-muted)]">
            <li>• Restaurants, cafes, coffee, groceries, and local shops</li>
            <li>• Cabins, rentals, lodging, and nearby stays</li>
            <li>• Local services, health resources, and practical stops</li>
            <li>• Old Amity photos, school memories, and town stories</li>
            <li>• Caddo River, Lake Greeson, DeGray, and nearby trip ideas</li>
            <li>• Corrections for closed businesses or outdated details</li>
          </ul>

          <p className="mt-6 text-sm text-[color:var(--color-muted)] leading-relaxed">
            If you are not sure where something fits, send it anyway. The goal
            is to make Amity easier to find online without pretending it is
            something it is not.
          </p>

          <div className="mt-6">
            <a
              href="tel:8702604880"
              className="inline-block text-sm underline text-[color:var(--color-accent)]"
            >
              Or call/text (870) 260-4880 →
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Send information</h2>

          {submitted ? (
            <p className="text-green-700 font-medium bg-green-50 rounded-xl p-4">
              Thanks! Your message was sent.
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
                placeholder="Business / place name, if any"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />

              <select
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                defaultValue=""
                onChange={(e) =>
                  setForm({ ...form, suggestionType: e.target.value })
                }
              >
                <option value="" disabled>
                  What are you sending?
                </option>
                {suggestionTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <textarea
                placeholder="Tell us what should be added, corrected, promoted, or remembered."
                className="w-full border border-black/10 p-3 rounded-lg bg-white min-h-[160px]"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button className="w-full bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
