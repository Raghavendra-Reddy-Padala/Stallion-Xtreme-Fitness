"use client";
import Image from "next/image";

export default function WhyJoinUs() {
  return (
    <section className="py-16 px-4  mx-auto bg-[#f1f1f1] text-black px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-2 font-['AkiraExpanded']">
          PROVE YOURSELF
        </h2>
        <p className="text-lg font-[Degular]">
          Trophies don’t go to those who train hardest – they go to those who
          compete.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {/* Quality Column */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="/svg/medals.svg"
              alt="Premium Quality"
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4 font-['AkiraExpanded']">
            Stronger Community
          </h3>
          <p className="text-gray-700 font-[Degular] tracking-wider ">
            The athlete spotting you today might be your teammate tomorrow.
          </p>
        </div>

        {/* Exclusive Access Column */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="/svg/strong.svg"
              alt="Exclusive Access"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4 font-['AkiraExpanded'] mt-4 ">
            EXCLUSIVE ACCESS
          </h3>
          <p className="text-gray-700 font-[Degular] tracking-wider ">
            Our partnerships give you access to products and services not
            available elsewhere.
          </p>
        </div>

        {/* Cutting Edge Column */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="/svg/brain.svg"
              alt="Cutting Edge"
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4 font-['AkiraExpanded'] mt-6">
            Learn From Pros
          </h3>
          <p className="text-gray-700 font-[Degular] tracking-wider">
            Our workshops are 80% drills, 20% lecture. You’ll leave with
            calluses, not just notes.
          </p>
        </div>
      </div>
    </section>
  );
}
