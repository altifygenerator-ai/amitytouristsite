"use client";

import { FormEvent, useState } from "react";
import { MARKET_VENDOR_CATEGORIES } from "@/lib/marketVendor";

export default function VendorApplicationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [needsElectricity, setNeedsElectricity] = useState(false);
  const [isFoodVendor, setIsFoodVendor] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = Object.fromEntries(data.entries());
    Object.assign(payload, {
      needsElectricity,
      isFoodVendor,
      hasCanopy: data.get("hasCanopy") === "on",
      hasTablesChairs: data.get("hasTablesChairs") === "on",
      interestedTableChairRental: data.get("interestedTableChairRental") === "on",
    });

    try {
      const response = await fetch("/api/amity-market/vendors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "The application could not be submitted.");

      setStatus("success");
      setMessage("Got it. Your vendor application is in. We’ll email the final payment, permit, and setup details once those are finished.");
      form.reset();
      setNeedsElectricity(false);
      setIsFoodVendor(false);
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The application could not be submitted right now.");
    }
  }

  return (
    <form className="vendor-application-card" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow small">Vendor application</span>
        <h2>Tell us what you’d like to bring.</h2>
        <p>
          There is no payment due with this form. We’re finalizing the booth and city permit details now and will email approved vendors before anything is due.
        </p>
      </div>

      <div className="form-grid">
        <label>
          <span>Your name *</span>
          <input name="contactName" autoComplete="name" required />
        </label>
        <label>
          <span>Business or booth name</span>
          <input name="businessName" autoComplete="organization" />
        </label>
        <label>
          <span>Phone *</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Facebook page or website</span>
          <input name="website" type="url" placeholder="https://" />
        </label>
        <label>
          <span>Vendor category *</span>
          <select name="vendorCategory" required defaultValue="">
            <option value="" disabled>Select one</option>
            {MARKET_VENDOR_CATEGORIES.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
      </div>

      <label className="full-field">
        <span>What do you plan to sell or offer? *</span>
        <textarea name="productsDescription" rows={5} required placeholder="A quick description is plenty." />
      </label>

      <div className="form-grid vendor-setup-grid">
        <label>
          <span>Space needed</span>
          <select name="boothSize" defaultValue="10x10">
            <option value="10x10">Standard 10x10</option>
            <option value="10x20">10x20</option>
            <option value="Food trailer / truck">Food trailer / truck</option>
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </label>
        <label>
          <span>Direct-sales company, if applicable</span>
          <input name="directSalesCompany" placeholder="Scentsy, Tupperware, etc." />
        </label>
      </div>

      <div className="vendor-check-grid">
        <label className="vendor-check">
          <input name="hasCanopy" type="checkbox" defaultChecked />
          <span><strong>I have my own canopy</strong><small>Canopies will need proper weights.</small></span>
        </label>
        <label className="vendor-check">
          <input name="hasTablesChairs" type="checkbox" defaultChecked />
          <span><strong>I have my own tables and chairs</strong><small>Most vendors are expected to bring their setup.</small></span>
        </label>
        <label className="vendor-check">
          <input name="interestedTableChairRental" type="checkbox" />
          <span><strong>I may need a table or chairs</strong><small>We’re checking what can be made available for a small fee.</small></span>
        </label>
        <label className="vendor-check">
          <input checked={needsElectricity} onChange={(e) => setNeedsElectricity(e.target.checked)} type="checkbox" />
          <span><strong>I need electricity</strong><small>Power will be limited and assigned where available.</small></span>
        </label>
      </div>

      {needsElectricity ? (
        <label className="full-field vendor-conditional-field">
          <span>What would you plug in? *</span>
          <textarea name="electricityDetails" rows={3} required placeholder="Fans, sharpening equipment, warmer, lights, etc." />
        </label>
      ) : null}

      <div className="vendor-check-grid vendor-food-row">
        <label className="vendor-check">
          <input checked={isFoodVendor} onChange={(e) => setIsFoodVendor(e.target.checked)} type="checkbox" />
          <span><strong>I’m a food or drink vendor</strong><small>Tell us about the trailer, tent, cooking, or serving setup.</small></span>
        </label>
      </div>

      {isFoodVendor ? (
        <label className="full-field vendor-conditional-field">
          <span>Food setup details *</span>
          <textarea name="foodSetupDetails" rows={3} required placeholder="Trailer size, tent setup, cooking equipment, generator, etc." />
        </label>
      ) : null}

      <label className="full-field">
        <span>Anything special about your setup?</span>
        <textarea name="specialSetupNeeds" rows={3} placeholder="Trailer access, extra depth, mobility needs, unusual display, etc." />
      </label>

      <label className="full-field">
        <span>Anything else we should know?</span>
        <textarea name="notes" rows={4} />
      </label>

      <label className="market-honeypot" aria-hidden="true">
        Website
        <input name="websiteField" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="vendor-terms-box">
        <strong>Before you submit</strong>
        <p>
          Sending this form does not guarantee a booth. Approved vendors will receive final booth cost, City of Amity permit instructions, payment details, setup times, and event rules by email before their space is confirmed.
        </p>
      </div>

      <button className="submit-button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending Application..." : "Send Vendor Application"}
      </button>

      {message ? <p className={`form-message ${status === "success" ? "success" : "error"}`}>{message}</p> : null}
    </form>
  );
}
