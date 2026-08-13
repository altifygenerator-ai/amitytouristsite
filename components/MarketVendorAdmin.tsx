"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MARKET_PAYMENT_STATUSES,
  MARKET_PERMIT_STATUSES,
  MARKET_VENDOR_STATUSES,
  paymentStatusLabel,
  permitStatusLabel,
  vendorStatusLabel,
  type MarketPaymentStatus,
  type MarketPermitStatus,
  type MarketVendorRow,
  type MarketVendorStatus,
} from "@/lib/marketVendor";

type Draft = {
  status: MarketVendorStatus;
  paymentStatus: MarketPaymentStatus;
  permitStatus: MarketPermitStatus;
  boothNumber: string;
  adminNotes: string;
};

function csvEscape(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

export default function MarketVendorAdmin() {
  const [rows, setRows] = useState<MarketVendorRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [emailTarget, setEmailTarget] = useState("approved");
  const [emailSubject, setEmailSubject] = useState("Amity Saturday Market vendor update");
  const [emailMessage, setEmailMessage] = useState(
    "Hi {{name}},\n\nWe have an update for vendors for the Amity Saturday Market.\n\n[Add the final payment, permit, deadline, and setup information here.]\n\nThank you,\nNatural State Tourism Project",
  );
  const [emailStatus, setEmailStatus] = useState("");
  const [emailSending, setEmailSending] = useState(false);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/amity-market/vendors", { cache: "no-store" });
      if (response.status === 401) {
        window.location.href = "/admin/amity-market/login";
        return;
      }
      const data = (await response.json()) as { rows?: MarketVendorRow[]; error?: string };
      if (!response.ok) throw new Error(data.error || "Could not load vendors.");
      const next = data.rows ?? [];
      setRows(next);
      setDrafts(Object.fromEntries(next.map((row) => [row.id, {
        status: row.status,
        paymentStatus: row.payment_status,
        permitStatus: row.permit_status,
        boothNumber: row.booth_number || "",
        adminNotes: row.admin_notes || "",
      }])));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load vendors.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(); }, []);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (filter !== "all" && row.status !== filter) return false;
      if (!needle) return true;
      return [row.contact_name, row.business_name, row.email, row.phone, row.products_description, row.vendor_category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(needle));
    });
  }, [rows, filter, search]);

  const stats = useMemo(() => ({
    total: rows.length,
    new: rows.filter((r) => r.status === "new").length,
    approved: rows.filter((r) => ["approved", "payment_pending"].includes(r.status)).length,
    confirmed: rows.filter((r) => r.status === "confirmed").length,
    power: rows.filter((r) => r.needs_electricity).length,
    food: rows.filter((r) => r.is_food_vendor).length,
  }), [rows]);

  function updateDraft(id: string, patch: Partial<Draft>) {
    setDrafts((current) => ({ ...current, [id]: { ...current[id], ...patch } }));
  }

  async function save(row: MarketVendorRow) {
    const draft = drafts[row.id];
    if (!draft) return;
    setSaving(row.id);
    try {
      const response = await fetch("/api/admin/amity-market/vendors", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: row.id, ...draft }),
      });
      const data = (await response.json()) as { row?: MarketVendorRow; error?: string };
      if (!response.ok) throw new Error(data.error || "Could not save vendor.");
      if (data.row) setRows((current) => current.map((item) => item.id === row.id ? data.row! : item));
    } catch (e) {
      window.alert(e instanceof Error ? e.message : "Could not save vendor.");
    } finally {
      setSaving(null);
    }
  }

  function exportCsv() {
    const header = ["Contact","Business","Phone","Email","Category","Products","Booth","Power","Power details","Food","Status","Payment","Permit","Booth #","Admin notes"];
    const lines = [header.map(csvEscape).join(",")];
    for (const r of filtered) {
      lines.push([
        r.contact_name, r.business_name, r.phone, r.email, r.vendor_category, r.products_description,
        r.booth_size, r.needs_electricity ? "Yes" : "No", r.electricity_details,
        r.is_food_vendor ? "Yes" : "No", vendorStatusLabel(r.status), paymentStatusLabel(r.payment_status),
        permitStatusLabel(r.permit_status), r.booth_number, r.admin_notes,
      ].map(csvEscape).join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "amity-market-vendors.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyEmails() {
    const emails = filtered.map((r) => r.email).filter(Boolean).join(", ");
    await navigator.clipboard.writeText(emails);
    setEmailStatus(`Copied ${filtered.length} email${filtered.length === 1 ? "" : "s"}.`);
  }

  async function sendVendorEmail() {
    const count = emailTarget === "all"
      ? rows.filter((r) => !["declined", "cancelled"].includes(r.status)).length
      : rows.filter((r) => r.status === emailTarget).length;
    if (!count) {
      setEmailStatus("No vendors match that group.");
      return;
    }
    if (!window.confirm(`Send this email to ${count} vendor${count === 1 ? "" : "s"}?`)) return;

    setEmailSending(true);
    setEmailStatus("");
    try {
      const response = await fetch("/api/admin/amity-market/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: emailTarget, subject: emailSubject, message: emailMessage }),
      });
      const data = (await response.json()) as { sent?: number; failed?: string[]; error?: string };
      if (!response.ok) throw new Error(data.error || "Email could not be sent.");
      setEmailStatus(`Sent ${data.sent ?? 0}. ${data.failed?.length ? `${data.failed.length} failed.` : ""}`.trim());
      void load();
    } catch (e) {
      setEmailStatus(e instanceof Error ? e.message : "Email could not be sent.");
    } finally {
      setEmailSending(false);
    }
  }

  return (
    <div className="market-admin-shell">
      <div className="market-admin-topbar">
        <div>
          <span className="eyebrow small">Natural State Tourism Project</span>
          <h1>Amity Market Vendors</h1>
          <p>Applications, power needs, booth status, permits, payments, and vendor follow-up.</p>
        </div>
        <form method="post" action="/api/admin/amity-market/logout">
          <button className="btn-secondary" type="submit">Sign Out</button>
        </form>
      </div>

      <div className="market-admin-stats">
        <div><span>Total</span><strong>{stats.total}</strong></div>
        <div><span>New</span><strong>{stats.new}</strong></div>
        <div><span>Approved / waiting</span><strong>{stats.approved}</strong></div>
        <div><span>Confirmed</span><strong>{stats.confirmed}</strong></div>
        <div><span>Need power</span><strong>{stats.power}</strong></div>
        <div><span>Food</span><strong>{stats.food}</strong></div>
      </div>

      <section className="market-admin-panel">
        <div className="market-admin-tools">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vendor, product, email..." />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All statuses</option>
            {MARKET_VENDOR_STATUSES.map((status) => <option key={status} value={status}>{vendorStatusLabel(status)}</option>)}
          </select>
          <button className="btn-secondary" type="button" onClick={exportCsv}>Export CSV</button>
          <button className="btn-secondary" type="button" onClick={copyEmails}>Copy Emails</button>
          <button className="btn-secondary" type="button" onClick={() => void load()}>Refresh</button>
        </div>

        {loading ? <p>Loading vendor applications…</p> : null}
        {error ? <p className="form-message error">{error}</p> : null}
        {!loading && !filtered.length ? <p>No vendor applications match this view yet.</p> : null}

        <div className="market-admin-vendor-list">
          {filtered.map((row) => {
            const draft = drafts[row.id];
            if (!draft) return null;
            return (
              <article className="market-admin-vendor-card" key={row.id}>
                <div className="market-admin-vendor-head">
                  <div>
                    <span className={`market-admin-status status-${row.status}`}>{vendorStatusLabel(row.status)}</span>
                    <h2>{row.business_name || row.contact_name}</h2>
                    {row.business_name ? <p>{row.contact_name}</p> : null}
                  </div>
                  <div className="market-admin-contact">
                    <a href={`tel:${row.phone}`}>{row.phone}</a>
                    <a href={`mailto:${row.email}`}>{row.email}</a>
                    {row.website ? <a href={row.website} target="_blank" rel="noreferrer">Website / Facebook</a> : null}
                  </div>
                </div>

                <div className="market-admin-detail-grid">
                  <div><span>Category</span><strong>{row.vendor_category}</strong></div>
                  <div><span>Space</span><strong>{row.booth_size}</strong></div>
                  <div><span>Electricity</span><strong>{row.needs_electricity ? "Yes" : "No"}</strong>{row.electricity_details ? <small>{row.electricity_details}</small> : null}</div>
                  <div><span>Food</span><strong>{row.is_food_vendor ? "Yes" : "No"}</strong>{row.food_setup_details ? <small>{row.food_setup_details}</small> : null}</div>
                  <div><span>Canopy</span><strong>{row.has_canopy ? "Has own" : "Needs / unsure"}</strong></div>
                  <div><span>Tables/chairs</span><strong>{row.has_tables_chairs ? "Has own" : "Needs / unsure"}</strong>{row.interested_table_chair_rental ? <small>Interested in rental</small> : null}</div>
                </div>

                <div className="market-admin-products">
                  <span>What they’re bringing</span>
                  <p>{row.products_description}</p>
                  {row.direct_sales_company ? <p><strong>Direct sales:</strong> {row.direct_sales_company}</p> : null}
                  {row.special_setup_needs ? <p><strong>Setup:</strong> {row.special_setup_needs}</p> : null}
                  {row.notes ? <p><strong>Notes from vendor:</strong> {row.notes}</p> : null}
                </div>

                <div className="market-admin-edit-grid">
                  <label><span>Status</span><select value={draft.status} onChange={(e) => updateDraft(row.id, { status: e.target.value as MarketVendorStatus })}>{MARKET_VENDOR_STATUSES.map((status) => <option key={status} value={status}>{vendorStatusLabel(status)}</option>)}</select></label>
                  <label><span>Payment</span><select value={draft.paymentStatus} onChange={(e) => updateDraft(row.id, { paymentStatus: e.target.value as MarketPaymentStatus })}>{MARKET_PAYMENT_STATUSES.map((status) => <option key={status} value={status}>{paymentStatusLabel(status)}</option>)}</select></label>
                  <label><span>City permit</span><select value={draft.permitStatus} onChange={(e) => updateDraft(row.id, { permitStatus: e.target.value as MarketPermitStatus })}>{MARKET_PERMIT_STATUSES.map((status) => <option key={status} value={status}>{permitStatusLabel(status)}</option>)}</select></label>
                  <label><span>Booth #</span><input value={draft.boothNumber} onChange={(e) => updateDraft(row.id, { boothNumber: e.target.value })} placeholder="A12" /></label>
                </div>
                <label className="market-admin-notes"><span>Admin notes</span><textarea rows={3} value={draft.adminNotes} onChange={(e) => updateDraft(row.id, { adminNotes: e.target.value })} /></label>
                <div className="market-admin-card-actions">
                  <small>Applied {new Date(row.created_at).toLocaleString()}</small>
                  {row.payment_email_sent_at ? <small>Payment/permit email sent {new Date(row.payment_email_sent_at).toLocaleString()}</small> : null}
                  <button className="btn-primary" type="button" disabled={saving === row.id} onClick={() => void save(row)}>{saving === row.id ? "Saving…" : "Save Vendor"}</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="market-admin-panel market-admin-email-panel">
        <div className="form-heading">
          <span className="eyebrow small">Vendor email</span>
          <h2>Send the payment or permit update later.</h2>
          <p>When the final cost is settled, choose a vendor group, replace the bracketed text, and send the same update without rebuilding the site. Use <code>{"{{name}}"}</code> or <code>{"{{business}}"}</code> for personalization.</p>
        </div>
        <div className="market-admin-email-grid">
          <label><span>Recipients</span><select value={emailTarget} onChange={(e) => setEmailTarget(e.target.value)}><option value="all">All active vendors</option>{MARKET_VENDOR_STATUSES.filter((s) => !["declined","cancelled"].includes(s)).map((status) => <option key={status} value={status}>{vendorStatusLabel(status)}</option>)}</select></label>
          <label><span>Subject</span><input value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} /></label>
        </div>
        <label className="full-field"><span>Message</span><textarea rows={12} value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} /></label>
        <div className="button-row">
          <button className="btn-primary" type="button" disabled={emailSending} onClick={() => void sendVendorEmail()}>{emailSending ? "Sending…" : "Send Vendor Email"}</button>
          {emailStatus ? <span className="market-admin-email-status">{emailStatus}</span> : null}
        </div>
      </section>
    </div>
  );
}
