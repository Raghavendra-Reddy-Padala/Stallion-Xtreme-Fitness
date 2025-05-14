import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 bg-black relative px-4 md:px-24 w-full ">
      <div className=" mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative min-h-[400px] md:min-h-[600px] overflow-hidden h-full">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact/reversed.png"
                alt="Athlete doing handstand on kettlebells"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <div
              className="absolute inset-0 bg-black/20 z-10"
              style={{ backdropFilter: "blur(2px)" }}
            ></div>
            <div className="relative z-20 p-4 md:p-6 h-full flex flex-col justify-center items-start font-['AkiraExpanded'] ">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase font-['AkiraExpanded'] text-white leading-tight mb-4 md:mb-6">
                GOT QUESTIONS
                <br />
                WE&apos;VE GOT
                <br />
                ANSWERS.
              </h2>
              <p className="text-gray-300  md:text-2xl mb-4 md:mb-6 text-xl tracking-wider font-[Degular] ">
                Fill out the form, and our team will hit you back within 24
                hours.
              </p>
            </div>
          </div>

          <div
            className="bg-white p-6 md:p-8 rounded-md"
            style={{ minHeight: "650px" }}
          >
            <form className="space-y-12 h-full flex flex-col justify-between">
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
                      defaultValue=""
                      className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 appearance-none bg-transparent text-black"
                    >
                      <option value="" disabled></option>
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
        </div>
      </div>
    </section>
  );
}
