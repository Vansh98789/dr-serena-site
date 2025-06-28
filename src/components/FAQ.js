"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#1e293b] py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-[#334155] rounded-xl shadow-md overflow-hidden transition-all">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-[#475569] transition"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                  {isOpen ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-200 text-sm border-t border-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
