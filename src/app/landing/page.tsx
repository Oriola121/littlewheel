"use client";
import { useState } from "react";
import { Button } from "@littlewheel/components/ui/button";
import Image from "next/image";
import LandingSection1 from "./landing-section1";
import { FaBars, FaTimes } from "react-icons/fa";
import { ScrollArea } from "@littlewheel/components/ui/scroll-area";
import LandingSection2 from "./landing-section2";
import LandingSection3 from "./landing-section3";

const navigationList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/" },
  { id: 3, title: "Contact", link: "/" },
  { id: 4, title: "Testimonial", link: "/" },
  { id: 5, title: "FAQ", link: "/" },
];

export default function Page() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="h-screen bg-[#F9FAFB] w-full text-secondary m-0 p-0 overflow-hidden">
      <header className="px-10 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/uploads/littlewheel.png"
            alt="Little Wheel Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold">LITTLEWHEEL</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-black focus:outline-none">
            {isNavOpen ? (
              <FaTimes size={24} className="text-secondary" />
            ) : (
              <FaBars size={24} className="text-secondary" />
            )}
          </button>
        </div>

        <nav className="hidden md:flex gap-10">
          {navigationList.map((nav) => (
            <a key={nav.id} href={nav.link} className="hover:font-bold">
              {nav.title}
            </a>
          ))}
        </nav>
        <Button className="hidden md:flex bg-black p-4 text-primary hover:bg-[#474747] hover:font-bold">
          Download App Now
        </Button>
      </header>
      <ScrollArea className="h-[88.6%]">
        <div className="h-full">
          <LandingSection1 />
          <LandingSection2 />
          <LandingSection3 />
        </div>
      </ScrollArea>

      {isNavOpen && (
        <nav className="md:hidden absolute top-16 right-0 w-2/5 h-1/2 bg-primary/90 flex flex-col items-center justify-center shadow-2xl rounded-lg z-50">
          {navigationList.map((nav) => (
            <a key={nav.id} href={nav.link} className="hover:font-bold my-2">
              {nav.title}
            </a>
          ))}
          <Button className="bg-black p-4 text-primary hover:bg-[#474747] hover:font-bold mt-4">
            Download App Now
          </Button>
        </nav>
      )}
    </div>
  );
}
