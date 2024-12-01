import { ScrollArea } from "@littlewheel/components/ui/scroll-area";
import Image from "next/image";
import { PiCalendarBlank } from "react-icons/pi";

export default function LandingSection1() {
  return (
    <ScrollArea className="h-[88.6%]">
      <div className="bg-black rounded-3xl h-full text-white flex flex-col relative">
        <div className="flex justify-center items-start">
          <Image
            src="/uploads/spotlight.png"
            alt=""
            width={600}
            height={600}
            className="w-full max-w-xl object-contain"
          />
        </div>

        <div className="w-full flex flex-col items-center z-10 mt-auto p-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center -mt-24">
            Build Financial Freedom
            <br />
            with the Little Wheel
          </h1>
          <p className="text-xs md:text-sm text-white/80 text-center ">
            Unlock your financial potential with tools and services designed
            <br />
            for every journey and dream.
          </p>

          <div className="w-full md:w-[85%] bg-imagecard bg-cover rounded-3xl my-2 flex flex-col space-y-10 justify-between p-4 md:px-8">
            <Image
              src="/uploads/rounded-little.svg"
              alt=""
              width={30}
              height={30}
            />

            <div className="flex flex-wrap gap-4 justify-between items-end pb-6">
              <div className="flex gap-4 p-4 max-w-md rounded-lg bg-white text-black flex-grow">
                <img
                  src="/uploads/donation-image.jpeg"
                  alt="Donation Campaign"
                  className="rounded-md w-1/3 object-cover"
                />
                <div className="space-y-1 flex-grow">
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

              <div className="w-full md:w-[30%] flex flex-col space-y-2">
                <p className="text-sm md:text-base">Personal savings</p>
                <div className="flex gap-4 p-4 rounded-lg bg-white text-black">
                  <img
                    src="/uploads/bookdoor.jpeg"
                    alt="Donation Campaign"
                    className="rounded-md w-1/4 object-cover"
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

        <div className="flex justify-between items-center w-full absolute bottom-1/2 left-0">
          <Image
            src="/uploads/w-shaped.svg"
            alt=""
            width={65}
            height={65}
            className="hidden md:block"
          />
          <Image
            src="/uploads/boxed-circle.svg"
            alt=""
            width={65}
            height={65}
            className="hidden md:block"
          />
        </div>
      </div>
    </ScrollArea>
  );
}
