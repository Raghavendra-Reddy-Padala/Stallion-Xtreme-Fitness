import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white pt-12 md:pt-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Logo and Social Media - Left */}
        <div className="text-center md:text-left">
          <div className="mb-6 flex justify-center md:justify-start">
            <Image src="/images/hero/stallion.png" alt="Stallion Fitness" width={150} height={40} />
          </div>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            Six premier facilities across town, all with one mission: forge strength that extends beyond the gym.
          </p>

          <div className="flex space-x-4 justify-center md:justify-start">
            <Link href="https://www.facebook.com/p/Stallion-Xtreme-Fitness-100084922102459/" className="text-white hover:text-[#e71b4b] transition transform hover:scale-110">
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://www.instagram.com/stallion_xtremefitness?igsh=ZTNkZGZyN2FlZWlt" className="text-white hover:text-[#e71b4b] transition transform hover:scale-110">
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://youtube.com/@stallionxtremefitness?si=qZgnUTp4IHMprTuo" className="text-white hover:text-[#e71b4b] transition transform hover:scale-110">
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>

        {/* TECHMOCHa & NAVYUG Credits - Center */}
        <div className="text-center">
          <div className="space-y-10">
             <div>
              <span className="text-gray-300 text-sm block mb-2">Backed up by</span>
              <Link 
                href="https://techmocha.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-[#e71b4b] to-[#ff6b6b] bg-clip-text hover:from-white hover:to-gray-200 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                NAVYUG
              </Link>
            </div>
            <div>
              <span className="text-gray-300 text-sm block mb-2">Developed by</span>
              <Link 
                href="https://techmocha.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-[#e71b4b] to-[#ff6b6b] bg-clip-text hover:from-white hover:to-gray-200 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                TECHMOCHa
              </Link>
            </div>
           
          </div>
        </div>

        {/* Contact - Right */}
        <div className="text-center md:text-right">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Contact</h3>
          <address className="not-italic text-sm md:text-base">
            <p className="mb-2 text-gray-300">3rd Floor, above Sri Vidya Junior College, Chinthal,Hyderabad</p>
            <p className="mb-2 text-gray-300">Telangana 500037</p>
            <p className="mb-2">
              <Link href="tel:+918885110136" className="text-gray-300 hover:text-[#e71b4b] transition">
                +91 8885110136
              </Link>
            </p>
            <p>
              <Link href="mailto:support@stallionxtremefitness.com" className="text-gray-300 hover:text-[#e71b4b] transition">
                support@stallionxtremefitness.com
              </Link>
            </p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">&copy; 2023 Stallion Xtreme Fitness. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 md:space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#e71b4b] transition text-xs md:text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#e71b4b] transition text-xs md:text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}