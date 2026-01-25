"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Will I get to meet the local people?",
    answer: "Along the way, you will encounter shop and restaurant owners, traders, porters, farmers, schoolteachers, and curious children. Some will speak English — others will not. But their desire to interact is often as strong as yours, resulting in creative efforts at communication. Many people bring Polaroid or digital cameras; others bring photos of home, family and friends or a collection of postcards from their home state. These make particularly good points of contact with both adults and children.",
  },
  {
    question: "Who will be leading the trip?",
    answer: "Some of our scheduled adventures, which reach critical mass, will be led by seasoned trip leaders in concert with local guide(s). Mandala Adventures' trip leaders combine a love and knowledge of Asian culture with an understanding of the logistical quirks to ensure a seamless journey. Custom trips are usually led by a member of our esteemed panel of local guides who have received the highest marks. Trip leaders and local guides who lead our trekking departures have been trained in mountain safety and first aid procedures.",
  },
  {
    question: "Can I book a private trip and/or customize an existing itinerary?",
    answer: "Absolutely! In fact, about half our business consists of private and/or custom trips for individuals, couples, families and small groups of friends. If you are seeking to create your own departure — or if our published catalogue trips do not fit your schedule, Mandala Adventures can prepare a customized, private expedition for you. You can book an entire catalogue trip departure just for your group of friends or family or organize a study trip for a special interest group and we'll find experts in your area of interest. The possibilities are endless and we are here to make sure that your idea is realized just the way you have envisioned it.",
  },
  {
    question: "How big are Mandala Adventures groups?",
    answer: "On our classic departures, we limit group size to a maximum of 15 for overland cultural trips and 12 for most trekking trips. Most trips will run with as few as two members. Special/Custom group departures may vary from these parameters.",
  },
  {
    question: "What kind of physical condition do I need to be in?",
    answer: "This varies significantly depending on the trip. Our cultural overland tours require the ability to walk on uneven surfaces and navigate stairs. Trekking trips require more fitness, and we rate each trip based on difficulty. We recommend consulting with your doctor before any adventure travel, and we're happy to discuss specific trip requirements with you.",
  },
  {
    question: "What about altitude sickness?",
    answer: "Many of our destinations are at high altitude. We build acclimatization time into our itineraries and our guides are trained to recognize and respond to altitude-related issues. We recommend arriving well-rested and well-hydrated, and we can provide detailed guidance for your specific trip.",
  },
  {
    question: "What is included in the trip price?",
    answer: "Each trip listing details exactly what's included. Generally, this covers accommodations, most meals, ground transportation, entrance fees, guides, and permits. International airfare is typically not included but we can assist with booking through our air desk.",
  },
  {
    question: "What travel documents do I need?",
    answer: "You'll need a valid passport (usually with at least 6 months validity beyond your travel dates) and visas for most Asian countries. We provide detailed visa information and assistance for each destination. Some remote areas require special permits which we arrange as part of your trip.",
  },
];

function FAQCard({ question, answer, isOpen, onToggle, index }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-orange-200 shadow-lg shadow-orange-100/50'
          : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex justify-between items-center text-left bg-transparent text-gray-900 shadow-none rounded-none"
      >
        <span className="text-lg font-medium pr-4">{question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-orange-700 text-white rotate-180' : 'bg-gray-100 text-gray-500'
        }`}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed max-w-none">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Strong contrast for readability */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/india-destination.jpg"
          alt="Frequently Asked Questions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <Link
              href="/essentials"
              className="inline-block text-orange-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4 hover:text-orange-300 transition-colors"
            >
              Essentials
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction - Properly centered */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-600 leading-relaxed max-w-none">
            You probably have many questions as you plan and prepare for your trip with Mandala Adventures.
            We have assembled a handful of most commonly asked questions. You can ask us additional questions
            by emailing us at{" "}
            <a href="mailto:info@mandalaadventures.com" className="text-orange-700 hover:underline font-medium">
              info@mandalaadventures.com
            </a>{" "}
            or give us a call at{" "}
            <a href="tel:+18018231551" className="text-orange-700 hover:underline font-medium">
              (801) 823-1551
            </a>.
          </p>
        </div>
      </section>

      {/* Modern FAQ Cards */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is happy to answer any questions you may have about our trips.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-800 transition-all shadow-lg shadow-orange-700/20 hover:shadow-xl hover:shadow-orange-700/30"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
