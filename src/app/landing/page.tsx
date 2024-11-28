import { Button } from "@littlewheel/components/ui/button";
import { ScrollArea } from "@littlewheel/components/ui/scroll-area";
import Image from "next/image";

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
        <div className="flex items-center gap-2">
          <Image src="/uploads/littlewheel.png" alt="" width={30} height={30} />
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
      <ScrollArea className="h-[89.2%]">
        <div className="bg-[url(/uploads/spotlight.png)] bg-contain bg-no-repeat rounded-3xl h-full text-white flex items-end">
          <div className="w-full h-3/5 bg-black border-b-0 rounded-3xl text-center">
            <h1 className="text-4xl font-extrabold -mt-16">
              Build Financial Freedom
              <br />
              with the Little Wheel
            </h1>
            <p className="text-xs text-white/80">
              Unlock your financial potential with tools and services designed
              <br />
              for every journey and dream.
            </p>
          </div>
          <div className="absolute right-0 top-1/3 transform -translate-y-1/2">
            <Image
              src="/uploads/boxed-circle.svg"
              alt=""
              width={65}
              height={65}
            />
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <Image src="/uploads/w-shaped.svg" alt="" width={65} height={65} />
          </div>
          <div className="absolute bottom-0 right-80">
            <Image src="/uploads/bird.svg" alt="" width={65} height={65} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
