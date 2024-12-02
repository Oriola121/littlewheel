export default function LandingSection3() {
  return (
    <div className="h-auto bg-black text-white">
      <div className="bg-vector h-full flex flex-col items-center px-6 sm:px-10 md:px-20 lg:px-40 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                Reshaping Finance for Everyone
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our platform breaks down traditional barriers to financial
                services, providing intuitive tools and resources that work for
                everyone. By combining cutting-edge technology with
                human-centered design, we’ve created a financial ecosystem that
                understands and adapts to diverse needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">
                    <img src="uploads/checkmark.svg" />
                  </span>
                  Community Driven
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <img src="uploads/checkmark.svg" />
                  </span>
                  Transparency
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <img src="uploads/checkmark.svg" />
                  </span>
                  Security and Secured
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-end">
              <img src="uploads/arrow-right.svg" />
              <div
                className="w-[60%] md:w-[50%] p-1 bg-white rounded-xl"
                style={{ rotate: "18deg" }}
              >
                <img src="/uploads/man.svg" className="rounded-xl" />
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] space-y-10 md:space-y-20">
            <div className="relative flex flex-col items-start">
              <img src="uploads/arrow-left.svg" />
              <div className="w-[70%] md:w-full p-1 bg-white rounded-xl z-10">
                <img src="/uploads/man.svg" className="rounded-xl" />
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed px-4 md:px-8">
              Our platform breaks down traditional barriers to financial
              services, providing intuitive tools and resources that work for
              everyone. By combining cutting-edge technology with human-centered
              design, we’ve created a financial ecosystem that understands and
              adapts to diverse needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
