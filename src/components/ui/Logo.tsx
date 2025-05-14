import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="h-10 w-32 relative">
        <Image 
        src="/images/hero/logo.png"
        alt="logo"
        fill
        className="object-cover"
        priority
         />
      </div>
    </Link>
  )
}
