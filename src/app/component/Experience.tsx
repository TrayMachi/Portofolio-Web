"use client";
import React from "react";
import { useScreenSize } from "../utils/screensize";

const Experience = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const h1Format = screenSize ? "text-4xl" : "text-2xl";
  const marginFormat = screenSize ? "my-16" : "my-8";

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
                        Software Engineer Division at Business & Partnership{" "}
                        <br />
                        Jun 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Developed a tailored website for an external client.
                        </li>
                        <li>
                          Collaborated closely with the client to understand
                          project requirements.
                        </li>
                        <li>
                          Provided training and mentorship to BEM intern staff.
                        </li>
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
                    <div className="h-full w-1 bg-[#712e8b]"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-full h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-bold">
                        {screenSize
                          ? "Open House Fakultas Ilmu Komputer Universitas Indonesia"
                          : "Open House Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer Expert Staff <br />
                        Jul 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Built and optimized a dynamic user interface using
                          Next.js and Tanstack Query.
                        </li>
                        <li>
                          Developed a website to introduce Fasilkom UI to the
                          general public, expected to be viewed by over 800
                          user.
                        </li>
                        <li>
                          Managed the backend using Hono, Prisma ORM, and Neon
                          for efficient and robust functionality
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-full h-full bg-[#431c5052] rounded-xl p-4 md:pl-4">
                      <h1 className="text-[#98519e] text-xl pb-2 font-bold">
                        {screenSize ? "BEM Universitas Indonesia" : "BEM UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer of Multimedia Bureau
                        <br />
                        Mar 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Developed a Multi-Event Recruitment Platform “Sistem
                          Perekrutan Terbuka” using Next.js, enabling multiple
                          organizers to efficiently manage open recruitment for
                          various events.
                        </li>
                        <li>
                          Integrated Firebase NoSQL for robust data storage and
                          real-time updates, ensuring a scalable and responsive
                          user experience.
                        </li>
                        <li>
                          Implemented a modern and intuitive user interface
                          utilizing ShadCN and Framer Motion.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-full h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-bold">
                        {screenSize
                          ? "COMPFEST Fakultas Ilmu Komputer Universitas Indonesia"
                          : "COMPFEST Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer Staff <br />
                        Apr 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Created a dynamic landing page for a playground map,
                          showcasing points and tokens for shopping, enhancing
                          user engagement with 1500+ daily visitors.
                        </li>
                        <li>
                          Developed the frontend for a competition voting system
                          using Next.js and Tailwind CSS.
                        </li>
                        <li>
                          Implemented a backend system for team invitations via
                          email using NestJS.
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
                        Software Engineer Division at Business & Partnership{" "}
                        <br />
                        Jun 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4">
                        <li>
                          Developed a tailored website for an external client.
                        </li>
                        <li>
                          Collaborated closely with the client to understand
                          project requirements.
                        </li>
                        <li>
                          Provided training and mentorship to BEM intern staff.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-start-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b]"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-10"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl py-2 font-bold">
                        {screenSize
                          ? "Open House Fakultas Ilmu Komputer Universitas Indonesia"
                          : "Open House Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer Expert Staff <br />
                        Jul 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Built and optimized a dynamic user interface using
                          Next.js and Tanstack Query.
                        </li>
                        <li>
                          Developed a website to introduce Fasilkom UI to the
                          general public, expected to be viewed by over 800
                          user.
                        </li>
                        <li>
                          Managed the backend using Hono, Prisma ORM, and Neon
                          for efficient and robust functionality
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl pb-2 font-bold">
                        {screenSize ? "BEM Universitas Indonesia" : "BEM UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer of Multimedia Bureau
                        <br />
                        Mar 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Developed a Multi-Event Recruitment Platform “Sistem
                          Perekrutan Terbuka” using Next.js, enabling multiple
                          organizers to efficiently manage open recruitment for
                          various events.
                        </li>
                        <li>
                          Integrated Firebase NoSQL for robust data storage and
                          real-time updates, ensuring a scalable and responsive
                          user experience.
                        </li>
                        <li>
                          Implemented a modern and intuitive user interface
                          utilizing ShadCN and Framer Motion.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#712e8b] rounded-b-md"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-[#782fa8] z-1"></div>
                  </div>
                  <div className="col-span-4 w-full h-full py-4">
                    <div className="w-60 h-full bg-[#431c5052] rounded-xl p-2 md:pl-4">
                      <h1 className="text-[#98519e] text-xl pb-2 font-bold">
                        {screenSize
                          ? "COMPFEST Fakultas Ilmu Komputer Universitas Indonesia"
                          : "COMPFEST Fasilkom UI"}
                      </h1>
                      <p className="sm:text-sm text-xs pb-2 text-[#c9d6d6]">
                        Software Engineer Staff <br />
                        Apr 2024 – Present
                      </p>
                      <ul className="list-disc sm:text-sm text-xs text-[#c0c1c6] pl-4 pb-2">
                        <li>
                          Created a dynamic landing page for a playground map,
                          showcasing points and tokens for shopping, enhancing
                          user engagement with 1500+ daily visitors.
                        </li>
                        <li>
                          Developed the frontend for a competition voting system
                          using Next.js and Tailwind CSS.
                        </li>
                        <li>
                          Implemented a backend system for team invitations via
                          email using NestJS.
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
