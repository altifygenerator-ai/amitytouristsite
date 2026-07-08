"use client";

import { useState } from "react";
import { businessTypes, listingOptions, suggestionTypes } from "@/data/amity";

export default function ContactForms({ showPromotion = true }: { showPromotion?: boolean }) {
  const [advertiseStatus, setAdvertiseStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [advertiseMessage, setAdvertiseMessage] = useState("");
  const [suggestionStatus, setSuggestionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [suggestionMessage, setSuggestionMessage] = useState("");

  async function handleAdvertiseSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAdvertiseStatus("loading");
    setAdvertiseMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      type: "advertising_request",
      businessName: String(formData.get("businessName") || ""),
      contactName: String(formData.get("contactName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      businessType: String(formData.get("businessType") || ""),
      website: String(formData.get("website") || ""),
      location: String(formData.get("location") || ""),
      listingType: String(formData.get("listingType") || ""),
      message: String(formData.get("message") || ""),
      site: "Amity Arkansas Guide",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Something went wrong.");
      setAdvertiseStatus("success");
      setAdvertiseMessage("Thanks. Your request was sent. We’ll get back with you as soon as we can.");
      form.reset();
    } catch (error) {
      setAdvertiseStatus("error");
      setAdvertiseMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  async function handleSuggestionSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuggestionStatus("loading");
    setSuggestionMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      suggestionType: String(formData.get("suggestionType") || ""),
      placeName: String(formData.get("placeName") || ""),
      location: String(formData.get("location") || ""),
      link: String(formData.get("link") || ""),
      message: String(formData.get("message") || ""),
      site: "Amity Arkansas Guide",
    };

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Something went wrong.");
      setSuggestionStatus("success");
      setSuggestionMessage("Thanks. Your suggestion was sent. We’ll review it as soon as we can.");
      form.reset();
    } catch (error) {
      setSuggestionStatus("error");
      setSuggestionMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {showPromotion ? (
        <section className="section">
          <div className="container contact-split">
            <div>
              <span className="eyebrow">Local business promotion</span>
              <h2>Get your Amity business in front of nearby visitors.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Amity Arkansas Guide helps people coming from Glenwood, the Caddo River, Lake Greeson, and nearby cabin weekends find the local stops that are still here.
              </p>
              <p style={{ marginTop: 16 }}>
                Basic listings are free so visitors can find what is here. Featured listings, spotlight pages, and sponsorships are kept affordable for small businesses, vendors, and local groups that want better visibility.
              </p>

              <div className="mini-grid" style={{ marginTop: 28 }}>
                <div className="note-card soft-note">
                  <h3>Built around visitor needs</h3>
                  <p>Food after the river, local stops, access notes, town history, square events, and places worth checking before heading home.</p>
                </div>
                <div className="note-card soft-note">
                  <h3>Affordable visibility</h3>
                  <p>Start free, upgrade when it fits, or sponsor river information, a market page, or a Trade Days-style effort.</p>
                </div>
              </div>
            </div>

            <form id="advertise-form" onSubmit={handleAdvertiseSubmit} className="form-card">
              <div className="form-heading">
                <span className="eyebrow small">Get listed</span>
                <h2>Request listing or sponsorship info</h2>
                <p>Send a few details and we’ll follow up about getting your business listed, featured, or connected with Amity river and market traffic.</p>
              </div>

              <div className="form-grid">
                <label>
                  <span>Business name *</span>
                  <input name="businessName" required placeholder="Business name" />
                </label>
                <label>
                  <span>Your name *</span>
                  <input name="contactName" required placeholder="Your name" />
                </label>
                <label>
                  <span>Email *</span>
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
                <label>
                  <span>Phone</span>
                  <input name="phone" placeholder="Phone number" />
                </label>
                <label>
                  <span>Business type *</span>
                  <select name="businessType" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    {businessTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label>
                  <span>Listing interest</span>
                  <select name="listingType" defaultValue="Not sure yet">
                    <option>Not sure yet</option>
                    <option>Basic Listing</option>
                    <option>Featured Listing</option>
                    <option>Business Spotlight</option>
                    <option>River or Market Sponsor</option>
                    <option>Website or Google help too</option>
                  </select>
                </label>
                <label>
                  <span>Website or Facebook</span>
                  <input name="website" placeholder="Website or Facebook link" />
                </label>
                <label>
                  <span>Location / service area</span>
                  <input name="location" placeholder="Amity, Glenwood, Caddo River, nearby area" />
                </label>
              </div>

              <label className="full-field">
                <span>What would you like listed, promoted, or sponsored?</span>
                <textarea name="message" rows={5} placeholder="Tell us what you offer, what visitors should know, or what kind of sponsorship you are interested in." />
              </label>

              <button type="submit" disabled={advertiseStatus === "loading"} className="submit-button">
                {advertiseStatus === "loading" ? "Sending..." : "Submit Request"}
              </button>

              {advertiseMessage ? (
                <p className={`form-message ${advertiseStatus === "success" ? "success" : "error"}`}>{advertiseMessage}</p>
              ) : null}
            </form>
          </div>
        </section>
      ) : null}

      {showPromotion ? (
        <section className="section pt-none">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Simple listing options</span>
              <h2>Free listings, featured spots, and sponsor options.</h2>
              <p className="lead">
                Keep it practical. Start with a basic listing, upgrade where it makes sense, or sponsor the pieces that bring more people into Amity.
              </p>
            </div>
            <div className="card-grid four-grid">
              {listingOptions.map((option) => (
                <div key={option.title} className="note-card listing-card">
                  <h3>{option.title}</h3>
                  <strong>{option.price}</strong>
                  <p>{option.text}</p>
                  <a href="#advertise-form" className="mini-button">Ask about this</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={showPromotion ? "section section-river" : "section"}>
        <div className="container contact-split">
          <div>
            <span className="eyebrow">Send a local update</span>
            <h2>Have a local suggestion, event, correction, or Trade Days memory?</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Send businesses to add, event ideas, river access notes, corrections, local photos, town-square ideas, or memories from Amity Trade Days.
            </p>
            <div className="mini-grid" style={{ marginTop: 28 }}>
              <div className="note-card soft-note">
                <h3>Guide updates</h3>
                <p>Send corrections, missing details, current links, photos, or local tips that would help visitors plan better.</p>
              </div>
              <div className="note-card soft-note">
                <h3>Market and event ideas</h3>
                <p>Tell us about vendors, fundraisers, church sales, music, food pop-ups, or anything that could bring people into town.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSuggestionSubmit} className="form-card">
            <div className="form-heading">
              <span className="eyebrow small">Send a suggestion</span>
              <h2>Suggest a place or update</h2>
              <p>Help keep Amity information useful for locals, visitors, river travelers, vendors, and businesses trying to build something here.</p>
            </div>

            <div className="form-grid">
              <label>
                <span>Your name</span>
                <input name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Suggestion type *</span>
                <select name="suggestionType" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  {suggestionTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label>
                <span>Place / business / event name</span>
                <input name="placeName" placeholder="Name if there is one" />
              </label>
              <label>
                <span>Location</span>
                <input name="location" placeholder="Amity, Hwy 182, town square, nearby area" />
              </label>
              <label>
                <span>Website, Facebook, or link</span>
                <input name="link" placeholder="Optional link" />
              </label>
            </div>

            <label className="full-field">
              <span>What should we know? *</span>
              <textarea name="message" rows={5} required placeholder="Tell us what should be added, corrected, updated, or looked into." />
            </label>

            <button type="submit" disabled={suggestionStatus === "loading"} className="submit-button">
              {suggestionStatus === "loading" ? "Sending..." : "Send Suggestion"}
            </button>

            {suggestionMessage ? (
              <p className={`form-message ${suggestionStatus === "success" ? "success" : "error"}`}>{suggestionMessage}</p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
