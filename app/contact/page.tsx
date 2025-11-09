"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0fOIh6_Uphaf8Bx9KBGVWHzq3cPc-8DVNsGWfiV2bM7PJ6Evpmu9-yK2_QONoqyjU/exec";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    document.body.appendChild(script);

    (window as any).onHcaptchaSuccess = (token: string) => setCaptchaToken(token);

    return () => { delete (window as any).onHcaptchaSuccess; };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaToken) return setStatus("Please complete the security check.");

    setStatus("Sending your message…");
    const form = e.currentTarget;
    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      company: form.company.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    const sheetPromise = fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ ...data, "h-captcha-response": captchaToken }).toString(),
    });

    const emailPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const [sheetRes, emailRes] = await Promise.allSettled([sheetPromise, emailPromise]);
    const sheetOk = sheetRes.status === "fulfilled";
    const emailOk = emailRes.status === "fulfilled" && (emailRes.value as Response).ok;

    setStatus(
      sheetOk && emailOk
        ? "Thank you! Your message has been sent. Please allow 1–2 business days for a reply."
        : "Thank you! We received your message and will reply within 1–2 business days."
    );

    if (sheetOk || emailOk) {
      form.reset();
      setCaptchaToken("");
      (window as any).hCaptcha?.reset?.();
    }
  }

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact NAPCO</h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition" />
            <input name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition" />
          </div>
          <input name="company" placeholder="Company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition" />
          <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition" />
          <textarea name="message" placeholder="Message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition resize-none" />

          <div className="h-captcha" data-sitekey="7106ac8e-cbe0-41ea-ac76-f34285420502" data-callback="onHcaptchaSuccess"></div>

          <button type="submit" className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition shadow-sm">
            Send Message
          </button>

          <p className="text-center text-sm text-gray-600 min-h-[1.5rem]">{status}</p>
        </form>
      </div>
    </section>
  );
}