'use client';

import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918885110136?text=${encodedMessage}`, '_blank');
  };

  return (
    <div
      className="bg-white p-6 md:p-8 rounded-md"
      style={{ minHeight: "650px" }}
    >
      <form onSubmit={handleSubmit} className="space-y-12 h-full flex flex-col justify-between">
        <div className="flex-grow">
          <div className="mb-10">
            <label
              htmlFor="name"
              className="block text-base text-black uppercase mb-2"
            >
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-black uppercase mb-2"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-base font-medium text-black uppercase mb-2"
              >
                PHONE NO.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
              />
            </div>
          </div>

          <div className="mb-10">
            <label
              htmlFor="subject"
              className="block text-base font-medium text-black uppercase mb-2"
            >
              SUBJECT
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 appearance-none bg-transparent text-black"
              >
                <option value="" disabled>Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="training">Personal Training</option>
                <option value="facilities">Facilities</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <label
              htmlFor="message"
              className="block text-base font-medium text-black uppercase mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#e71b4b] text-white px-8 py-3 rounded-none flex items-center hover:bg-opacity-90 transition"
          >
            SUBMIT <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}