"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/nepal-destination.jpg"
          alt="Contact Mandala Adventures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">Get in Touch</p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed">
          Ready to plan your adventure? Have questions about our trips? We'd love to hear from you.
          Fill out the form below or reach out directly.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      name="firstName"
                      id="firstName"
                      placeholder="Your first name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      name="lastName"
                      id="lastName"
                      placeholder="Your last name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    name="company"
                    id="company"
                    placeholder="Your company (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your dream adventure or ask us a question..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                  />
                </div>

                <div className="h-captcha" data-sitekey="7106ac8e-cbe0-41ea-ac76-f34285420502" data-callback="onHcaptchaSuccess"></div>

                <button type="submit" className="w-full bg-orange-700 text-white font-semibold py-3 rounded-lg hover:bg-orange-800 transition shadow-sm">
                  Send Message
                </button>

                {status && (
                  <p className={`text-center text-sm ${status.includes('Thank you') ? 'text-green-600' : 'text-gray-600'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
              </div>
              <a href="tel:+18018231551" className="text-xl font-semibold text-orange-700 hover:text-orange-800 transition">
                (801) 823-1551
              </a>
              <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9am - 5pm MST</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
              </div>
              <a href="mailto:info@mandalaadventures.com" className="text-orange-700 hover:text-orange-800 transition font-medium">
                info@mandalaadventures.com
              </a>
              <p className="text-sm text-gray-500 mt-1">We reply within 1-2 business days</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
              </div>
              <p className="text-gray-700">
                Mandala Adventures<br />
                8744 S Sandy Pkwy Ste E<br />
                Sandy, UT 84070-6436<br />
                USA
              </p>
            </div>

            {/* Why Contact Us */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Why Contact Us?</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Get expert advice on destinations
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Design a custom itinerary
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ask about group discounts
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Request a catalog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
