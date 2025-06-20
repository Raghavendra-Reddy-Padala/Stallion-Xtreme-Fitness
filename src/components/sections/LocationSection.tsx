"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function LocationsSection() {
  const locations = [
    {
      name: "GajulRamaram",
      description: "Stallion Xtreme Fitness,GajulRamaram Branch",
      image: "/images/branches/ramaramherosection.JPG",
      hoverImage: "/images/branches/ramaramhover.JPG", // Add your hover image path
      link: "/branches/GajulRamaram",
    },
    {
      name: "IDPL",
      description: "Stallion Xtreme Fitness,Chinthal Branch",
      image: "/images/branches/idplherosec.JPG",
      hoverImage: "/images/branches/chinthalhover.JPG", // Add your hover image path
      link: "/branches/Chinthal",
    },
    {
      name: "Kompally",
      description: "Stallion Xtreme Fitness,Subash Nagar Branch",
      image: "/images/branches/kompallyherosec.JPG",
      hoverImage: "/images/branches/subashhover.JPG", // Add your hover image path
      link: "/branches/Subash-Nagar",
    },
    {
      name: "Kondapur",
      description: "Stallion Xtreme Fitness,Kondapur Branch",
      image: "/images/branches/kondapurhero.JPG",
      hoverImage: "/images/branches/kondapurhover.JPG", // Add your hover image path
      link: "/branches/kondapur",
    },
    {
      name: "Suchitra",
      description:"Stallion Xtreme Fitness,Suchitra Branch",
      image: "/images/branches/suchitrahero.JPG",
      hoverImage: "/images/branches/suchitrahover.JPG", // Add your hover image path
      link: "/branches/Suchitra",
    },
    {
      name: "Ashok Nagar Bhel", 
      description: "Stallion Xtreme Fitness,Ashok Nagar Bhel Branch",
      image: 
      "/images/branches/bhelhover.jpg",
      hoverImage: "/images/branches/bhelcover.jpg", // Add your hover image path
      link: "/branches/Ashok-Nagar-Bhel",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-black mb-3 font-['AkiraExpanded']">
            Find your stallion home
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-16 max-w-2xl text-base md:text-xl mx-auto">
            Six top-tier facilities across the city – same uncompromising standards.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <ScrollAnimation key={index} delay={0.15 * (index % 3)}>
              <HoverCard className="relative overflow-hidden group aspect-[418/532]">
                {/* Default Image */}
                <Image 
                  src={location.image || "/placeholder.svg"} 
                  alt={location.name} 
                  fill 
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0" 
                />
                
                {/* Hover Image */}
                <Image 
                  src={location.hoverImage || location.image || "/placeholder.svg"} 
                  alt={`${location.name} hover`} 
                  fill 
                  className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider font-[Degular] text-white mb-2">{location.name}</h3>
                  <p className="text-gray-200 text-base md:text-lg mb-4">{location.description}</p>
                  <Link
                    href={location.link}
                    className="inline-flex items-center bg-[#e71b4b] text-white px-3 md:px-4 py-2 rounded hover:bg-opacity-90 transition text-sm md:text-base"
                  >
                    Know More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}