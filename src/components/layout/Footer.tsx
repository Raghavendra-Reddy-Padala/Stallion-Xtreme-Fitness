import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white pt-12 md:pt-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Logo and Social Media */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <Image src="/images/hero/logo.png" alt="Stallion Fitness" width={150} height={40} />
          </div>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            Six premier facilities across town, all with one mission: forge strength that extends beyond the gym.
          </p>

          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-[#e71b4b] transition">
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition">
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition">
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition">
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            <li>
              <Link href="/" className="text-gray-300 hover:text-[#e71b4b] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-300 hover:text-[#e71b4b] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                Classes
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-[#e71b4b] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Membership */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Membership</h3>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-[#e71b4b] transition">
                Join Now
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                Elite Training
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                Personal Coaching
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#e71b4b] transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Contact</h3>
          <address className="not-italic text-sm md:text-base">
            <p className="mb-2 text-gray-300">123 Iron Street, Fitness District</p>
            <p className="mb-2 text-gray-300">City, State 12345</p>
            <p className="mb-2">
              <Link href="tel:+123456789" className="text-gray-300 hover:text-[#e71b4b] transition">
                +1 (234) 567-890
              </Link>
            </p>
            <p>
              <Link href="mailto:info@stallion.com" className="text-gray-300 hover:text-[#e71b4b] transition">
                info@stallion.com
              </Link>
            </p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm md:text-base">&copy; 2023 Stallion Xtreme Fitness. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 md:space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#e71b4b] transition text-xs md:text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#e71b4b] transition text-xs md:text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#e71b4b] transition text-xs md:text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
