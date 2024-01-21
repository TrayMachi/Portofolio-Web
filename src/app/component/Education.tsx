'use client'
import React from "react";
import { useScreenSize } from "../utils/screensize";

const Education = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const h1Format = screenSize ? "text-4xl" : "text-2xl";
  const marginFormat = screenSize ? "my-16" : "my-8";
  const widthFormat = screenSize ? "w-[120vh]" : "w-full";

  return (
    <div className="flex justify-center mx-auto items-center px-6 relative">
      <div>
        <div className="mt-12 flex justify-center">
          <h1 className={`${h1Format} font-bold`}>
            Education
          </h1>
        </div>
        <div>
          <div className={`${marginFormat} shrink w-full flex justify-center items-center`}>
            <div
              className={`max-w-7xl mx-auto ${widthFormat} grid grid-cols-9 ${screenSize ? "px-2" : "pr-2"}`}
            >
              {screenSize ? (
                <>
                  <div className="col-span-4 w-full h-full py-4 px-8">
                    <div className="w-full h-full bg-[#712a8d2c] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-semibold">
                        SMAN 26 Jakarta
                      </h1>
                      <p className="sm:text-sm text-xs pb-4 text-[#c9d6d6]">
                        Natural Science <br />
                        2020-2023
                      </p>
                    </div>
                  </div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#73348b] rounded-t-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#6a2a96] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#73348b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#6a2a96] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4 px-8">
                    <div className="w-full h-full bg-[#712a8d2c] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-semibold">
                        University of Indonesia
                      </h1>
                      <p className="sm:text-sm text-xs pb-4 text-[#c9d6d6]">
                        Bachelor&apos;s degree of Computer Science <br />
                        2023-Present
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                </>
              ) : (
                <>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#9746b8] rounded-t-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#6a2a96] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#712a8d2c] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-semibold">
                        SMAN 26 Jakarta
                      </h1>
                      <p className="sm:text-sm text-xs pb-4 text-[#c9d6d6]">
                        Natural Science <br />
                        2020-2023
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-start-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#9746b8] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#6a2a96] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#712a8d2c] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-semibold">
                        University of Indonesia
                      </h1>
                      <p className="sm:text-sm text-xs pb-4 text-[#c9d6d6]">
                        Bachelor&apos;s degree of Computer Science <br />
                        2023-Present
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;