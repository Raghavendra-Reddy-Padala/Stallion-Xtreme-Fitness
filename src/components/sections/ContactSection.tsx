import Image from "next/image";
import ContactForm from "./ContactForm";

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

          <ContactForm />
        </div>
      </div>
    </section>
  );
}