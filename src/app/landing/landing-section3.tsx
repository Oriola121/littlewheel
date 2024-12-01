import React from "react";

export default function LandingSection3() {
  return (
    <div className="h-auto bg-black text-white">
      <div className="bg-vector h-full flex flex-col items-center space-y-6 px-40 py-48">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-4xl">Reshaping Finance for Everyone</p>
            <p>
              Our platform breaks down traditional barriers to financial
              services, providing
              <br /> intuitive tools and resources that work for everyone. By
              combining cutting-edge
              <br /> technology with human-centered design, we’ve created a
              financial ecosystem
              <br /> that understands and adapts to diverse needs.
            </p>
          </div>
          <div className="w-[30%] p-1 bg-white rounded-xl">
            <img src="/uploads/man.svg" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
