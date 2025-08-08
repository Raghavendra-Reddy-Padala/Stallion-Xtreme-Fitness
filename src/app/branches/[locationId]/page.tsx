"use client";

import {
  Key,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FAQ";
import { useParams } from "next/navigation";

interface YoutubeVideo {
  id: string;
  title: string;
  url: string;
}

interface Trainer {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

interface Location {
  id: string;
  name: string;
  branch: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  cultAffiliated: boolean;
  youtubeVideos: YoutubeVideo[];
  trainers: Trainer[];
  facilities: string[];
  timings: {
    weekdays: string;
    weekends: string;
  };
}

interface LocationData {
  [key: string]: Location;
}

const extractVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const locationData: LocationData = {
    chinthal: {
    id: "Chinthal",
    name: "Stallion Xtreme Fitness",
    branch: "Chinthal Branch",
    description:
      "Where it all began in 2018. Our original STALLION gym featuring no-frills hardcore equipment, championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Pure, raw gym experience for serious lifters.",
    image: "/images/branches/idplbranc.JPG",
    address: "Chinthal, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d60885.86121180698!2d78.45144399999997!3d17.490018000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzI0LjEiTiA3OMKwMjcnMDUuMiJF!5e0!3m2!1sen!2sus!4v1746471546448!5m2!1sen!2sus",
    cultAffiliated: false,
    youtubeVideos: [
      {
        id: "chinthal-1",
        title: "Chinthal Branch Tour - Where Champions Are Made",
        url: "https://youtu.be/UPfGgwF8ySk?si=wFQP9nH5lQ21Xqyi",
      },
      {
        id: "chinthal-2",
        title: "Stallion Xtreme Fitness",
        url: "https://youtu.be/55Hdc81F-9s?si=IZns88GKXgUrw5s2",
      },
      {
        id: "chinthal-3",
        title: "Stallion Classic 2024 Highlights",
        url: "https://youtu.be/B5qSKp4cBik?si=eWhQitPynfUyGIhu",
      },
    ],
    trainers: [
      {
        name: " ",
        specialization: "Powerlifting & Strength Training",
        experience: "8 years",
        image: "/images/trainers/chintal1.JPG",
      },
      {
        name: " ",
        specialization: "Functional Training & CrossFit",
        experience: "5 years",
        image: "/images/trainers/chintal2.JPG",
      },
      {
        name: " ",
        specialization: "Bodybuilding & Nutrition",
        experience: "6 years",
        image: "/images/trainers/chintal3.JPG",
      },
    ],
    facilities: [
      "Championship Powerlifting Platforms",
      "Atlas Stones & Strongman Equipment",
      "Olympic Weightlifting Area",
      "Cardio Zone with Premium Equipment",
      "Functional Training Space",
      "Wall of Shame (Motivation Wall)",
    ],
    timings: {
       weekdays: "5:00 AM - 1:00 PM || 3:30 PM - 10:00 PM",
  weekends: "5:00 AM - 11:00 AM",
    },
  },
  "ashok-nagar-bhel": {
    id: "Ashok-Nagar-Bhel",
    name: "Stallion Xtreme Fitness",
    branch: "Ashok Nagar BHEL Branch",
    description:
      "STALLION gym with CULT Partnership offering premium amenities and specialized programs. As a CULT-affiliated center, members enjoy access to exclusive group fitness classes, yoga studios, and dedicated wellness zones along with traditional STALLION strength training.",
    image: "/images/branches/bhelnromal.jpg",
    address: "Ashok Nagar, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.083318461583!2d78.3104979!3d17.5035357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf33268a6996b%3A0x35f229e1c6558!2sStallion%20Xtreme%20Fitness%20-%20Available%20on%20cult.fit%20-%20Gym%20in%20BHEL%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472411149!5m2!1sen!2sin",
    cultAffiliated: true,
    youtubeVideos: [
      {
        id: "ashok-1",
        title: "CULT Classes at Ashok Nagar Branch",
        url: "https://youtu.be/55Hdc81F-9s?si=uF65IzpLYB9wNZH_",
      },
      {
        id: "ashok-2",
        title: "Stallion Xtreme Fitness",
        url: "https://youtu.be/-jPO-V0e5Cs?si=nEr6wzeaQftaU6jt",
      },
      {
        id: "ashok-3",
        title: "Stallion classic 2024 Highlights",
        url: "https://youtu.be/1qMg2Pbdcjg?si=eZWOrAvoNN2mFT3p",
      },
    ],
    trainers: [
      {
        name: " ",
        specialization: "CULT Fitness & Yoga",
        experience: "7 years",
        image: "/images/trainers/bhel1.JPG",
      },
      {
        name: " ",
        specialization: "Strength Training & HIIT",
        experience: "4 years",
        image: "/images/trainers/behl2.JPG",
      },
      {
        name: " ",
        specialization: "Strength Training & HIIT",
        experience: "4 years",
        image: "/images/trainers/bhel3.JPG",
      },
    ],
    facilities: [
      "CULT Group Fitness Studio",
      "Dedicated Yoga Studio",
      "Premium Strength Training Equipment",
      "Cardio Theater",
      "Wellness Zone",
      "Recovery Room",
    ],
    timings: {
      weekdays: "5:30 AM - 10:00 PM",
weekends: "6:00 AM - 11:00 AM",
    },
  },
  gajulramaram: {
    id: "GajulRamaram",
    name: "Stallion Xtreme Fitness",
    branch: "Gajulramaram Branch",
    description:
      "STALLION strength training meets CULT fitness innovation. This CULT-affiliated STALLION gym features specialized functional training zones, cardio theaters, and recovery facilities alongside our signature strength equipment. Get the best of both worlds!",
    image: "/images/branches/ramarambranch.JPG",
    address: "Gajulramaram, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294898387257!2d78.45181098421887!3d17.50399376889806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fdd08fcc84d%3A0xfdbf7baf82edc2de!2sStallion%20Xtreme%20Fitness%20Gajularamaram%20-%20Available%20at%20cult.fit%20-%20Gyms%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472676625!5m2!1sen!2sin",
    cultAffiliated: true,
    youtubeVideos: [
      {
        id: "gajul-1",
        title: "Stallion Xtreme Fitness website launch",
        url: "https://youtu.be/55Hdc81F-9s?si=CJxOhnxA3iyXnwsM",
      },
      {
        id: "gajul-2",
        title: "Stallion Xtreme Fitness Event",
        url: "https://youtu.be/-jPO-V0e5Cs?si=ObvLAgeD0NNBC26g",
      },
      {
        id: "gajul-3",
        title: "Stallion Classic 2024 Highlights",
        url: "https://youtu.be/ybo_ypuq1p0?si=9UaLeizpAhZNSQec",
      },
    ],
    trainers: [
     
      {
        name: " ",
        specialization: "Cardio Training & Weight Loss",
        experience: "4 years",
        image: "/images/trainers/g1.JPG",
      },
      {
        name: " ",
        specialization: "Cardio Training & Weight Loss",
        experience: "4 years",
        image: "/images/trainers/g2.JPG",
      },
      {
        name: " ",
        specialization: "Cardio Training & Weight Loss",
        experience: "4 years",
        image: "/images/trainers/g3.JPG",
      },
       {
        name: " ",
        specialization: "Functional Training & Rehabilitation",
        experience: "9 years",
        image: "/images/trainers/g4.JPG",
      },
    ],
    facilities: [
      "Functional Training Zone",
      "Cardio Theater with Entertainment",
      "Recovery & Rehabilitation Area",
      "CULT Group Classes Studio",
      "Strength Training Equipment",
      "Nutrition Consultation Room",
    ],
    timings: {
      weekdays: "5:30 AM - 10:00 PM",
      weekends: "6:00 AM - 11:00 AM",
    },
  },
  kondapur: {
    id: "Kondapur",
    name: "Stallion Xtreme Fitness",
    branch: "Kondapur Branch",
    description:
      "Tech-forward STALLION gym with CULT affiliation catering to IT professionals. Enjoy our STALLION strength equipment plus CULT-exclusive benefits like 24/7 access, smart workout tracking, and specialized programs designed for desk-bound warriors looking to break free.",
    image: "/images/branches/kondapur.JPG",
    address: "Kondapur, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.675296160824!2d78.35506039336227!3d17.467483033733526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300f9b21687%3A0xf8d2dbb56514126e!2sStallion%20fitness%20studio!5e0!3m2!1sen!2sin!4v1746472783497!5m2!1sen!2sin",
    cultAffiliated: true,
    youtubeVideos: [
      {
        id: "kondapur-1",
        title: "Stallion Xtreme Fitness",
        url: "https://youtu.be/55Hdc81F-9s?si=uF65IzpLYB9wNZH_",
      },
      {
        id: "kondapur-2",
        title: "Stallion Events",
        url: "https://youtu.be/-jPO-V0e5Cs?si=nEr6wzeaQftaU6jt",
      },
      {
        id: "kondapur-3",
        title: "Stallion Classic 2024 Highlights",
        url: "https://youtu.be/1qMg2Pbdcjg?si=MtxgkWu5lyXiw5pv",
      },
    ],
    trainers: [
      {
        name: " ",
        specialization: "Corporate Wellness & Posture Correction",
        experience: "6 years",
        image: "/images/trainers/kondapur1.JPG",
        
      },
      {
        name: " ",
        specialization: "Stress Management & Yoga",
        experience: "5 years",
        image: "/images/trainers/kondapur2.JPG",
      },
      {
        name: " ",
        specialization: "Stress Management & Yoga",
        experience: "5 years",
        image: "/images/trainers/kondapur3.JPG",
      },
      {
        name: " ",
        specialization: "Stress Management & Yoga",
        experience: "5 years",
        image: "/images/trainers/kondapur4.JPG",
      },
       {
        name: " ",
        specialization: "Stress Management & Yoga",
        experience: "5 years",
        image: "/images/trainers/kondapur5.JPG",
      },
       {
        name: " ",
        specialization: "Stress Management & Yoga",
        experience: "5 years",
        image: "/images/trainers/kondapur6.JPG",
      },
    ],
    facilities: [
      "24/7 Access with Smart Cards",
      "Smart Workout Tracking System",
      "Ergonomic Training Equipment",
      "Dedicated IT Professional Programs",
      "Posture Correction Zone",
      "High-Speed WiFi Throughout",
    ],
    timings: {
     weekdays: "5:30 AM - 10:00 PM",
      weekends: "6:00 AM - 11:00 AM",
    },
  },
  "subash-nagar": {
    id: "Subash-Nagar",
    name: "Stallion Xtreme Fitness",
    branch: "Subash Nagar Branch",
    description:
      "Boutique STALLION gym with CULT affiliation offering a more personalized experience. Combines STALLION's strength-focused equipment with CULT's signature personalized training programs, nutrition counseling, and small group classes for a more intimate fitness journey.",
    image: "/images/branches/komapllybranch.JPG",
    address: "Subash Nagar, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294898387257!2d78.45181098421887!3d17.50399376889806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f14844e08d%3A0x26d268026f79dd8a!2sStallion%20Fitness%20(Kompally)%20Elite%20-%20Available%20on%20cult.fit%20-%20Gym%20in%20Kompally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472633687!5m2!1sen!2sin",
    cultAffiliated: true,
    youtubeVideos: [
      {
        id: "subash-1",
        title: "Stallion Xtreme fitness Subash Nagar- Gym Tour",
        url: "https://youtu.be/ZW5suNOVAg8?si=LXVf9uzLgLwnAix2",
      },
      {
        id: "subash-2",
        title: "Stallion Xtreme Fitness",
        url: "https://youtu.be/-jPO-V0e5Cs?si=nEr6wzeaQftaU6jt",
      },
      {
        id: "subash-3",
        title: "Stallion Classic 2024 Highlights",
        url: "https://youtu.be/1qMg2Pbdcjg?si=MtxgkWu5lyXiw5pv",
      },
    ],
    trainers: [
      {
        name: " ",
        specialization: "Personal Training & Body Transformation",
        experience: "7 years",
        image: "/images/trainers/pipline1.JPG",
      },
      {
        name: " ",
        specialization: "Nutrition & Wellness Coaching",
        experience: "4 years",
        image: "/images/trainers/pipeline2.JPG",
      },
      {
        name: " ",
        specialization: "Nutrition & Wellness Coaching",
        experience: "4 years",
        image: "/images/trainers/pipeline3.JPG",
      },
      {
        name: " ",
        specialization: "Nutrition & Wellness Coaching",
        experience: "4 years",
        image: "/images/trainers/pipeline4.JPG",
      },
      {
        name: " ",
        specialization: "Nutrition & Wellness Coaching",
        experience: "4 years",
        image: "/images/trainers/pipeline5.JPG",
      },
      {
        name: " ",
        specialization: "Nutrition & Wellness Coaching",
        experience: "4 years",
        image: "/images/trainers/pipeline6.JPG",
      },
    ],
    facilities: [
      "Boutique Training Environment",
      "Personal Training Studios",
      "Small Group Class Rooms",
      "Nutrition Consultation Center",
      "Premium Equipment Selection",
      "Wellness Assessment Tools",
    ],
    timings: {
      weekdays: "5:30 AM - 10:00 PM",
      weekends: "6:00 AM - 11:00 AM",
    },
  },
  suchitra: {
    id: "Suchitra",
    name: "Stallion Xtreme Fitness",
    branch: "Suchitra Branch",
    description:
      "Our newest STALLION facility with CULT affiliation. Experience the raw power of STALLION equipment plus exclusive CULT benefits including a sprawling CrossFit arena, Olympic lifting platforms, and dedicated combat sports zone for the ultimate fitness warriors.",
    image: "/images/branches/suchitra.JPG",
    address: "Suchitra, Hyderabad",
    phone: "+91 8885110136",
    email: "support@stallionxtremefitness.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.294853892834!2d78.45181098715821!3d17.50399429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a2fe88dd5b%3A0x5594b7c0d998c25e!2sStallion%20Xtreme%20Fitness%20Suchitra%20-%20Available%20at%20cult.fit%20-%20Gyms%20in%20Quthbullapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1746472545479!5m2!1sen!2sin",
    cultAffiliated: true,
    youtubeVideos: [
      {
        id: "suchitra-1",
        title: "Gym Tour - Suchitra Branch",
        url: "https://youtu.be/UPfGgwF8ySk?si=wFQP9nH5lQ21Xqyi",
      },
      {
        id: "suchitra-2",
        title: "Olympic Lifting Platforms Tour",
        url: "https://youtu.be/-jPO-V0e5Cs?si=nEr6wzeaQftaU6jt",
      },
      {
        id: "suchitra-3",
        title: "Combat Sports Zone Training",
        url: "https://youtu.be/1qMg2Pbdcjg?si=MtxgkWu5lyXiw5pv",
      },
    ],
    trainers: [
      {
        name: " ",
        specialization: "CrossFit & Olympic Lifting",
        experience: "8 years",
        image: "/images/trainers/suchi1.JPG",
      },
      {
        name: " ",
        specialization: "Combat Sports & Self Defense",
        experience: "6 years",
        image: "/images/trainers/suchi2.JPG",
      },
        {
        name: " ",
        specialization: "Combat Sports & Self Defense",
        experience: "6 years",
        image: "/images/trainers/s4.png",
      },

     
     
    ],
    facilities: [
      "Sprawling CrossFit Arena",
      "Olympic Lifting Platforms",
      "Combat Sports Zone",
      "Athletic Performance Center",
      "Recovery & Mobility Area",
      "Specialized Equipment Collection",
    ],
    timings: {
      weekdays: "5:30 AM - 10:00 PM",
      weekends: "6:00 AM - 11:00 AM",
    },
  },
};

export default function BranchLocation() {
  const params = useParams();
  const [location, setLocation] = useState<Location | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YoutubeVideo | null>(null);

  useEffect(() => {
    if (params?.locationId) {
      const locationKey = params.locationId.toString().toLowerCase();
      const foundLocation =
        locationData[locationKey as keyof typeof locationData];
      if (foundLocation) {
        setLocation(foundLocation);
        setSelectedVideo(foundLocation.youtubeVideos[0]);
      }
    }
  }, [params]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Location not found
          </h2>
          <Link href="/branches" className="text-[#e71b4b] hover:underline">
            ← Back to Branches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link
            href="/branches"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Branches
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-['AkiraExpanded'] text-3xl sm:text-5xl font-bold uppercase tracking-wider mb-4">
              {location.name}
            </h1>
            <h2 className="text-xl sm:text-2xl mb-4">{location.branch}</h2>
            {location.cultAffiliated && (
              <div className="inline-flex px-4 py-2 bg-[#e71b4b] text-white rounded text-sm">
                CULT Partnered
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['AkiraExpanded'] text-2xl font-bold uppercase mb-6 text-black">
                About This Location
              </h3>
              <p className="text-black mb-6 leading-relaxed font-medium">
                {location.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#e71b4b] mr-3" />
                  <span className="text-black font-medium">
                    {location.address}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#e71b4b] mr-3" />
                  <span className="text-black font-medium">
                    {location.phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#e71b4b] mr-3" />
                  <span className="text-black font-medium">
                    {location.email}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#e71b4b] mr-3" />
                  <div className="text-black font-medium">
                    <div>Weekdays: {location.timings.weekdays}</div>
                    <div>Weekends: {location.timings.weekends}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map for ${location.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-['AkiraExpanded'] text-2xl font-bold uppercase text-center mb-8 text-black">
            Facilities & Equipment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.facilities.map(
              (facility: string, index: Key | null | undefined) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#e71b4b] rounded-full mr-3"></div>
                  <span className="text-black font-medium">{facility}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-['AkiraExpanded'] text-2xl font-bold uppercase text-center mb-8">
            Inside Our Gym
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              {selectedVideo && (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${extractVideoId(
                      selectedVideo.url
                    )}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {selectedVideo && (
                <h4 className="text-xl font-semibold mt-4 text-white">
                  {selectedVideo.title}
                </h4>
              )}
            </div>

            {/* Video Playlist */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 text-white">
                More Videos
              </h4>
              {location.youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`cursor-pointer p-3 rounded-lg transition-colors ${
                    selectedVideo?.id === video.id
                      ? "bg-[#e71b4b]"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <div className="aspect-video bg-gray-700 rounded mb-2 overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${extractVideoId(
                        video.url
                      )}/maxresdefault.jpg`}
                      alt={video.title}
                      width={320}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h5 className="text-sm font-medium">{video.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
    {/* Enhanced Trainers Section with Dynamic Image Sizing */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="font-['AkiraExpanded'] text-3xl font-bold uppercase text-center mb-12 text-black">
      Our Expert Trainers
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {location.trainers.map(
        (trainer: Trainer, index: Key | null | undefined) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Dynamic Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={400}
                height={300}
                className="w-full h-auto max-h-[500px] min-h-[250px] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  aspectRatio: 'auto'
                }}
              />
              
              {/* Image Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-[#e71b4b] text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {trainer.experience}
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-[#e71b4b] border-t-[30px] border-t-[#e71b4b] border-r-[30px] border-r-transparent border-b-[30px] border-b-transparent opacity-80"></div>
            </div>

            {/* Content Container - More Subdued */}
            <div className="p-6 bg-gradient-to-br from-white to-gray-50">
              {/* Name - Still prominent but smaller */}
              <h4 className="text-lg font-bold mb-2 text-black group-hover:text-[#e71b4b] transition-colors duration-300">
                {trainer.name}
              </h4>
              
              {/* Specialization - More subtle */}
              <p className="text-[#e71b4b] font-medium text-sm mb-3 opacity-80">
                {trainer.specialization}
              </p>
              
              {/* Experience - More muted */}
              <div className="flex items-center text-gray-500 text-sm">
                <div className="w-2 h-2 bg-[#e71b4b] rounded-full mr-2 opacity-60"></div>
                <span className="font-medium">{trainer.experience} Experience</span>
              </div>
              
              {/* Subtle Bottom Border Animation */}
              <div className="mt-4 h-1 bg-gradient-to-r from-[#e71b4b] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
