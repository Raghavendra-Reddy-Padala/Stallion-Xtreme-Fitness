"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, Trophy, Star, Gift } from "lucide-react";
import { useEffect, useState } from "react";

interface EventDate {
  month: string;
  day: string;
  year: string;
  dayName: string;
}

interface EventLocation {
  venue: string;
  address: string;
  mapLink: string;
}

interface EventCategory {
  name: string;
  description: string;
  ageGroups: string[];
}

interface EventPrize {
  position: string;
  prize: string;
}

interface ScheduleItem {
  time: string;
  activity: string;
}

interface EventData {
  title: string;
  subtitle: string;
  date: EventDate;
  time: string;
  location: EventLocation;
  registrationLink: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  categories: EventCategory[];
  prizes: EventPrize[];
  requirements: string[];
  schedule: ScheduleItem[];
}

interface EventDetailsPageProps {
  eventId: string;
}

export default function EventDetailsPage({ eventId }: EventDetailsPageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const eventData: Record<string, EventData> = {
    "yoga-day": {
      title: "STALLION YOGA DAY",
      subtitle: "Rise and Revive with Decathlon Suchitra - Go with the Flow",
      date: { month: "JUN", day: "21", year: "2025", dayName: "SATURDAY" },
      time: "6:30 AM - 9:00 AM",
      location: {
        venue: "Decathlon Suchitra",
        address: "Parking Premises, Suchitra, Hyderabad, Telangana",
        mapLink: "https://maps.app.goo.gl/Va6wGkCZRnsz4CMy9",
      },
      registrationLink: "https://play.decathlon.in/event-details/Rise-and-Revive-with-Decathlon--Suchitra--gowiththeflow/aa7646c0-44fb-11f0-a9dd-2bb4213dbc7a?utm_source=sharebutton&utm_medium=decathlon_play_partner_app&utm_campaign=externalshare",
      heroImage: "/images/events/yogabanner.jpg",
      gallery: [
        "/images/events/yoga1.jpg",
        "/images/events/yoga2.jpg",
        "/images/events/yoga3.jpg",
        "/images/events/yoga4.jpg",
      ],
      description: `Join us for the Stallion Yoga Day celebration on June 21st! This free community event brings together yoga enthusiasts of all levels to practice, learn, and celebrate the ancient art of yoga. Experience the transformative power of yoga with guided sessions, Sudarshan Kriya, Surya Namaskar, and an energizing Zumba session.`,
      highlights: [
        "Free participation with amazing rewards",
        "₹100 Decathlon voucher for all participants",
        "Exclusive gift hamper for every attendee",
        "Sudarshan Kriya & warm-up sessions",
        "Traditional Surya Namaskar practice",
        "High-energy Zumba session with DJ",
        "Guest speech and National Anthem",
        "Bring your own yoga mat (mandatory)",
        "Dress code: White T-shirt required",
      ],
      categories: [
        {
          name: "Sudarshan Kriya Session",
          description:
            "Breathing technique and warm-up to prepare for the yoga practice",
          ageGroups: ["All ages"],
        },
        {
          name: "Surya Namaskar",
          description:
            "Traditional sun salutation sequence for strength and flexibility",
          ageGroups: ["12+"],
        },
        {
          name: "Zumba Fitness",
          description:
            "High-energy dance fitness session with DJ cool down",
          ageGroups: ["All ages"],
        },
      ],
      prizes: [
        {
          position: "Voucher",
          prize: "₹100 worth Decathlon shopping Voucher ",
        },
        {
          position: "Hamper",
          prize: "A Sending Gift Hamper",
        },
      ],
      requirements: [
        "White T-shirt (mandatory dress code)",
        "Bring your own yoga mat (mandatory)",
        "Water bottle for hydration",
        "Register online to guarantee your spot",
        "Arrive 15 minutes before start time",
      ],
      schedule: [
        { time: "6:30 AM", activity: "Event begins - Opening Activity (Balloon Hoisting)" },
        { time: "7:00 AM", activity: "Participants Gather - Sudarshan Kriya & Warm-up" },
        { time: "7:40 AM", activity: "Guest Speech" },
        { time: "8:10 AM", activity: "Surya Namaskar Practice" },
        { time: "8:40 AM", activity: "Zumba Session (DJ Cool Down)" },
        { time: "9:00 AM", activity: "National Anthem & Closing" },
      ],
    },
  };

  const event = eventData[eventId] || eventData["yoga-day"];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Mobile Registration Button */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
        >
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#e71b4b] shadow-xl text-white font-bold uppercase tracking-wider"
            style={{
              minWidth: "80vw",
              boxShadow: "0 10px 25px -5px rgba(231, 27, 75, 0.4)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" y1="8" x2="19" y2="14"></line>
              <line x1="22" y1="11" x2="16" y2="11"></line>
            </svg>
            <span className="font-['AkiraExpanded']">REGISTER NOW</span>
          </a>
        </motion.div>
      )}
      
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={event.heroImage}
          alt={event.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-3 left-3 z-10"
        >
          <Link
            href="/events"
            className="flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:bg-black/70 transition"
          >
            <ArrowLeft size={20} />
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-white mb-4 font-['AkiraExpanded']">
                {event.title}
              </h1>
            

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">
                    {event.date.dayName}, {event.date.month} {event.date.day}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">
                    {event.location.venue}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-500/90 backdrop-blur-sm rounded-lg border border-white/20 mb-8 
                     p-4 md:p-3 lg:py-2 lg:px-6"
        >
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-wrap items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-white" />
              <span className="font-bold font-['Degular']">FREE Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift size={20} className="text-white" />
              <span className="font-bold font-['Degular']">Decathlon Shopping Voucher + Gift Hamper</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold font-['Degular']">
                Bring Yoga Mat
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold font-['Degular']">
                Dress: White T-shirt
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between text-white">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-white" />
                <span className="font-bold font-['Degular'] text-sm">FREE Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift size={18} className="text-white" />
                <span className="font-bold font-['Degular'] text-sm">Decathlon Shopping Voucher + Gift Hamper</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold font-['Degular']">
                Bring Yoga Mat
              </span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold font-['Degular']">
                White T-shirt Required
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
                About The Event
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-['Degular'] tracking-wider">
                {event.description}
              </p>
            </motion.section>

            {/* Event Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
                Event Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star
                      size={20}
                      className="text-[#e71b4b] mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 font-['Degular'] tracking-wider">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Event Activities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
                Event Activities
              </h2>
              <div className="space-y-6">
                {event.categories.map(
                  (category: EventCategory, index: number) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <h3 className="text-xl font-bold text-black mb-2 font-['AkiraExpanded'] uppercase">
                        {category.name}
                      </h3>
                      <p className="text-gray-700 mb-4 font-['Degular'] tracking-wider">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600 font-['Degular']">
                          Suitable for:
                        </span>
                        {category.ageGroups.map(
                          (age: string, ageIndex: number) => (
                            <span
                              key={ageIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-['Degular']"
                            >
                              {age}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.section>

            {/* Event Schedule */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
                Event Schedule
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item: ScheduleItem, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="bg-[#e71b4b] text-white px-3 py-2 rounded-lg font-bold font-['Degular']">
                      {item.time}
                    </div>
                    <span className="text-gray-700 font-['Degular'] tracking-wider">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#e71b4b] to-[#c41640] text-white p-6 rounded-lg  top-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 font-['AkiraExpanded']">
                Register Now
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-['Degular']">Registration:</span>
                  <span className="font-bold font-['Degular'] text-yellow-300">FREE</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-['Degular']">Decathlon Voucher:</span>
                  <span className="font-bold font-['Degular'] text-yellow-300">₹100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-['Degular']">Gift Hamper:</span>
                  <span className="font-bold font-['Degular'] text-yellow-300">Included</span>
                </div>
              </div>

              <motion.a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#e71b4b] py-4 text-center font-bold uppercase tracking-wider hover:bg-opacity-90 transition font-['AkiraExpanded'] rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve Your Spot
              </motion.a>

              <p className="text-sm text-white/80 mt-4 text-center font-['Degular']">
                Don't forget: White T-shirt & Yoga mat required!
              </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded']">
                Event Location
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#e71b4b] mt-1" />
                  <div>
                    <p className="font-bold text-black font-['Degular']">
                      {event.location.venue}
                    </p>
                    <p className="text-gray-600 text-sm font-['Degular'] tracking-wider">
                      {event.location.address}
                    </p>
                  </div>
                </div>
                <a
                  href={event.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#e71b4b] text-white py-2 text-center font-medium hover:bg-opacity-90 transition font-['Degular'] rounded-lg mt-4"
                >
                  View Event Details
                </a>
              </div>
            </motion.div>

            {/* Rewards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded'] flex items-center gap-2">
                <Gift className="text-yellow-600" />
                Event Rewards
              </h3>
              <div className="space-y-3">
                {event.prizes.map((prize: EventPrize, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-bold text-black font-['Degular']">
                      {prize.position}
                    </span>
                    <span className="text-sm text-gray-700 font-['Degular']">
                      {prize.prize}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded']">
                Essential Requirements
              </h3>
              <ul className="space-y-2">
                {event.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#e71b4b] rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm font-['Degular'] tracking-wider">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
 <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 space-y-8"
        >
          {/* Presented By */}
          <div className="text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
              Presented By
            </h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <Image
                  src="/images/hero/stallion.png"
                  alt="Stallion Fitness"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* In Partnership With */}
          <div className="text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
              In Partnership With
            </h3>
            <div className="flex flex-row justify-center items-stretch gap-4 md:gap-8">
              {/* Decathlon Partner */}
              <div className="bg-white p-6 rounded-lg shadow-lg border w-64 h-40 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/sponser/dc.webp"
                    alt="Decathlon Suchitra"
                    width={150}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
             
              </div>

              {/* Art of Living Partner */}
              <div className="bg-white p-6 rounded-lg shadow-lg border w-64 h-40 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/sponser/aol.webp"
                    alt="Art of Living"
                    width={120}
                    height={50}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-lg"
            > 
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}