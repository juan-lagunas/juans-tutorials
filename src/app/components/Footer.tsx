"use client"

import Link from "next/link"
import { useState } from "react"

const Footer = () => {
  const [active, setActive] = useState(false)
  const [navActive, setNavActive] = useState("")
  const nav = [
    {
      name: "structure",
      subNav: ["Foundation", "Frame", "Roof"],
    },
    {
      name: "functional",
      subNav: ["Windows/Doors", "Plumbing", "Electrical", "HVAC"],
    },
    {
      name: "finishes",
      subNav: [
        "Siding",
        "Drywall and Paint",
        "Interior Finish",
        "Finished Flooring",
      ],
    },
  ]

  return (
    <div className="relative z-10 w-11/12 sm:w-3/4 h-14 mb-4 rounded-full bg-[#261F1B] grid grid-flow-col gap-2 items-center text-center p-2 transition shadow-md mx-auto">
      {nav.map((item) => (
        <>
          <a
            href={`#${item.name}`}
            key={item.name}
            onClick={() => {
              if (navActive == item.name) {
                setActive(!active)
              } else {
                setActive(true)
              }
              setNavActive(item.name)
            }}
            className={`${
              active && navActive == item.name ? "bg-[#8C6954]" : ""
            } relative group hover:bg-[#8C6954] px-2 py-2 rounded-full cursor-pointer capitalize
            `}
          >
            {item.name}
            {/* Large screen nav */}
            <div
              className={`${
                active && navActive == item.name ? "" : "hidden"
              } max-lg:hidden group-hover:visible absolute h-32 w-full bg-[#261F1B] left-0 -top-36 rounded-3xl grid grid-cols-2 gap-2 p-2 shadow-lg
              `}
            >
              {item.subNav.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="flex justify-center items-center rounded-full hover:text-[#F29F05]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </a>
          {/* Small screen nav */}
          <div
            className={`${
              active && navActive == item.name ? "" : "hidden"
            } lg:hidden group-hover:visible absolute h-32 w-full bg-[#261F1B] -top-36 rounded-3xl grid grid-cols-2 gap-2 p-2
            `}
          >
            {item.subNav.map((item) => (
              <Link
                key={item}
                href="/"
                className="flex justify-center items-center rounded-full hover:text-[#F29F05]"
              >
                {item}
              </Link>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default Footer
