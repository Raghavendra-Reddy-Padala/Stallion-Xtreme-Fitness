"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Calendar, Clock, Trophy, Star } from "lucide-react"
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
   const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const eventData: Record<string, EventData> = {
    "yoga-day": {
      title: "STALLION YOGA DAY",
      subtitle: "Celebrate Harmony of Body and Mind",
      date: { month: "JUN", day: "21", year: "2024", dayName: "FRIDAY" },
      time: "6:00 AM - 9:00 AM",
      location: {
        venue: "Stallion Classic Chinthal",
        address: "Chinthal Nagar, Hyderabad, Telangana 500055",
        mapLink: "https://maps.google.com/?q=City+Central+Park+Hyderabad"
      },
      registrationLink: "https://forms.gle/UnXU9DwzARB5bbkw7",
      heroImage: "/images/events/yogabanner.jpg",
      gallery: [
        "/images/events/yoga1.jpg",
        "/images/events/yoga2.jpg", 
        "/images/events/yoga3.jpg",
        "/images/events/yoga4.jpg"
      ],
      description: `Join us for the 10th International Yoga Day celebration! This free community event brings together yoga enthusiasts of all levels to practice, learn, and celebrate the ancient art of yoga. Experience the transformative power of yoga with guided sessions from renowned instructors, meditation practices, and wellness workshops.`,
      highlights: [
        "Free yoga session for all participants",
        "Guided by certified yoga instructors",
        "Special sessions for beginners",
        "Meditation and breathing techniques",
        "Yoga mats provided for those who need",
        "Healthy refreshments after the session",
        "Group photo and certificate of participation"
      ],
      categories: [
        {
          name: "Beginner Yoga",
          description: "Gentle introduction to basic yoga postures and breathing",
          ageGroups: ["All ages"]
        },
        {
          name: "Intermediate Yoga", 
          description: "Flowing sequences and deeper postures for regular practitioners",
          ageGroups: ["16+"]
        },
        {
          name: "Senior Yoga",
          description: "Specialized session focusing on mobility and gentle movements",
          ageGroups: ["50+"]
        }
      ],
      prizes: [
        { position: "Most Enthusiastic Participant", prize: "Yoga Mat + Wellness Package" },
        { position: "Best Family Participation", prize: "Family Yoga Session Voucher" }
      ],
      requirements: [
        "Comfortable clothing suitable for exercise",
        "Bring your own yoga mat if possible",
        "Water bottle",
        "Register online to guarantee your spot",
        "Arrive 15 minutes before start time"
      ],
      schedule: [
        { time: "5:45 AM", activity: "Registration & Welcome" },
        { time: "6:00 AM", activity: "Opening Ceremony" },
        { time: "6:15 AM", activity: "Mass Yoga Session (Common Protocol)" },
        { time: "7:00 AM", activity: "Category-specific Sessions" },
        { time: "8:00 AM", activity: "Meditation & Relaxation" },
        { time: "8:30 AM", activity: "Healthy Breakfast" },
        { time: "9:00 AM", activity: "Closing & Group Photo" }
      ]
    }
  }

  const event = eventData[eventId] || eventData["yoga-day"]

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
        minWidth: '80vw',
        boxShadow: '0 10px 25px -5px rgba(231, 27, 75, 0.4)'
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
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={event.heroImage}
          alt={event.title}
          fill
          className="object-contain object-center"
          sizes="100vw"
          quality={95}
          priority
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-6 left-6 z-10"
        >
          <Link
            href="/events"
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/70 transition"
          >
            <ArrowLeft size={20} />
            <span className="font-['Degular']">Back to Events</span>
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
              <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-white mb-4 font-['AkiraExpanded']">
                {event.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6 font-['Degular'] tracking-wider max-w-2xl">
                {event.subtitle}
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">{event.date.dayName}, {event.date.month} {event.date.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-[#e71b4b]" />
                  <span className="font-['Degular']">{event.location.venue}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                    <Star size={20} className="text-[#e71b4b] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-['Degular'] tracking-wider">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Yoga Categories */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-black mb-6 font-['AkiraExpanded']">
                Yoga Sessions
              </h2>
              <div className="space-y-6">
                {event.categories.map((category: EventCategory, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-black mb-2 font-['AkiraExpanded'] uppercase">
                      {category.name}
                    </h3>
                    <p className="text-gray-700 mb-4 font-['Degular'] tracking-wider">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-600 font-['Degular']">Suitable for:</span>
                      {category.ageGroups.map((age: string, ageIndex: number) => (
                        <span key={ageIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-['Degular']">
                          {age}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-[#e71b4b] text-white px-3 py-2 rounded-lg font-bold font-['Degular']">
                      {item.time}
                    </div>
                    <span className="text-gray-700 font-['Degular'] tracking-wider">{item.activity}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

         {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Card - Changed back to red */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#e71b4b] text-white p-6 rounded-lg sticky top-8"
            >
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 font-['AkiraExpanded']">
                Register Now
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-['Degular']">Participation:</span>
                  <span className="font-bold font-['Degular']">
                    Free
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-['Degular']">Deadline:</span>
                  <span className="font-bold font-['Degular']">
                    June 20th
                  </span>
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
                Limited mats available, register early!
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
                    <p className="font-bold text-black font-['Degular']">{event.location.venue}</p>
                    <p className="text-gray-600 text-sm font-['Degular'] tracking-wider">{event.location.address}</p>
                  </div>
                </div>
                <a
                  href={event.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#e71b4b] text-white py-2 text-center font-medium hover:bg-opacity-90 transition font-['Degular'] rounded-lg mt-4"
                >
                  View on Google Maps
                </a>
              </div>
            </motion.div>

            {/* Prizes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded'] flex items-center gap-2">
                <Trophy className="text-yellow-600" />
                Special Recognitions
              </h3>
              <div className="space-y-3">
                {event.prizes.map((prize: EventPrize, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-bold text-black font-['Degular']">{prize.position}</span>
                    <span className="text-sm text-gray-700 font-['Degular']">{prize.prize}</span>
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
                What to Bring
              </h3>
              <ul className="space-y-2">
                {event.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#e71b4b] rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm font-['Degular'] tracking-wider">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}