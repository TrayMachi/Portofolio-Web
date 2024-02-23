'use client'
import React from "react";
import { useScreenSize } from "../utils/screensize";

const Experience = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const h1Format = screenSize ? "text-4xl" : "text-2xl";
  const marginFormat = screenSize ? "my-16" : "my-8";
  const data = [
    {
      header: screenSize ? "BEM Fakultas Ilmu Komputer Universitas Indonesia" : "BEM Fasilkom UI",
      li: [
        "Learnt Front-End Development.",
        "Learnt how to work as team with GitHub.",
        "Completed web project about food catalog."
      ]
    },
    {
      header: screenSize ? "RISTEK Fakultas Ilmu Komputer Universitas Indonesia" : "RISTEK Fasilkom UI",
      li: [
        "Learnt about Website including Reactjs, ExpressJs, MySQL.",
        "Get insight of professionalism in Software Engineer."
      ]
    }
  ];

  return (
    <div className="flex justify-center mx-auto items-center px-6 relative">
      <div>
        <div className="mt-12 flex justify-center">
          <h1 className={`${h1Format} font-bold`}>Experience</h1>
        </div>
        <div>
          <div
            className={`${marginFormat} shrink w-full flex justify-center items-center`}
          >
            <div
              className={`max-w-7xl mx-auto w-${
                screenSize ? "[120vh]" : "full"
              } grid grid-cols-9 ${screenSize ? "px-2" : "pr-2"}`}
            >
              {screenSize ? (
                <>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-full h-full bg-[#431c5052] rounded-xl p-4 md:pl-4">
                      <h1 className="text-[#98519e] text-xl pb-2 font-bold">
                        {screenSize
                          ? "BEM Fakultas Ilmu Komputer Universitas Indonesia"
                          : "BEM Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Intern Staff at Information Technology Development
                        Department <br />
                        Sep 2023 – Dec 2023
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>Learnt Front-End Development.</li>
                        <li>Learnt how to work as team with GitHub.</li>
                        <li>Completed web project about food catalog.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-t-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-full h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-bold">
                        {screenSize
                          ? "RISTEK Fakultas Ilmu Komputer Universitas Indonesia"
                          : "RISTEK Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Participant of Pekan RISTEK Website Development Open
                        Class <br />
                        Nov 2023
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Learnt about Website including Reactjs, ExpressJs,
                          MySQL.
                        </li>
                        <li>
                          Get insight of profesionalism in Software Engineer.
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-t-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl pb-2 font-bold">
                        {screenSize
                          ? "BEM Fakultas Ilmu Komputer Universitas Indonesia"
                          : "BEM Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Intern Staff at Information Technology Development
                        Department <br />
                        Sep 2023 – Dec 2023
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4">
                        <li>Learnt Front-End Development.</li>
                        <li>Learnt how to work as team with GitHub.</li>
                        <li>Completed web project about food catalog.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-start-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-bold">
                        {screenSize
                          ? "RISTEK Fakultas Ilmu Komputer Universitas Indonesia"
                          : "RISTEK Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Participant of Pekan RISTEK Website Development Open
                        Class <br />
                        Nov 2023
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Learnt about Website including Reactjs, ExpressJs,
                          MySQL.
                        </li>
                        <li>
                          Get insight of profesionalism in Software Engineer.
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;