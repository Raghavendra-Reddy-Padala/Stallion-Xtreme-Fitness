"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "I'm a beginner. Will I get crushed here?",
      answer:
        "Everyone starts somewhere. Our coaches scale workouts – but expect to be pushed harder than you'd push yourself.",
    },
    {
      question: "I'm intimidated by serious lifters - will I fit in here?",
      answer:
        "Our community includes everyone from first-timers to competitive powerlifters. What unites us is attitude, not experience. We have zero tolerance for ego or judgment – just a shared commitment to growth.",
    },
    {
      question: "Can I still get results if I can only train 2x/week?",
      answer:
        "Absolutely. We'll design your program to maximize those two sessions, focusing on compound movements and strategic intensity. Many of our members with demanding careers see significant progress on 2x/week plans.",
    },
    {
      question: "Is the nutrition guidance just another cookie-cutter meal plan?",
      answer:
        "No. We assess your metabolism, preferences, and lifestyle before creating your nutrition strategy. Our approach focuses on sustainable habits and education rather than rigid meal plans that fail long-term.",
    },
    {
      question: "What makes your trainers worth higher rates?",
      answer:
        "Our trainers complete 500+ hours of practical training beyond certification. They're required to maintain their own training practice and continue education quarterly. Most importantly, they're held accountable to your results.",
    },
    {
      question: "Can I come during lunch break from my IT job?",
      answer:
        "Yes! Our 45-minute Express Sessions are designed for busy professionals. We're located near major tech offices, and our changing rooms have everything you need to get back to work refreshed.",
    },
    {
      question: "My trainer at previous gym just chatted...",
      answer:
        "Our trainers are evaluated on your progress, not how much you like them. Every session follows a structured plan with clear objectives. We're friendly, but focused – your time and investment deserve results, not small talk.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-[#f1f1f1]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-4xl font-bold uppercase tracking-wider text-center text-black mb-2 font-['AkiraExpanded']">FAQ&apos;S</h2>
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-black mb-4 font-['AkiraExpanded']">
          ANY QUESTION? WE GOT YOU.
        </h3>
        <p className="text-center text-gray-600 mb-12 font-[Degular] tracking-wider text-lg">
          No fluff. No jargon. Just straight facts about our gym memberships, and training philosophy. If you&apos;re serious
          about results, start here.
        </p>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-[#e71b4b]/30">
              <button
                className="flex items-start justify-between w-full py-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900 font-[Degular] tracking-wider">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-[#e71b4b]" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#e71b4b]" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mb-6" : "max-h-0"
                }`}
              >
                <div className="pl-6 border-l-2 border-[#e71b4b]">
                  <p className="text-gray-700 font-[Degular] tracking-wider text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e71b4b]/30"></div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded'] ">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-gray-600 font-[Degular] tracking-wider text-lg">
            IF you cannot find your answer to your question in FAQ&apos;s, you can always
            <br />
            Contact us, we will answer to you shortly!
          </p>
        </div>
      </div>
    </section>
  )
}
