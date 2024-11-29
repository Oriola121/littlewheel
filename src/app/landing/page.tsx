import { Button } from "@littlewheel/components/ui/button";
import Image from "next/image";
import LandingSection1 from "./landing-section1";

const navigationList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/" },
  { id: 3, title: "Contact", link: "/" },
  { id: 4, title: "Testimonial", link: "/" },
  { id: 5, title: "FAQ", link: "/" },
];

export default function Page() {
  return (
    <div className="h-screen bg-primary w-full text-secondary m-0 p-0">
      <header className="px-10 py-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image src="/uploads/littlewheel.png" alt="" width={40} height={40} />
          <h1 className="text-2xl font-bold">LITTLEWHEEL</h1>
        </div>
        <nav className="flex gap-10">
          {navigationList.map((nav) => (
            <a key={nav.id} href={nav.link} className="hover:font-bold">
              {nav.title}
            </a>
          ))}
        </nav>
        <Button className="bg-black p-4 text-primary hover:bg-[#474747] hover:font-bold">
          Download App Now
        </Button>
      </header>

      <LandingSection1 />
    </div>
  );
}
