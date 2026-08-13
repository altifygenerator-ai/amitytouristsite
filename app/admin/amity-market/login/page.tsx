import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amity Market Admin Login",
  robots: { index: false, follow: false },
};

export default async function MarketAdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const message = params.error === "password"
    ? "That password didn’t match."
    : params.error === "config"
      ? "Admin access is not configured yet. Add MARKET_ADMIN_PASSWORD in Vercel."
      : "";

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <span className="eyebrow small">Natural State Tourism Project</span>
        <h1>Amity Market Admin</h1>
        <p>Vendor applications, booth planning, payment status, permits, and vendor emails.</p>
        <form method="post" action="/api/admin/amity-market/login" className="admin-login-form">
          <label>
            <span>Admin password</span>
            <input type="password" name="password" autoComplete="current-password" required autoFocus />
          </label>
          <button type="submit" className="btn-primary">Sign In</button>
          {message ? <p className="form-message error">{message}</p> : null}
        </form>
      </div>
    </main>
  );
}
