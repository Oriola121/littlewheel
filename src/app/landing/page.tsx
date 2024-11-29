import { Button } from "@littlewheel/components/ui/button";
import { ScrollArea } from "@littlewheel/components/ui/scroll-area";
import Image from "next/image";
import { PiCalendarBlank } from "react-icons/pi";

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

      <ScrollArea className="h-[88.6%]">
        <div className="bg-spotlight bg-contain bg-no-repeat rounded-3xl h-full text-white flex items-end">
          <div className="w-full h-3/5 bg-black rounded-b-3xl flex flex-col items-center">
            <h1 className="text-4xl font-extrabold -mt-28 text-center">
              Build Financial Freedom
              <br />
              with the Little Wheel
            </h1>
            <p className="text-xs text-white/80  text-center">
              Unlock your financial potential with tools and services designed
              <br />
              for every journey and dream.
            </p>
            <div className="w-[85%] h-[85%] bg-imagecard bg-cover rounded-3xl my-4 flex flex-col justify-between px-8">
              <Image
                src="/uploads/rounded-little.svg"
                alt=""
                width={30}
                height={30}
              />

              <div className="flex items-end justify-between pb-6">
                <div className="flex gap-4 p-4 max-w-[40%] rounded-lg bg-white text-black">
                  <img
                    src="/uploads/donation-image.jpeg"
                    alt="Donation Campaign"
                    className="rounded-md"
                    style={{ aspectRatio: "1/1", width: "30%" }}
                  />
                  <div className="space-y-1">
                    <div className="w-1/2 rounded-lg p-3 bg-[#E3EFFC] flex items-center gap-2">
                      <Image
                        src="/uploads/charity.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span className="text-xs">Charity</span>
                    </div>
                    <h2 className="text-sm font-semibold">
                      Donation for Booking Campaign
                    </h2>
                    <p className="text-xs text-gray-500">
                      ₦21,200 funds raised from ₦100,000
                    </p>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "21.2%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[
                          "/uploads/avatar1.png",
                          "/uploads/avatar2.png",
                          "/uploads/avatar3.png",
                        ].map((profileImage, index) => (
                          <img
                            key={index}
                            src={profileImage}
                            alt={`Donor ${index + 1}`}
                            className={`w-8 h-8 rounded-full -ml-2 ${
                              index === 0 ? "ml-0" : ""
                            }`}
                          />
                        ))}
                        <span className="text-xs w-8 h-8 rounded-full bg-[#ffece5] flex items-center justify-center -ml-2">
                          +10
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PiCalendarBlank size={22} />
                        <p className="text-xs">200 days left</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[30%] flex flex-col space-y-2">
                  <p className="">Personal savings</p>
                  <div className="flex gap-4 p-4 rounded-lg bg-white text-black">
                    <img
                      src="/uploads/bookdoor.jpeg"
                      alt="Donation Campaign"
                      className="rounded-md"
                      style={{ aspectRatio: "1/1", width: "20%" }}
                    />
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold">
                        New Shoe for Christmas
                      </h2>
                      <p className="text-xs text-gray-500">
                        ₦21,200 funds raised from ₦100,000
                      </p>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "21.2%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
