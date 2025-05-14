"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, X } from "lucide-react"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import React from "react";

export default function Locations() {
  const locations = [
    {
      id: "Chinthal",
      name: "STALLION Chinthal",
      description:
        "Where it all began in 2018. Our original STALLION gym featuring no-frills hardcore equipment, championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Pure, raw gym experience for serious lifters.",
      image: "/images/branches/first.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d60885.86121180698!2d78.45144399999997!3d17.490018000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzI0LjEiTiA3OMKwMjcnMDUuMiJF!5e0!3m2!1sen!2sus!4v1746471546448!5m2!1sen!2sus",
      cultAffiliated: false,
    },
    {
      id: "Ashok-Nagar-Bhel",
      name: "STALLION ASHOK NAGAR BHEL",
      description:
        "STALLION gym with CULT affiliation offering premium amenities and specialized programs. As a CULT-affiliated center, members enjoy access to exclusive group fitness classes, yoga studios, and dedicated wellness zones along with traditional STALLION strength training.",
      image: "/images/branches/second.png",
      address: "456 Fitness Blvd, Ashok Nagar, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.083318461583!2d78.3104979!3d17.5035357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf33268a6996b%3A0x35f229e1c6558!2sStallion%20Xtreme%20Fitness%20-%20Available%20on%20cult.fit%20-%20Gym%20in%20BHEL%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472411149!5m2!1sen!2sin",
      cultAffiliated: true,
    },
    {
      id: "GajulRamaram",
      name: "STALLION GAJULRAMARAM",
      description:
        "STALLION strength training meets CULT fitness innovation. This CULT-affiliated STALLION gym features specialized functional training zones, cardio theaters, and recovery facilities alongside our signature strength equipment. Get the best of both worlds!",
      image: "/images/branches/third.png",
      address: "789 Muscle Lane, Gajulramaram, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294898387257!2d78.45181098421887!3d17.50399376889806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fdd08fcc84d%3A0xfdbf7baf82edc2de!2sStallion%20Xtreme%20Fitness%20Gajularamaram%20-%20Available%20at%20cult.fit%20-%20Gyms%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472676625!5m2!1sen!2sin",
      cultAffiliated: true,
    },
    {
      id: "Kondapur",
      name: "STALLION KONDAPUR",
      description:
        "Tech-forward STALLION gym with CULT affiliation catering to IT professionals. Enjoy our STALLION strength equipment plus CULT-exclusive benefits like 24/7 access, smart workout tracking, and specialized programs designed for desk-bound warriors looking to break free.",
      image: "/images/branches/fourth.png",
      address: "101 Tech Park, Kondapur, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.675296160824!2d78.35506039336227!3d17.467483033733526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300f9b21687%3A0xf8d2dbb56514126e!2sStallion%20fitness%20studio!5e0!3m2!1sen!2sin!4v1746472783497!5m2!1sen!2sin",
      cultAffiliated: true,
    },
    {
      id: "Subash-Nagar",
      name: "STALLION SUBASH NAGAR",
      description:
        "Boutique STALLION gym with CULT affiliation offering a more personalized experience. Combines STALLION's strength-focused equipment with CULT's signature personalized training programs, nutrition counseling, and small group classes for a more intimate fitness journey.",
      image: "/images/branches/fifth.png",
      address: "202 Strength Street, Subash Nagar, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294898387257!2d78.45181098421887!3d17.50399376889806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f14844e08d%3A0x26d268026f79dd8a!2sStallion%20Fitness%20(Kompally)%20Elite%20-%20Available%20on%20cult.fit%20-%20Gym%20in%20Kompally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472633687!5m2!1sen!2sin",
      cultAffiliated: true,
    },
    {
      id: "Suchitra",
      name: "STALLION SUCHITRA",
      description:
        "Our newest STALLION facility with CULT affiliation. Experience the raw power of STALLION equipment plus exclusive CULT benefits including a sprawling CrossFit arena, Olympic lifting platforms, and dedicated combat sports zone for the ultimate fitness warriors.",
      image: "/images/branches/sixth.png",
      address: "303 Power Plaza, Suchitra, Hyderabad",
      phone: "+91 74163 52913",
      email: "stallion@extreme.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294853892834!2d78.45181098715821!3d17.50399429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a2fe88dd5b%3A0x5594b7c0d998c25e!2sStallion%20Xtreme%20Fitness%20Suchitra%20-%20Available%20at%20cult.fit%20-%20Gyms%20in%20Quthbullapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472545479!5m2!1sen!2sin" ,
      cultAffiliated: true,
    },
  ]

  // Modal state for the map
  const [showMap, setShowMap] = React.useState(false);
  const [currentMapUrl, setCurrentMapUrl] = React.useState("");
  const [currentLocation, setCurrentLocation] = React.useState("");

  const openMap = (mapUrl: React.SetStateAction<string>, locationName: React.SetStateAction<string>) => {
    setCurrentMapUrl(mapUrl);
    setCurrentLocation(locationName);
    setShowMap(true);
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="font-['AkiraExpanded'] text-2xl sm:text-3xl font-bold uppercase tracking-wider text-center text-black mb-4">
            YOUR STALLION FORTRESS AWAITS
          </h2>
          <p className="text-center text-gray-700 mb-10 sm:mb-16 font-['Degular'] tracking-wider text-base sm:text-xl">
            Locations built for warriors, not weekend gym-goers
          </p>
        </ScrollAnimation>

        <div className="space-y-6 sm:space-y-8">
          {locations.map((location, index) => (
            <ScrollAnimation key={location.id} delay={0.15 * index}>
              <HoverCard className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-auto">
                  {/* Image and overlay container */}
                  <div className="relative h-[400px] sm:h-[400px]">
                    <Image 
                      src={location.image || "/placeholder.svg"} 
                      alt={location.name} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                  </div>

                  {/* Content layout */}
                  <div className="absolute inset-0 p-5 sm:p-8 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-3xl font-bold text-white">{location.name}</h3>
                      
                      {location.cultAffiliated && (
                        <div className="inline-flex px-3 py-1 sm:px-4 sm:py-2 text-sm bg-[#e71b4b] text-white rounded-sm self-start">
                          CULT Affiliated
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                      {location.description}
                    </p>

                    {/* Contact information */}
                    <div className="mt-auto">
                      <div className="flex flex-col space-y-3">
                        <div className="space-y-1 mb-2">
                          <div className="text-sm sm:text-base text-gray-100">
                            <span className="inline-block w-full text-ellipsis overflow-hidden">{location.address}</span>
                          </div>
                          <div className="text-sm sm:text-base text-gray-100">{location.phone}</div>
                          <div className="text-sm sm:text-base text-gray-100">{location.email}</div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                          >
                            <button
                              onClick={() => openMap(location.mapUrl, location.name)}
                              className="w-full sm:w-auto px-4 sm:px-6 py-3 text-sm sm:text-base border border-white/60 text-white hover:bg-white/10 transition flex items-center justify-center sm:justify-start"
                            >
                              <MapPin className="mr-2 h-4 w-4" /> Get Directions
                            </button>
                          </motion.div>
                          
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                          >
                            <Link
                              href={`/contact?location=${location.id}`}
                              className="w-full sm:w-auto px-4 sm:px-6 py-3 text-sm sm:text-base bg-[#e71b4b] text-white flex items-center justify-center sm:justify-start hover:bg-opacity-90 transition"
                            >
                              Join Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="font-bold text-base sm:text-lg truncate pr-2">
                {currentLocation} - Location Map
              </h3>
              <button 
                onClick={() => setShowMap(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
                aria-label="Close map"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-0 sm:p-4">
              <iframe 
                src={currentMapUrl} 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map for ${currentLocation}`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}