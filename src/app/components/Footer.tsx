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
    <div className="relative z-10 mx-auto mb-4 grid h-14 w-11/12 grid-flow-col items-center gap-2 rounded-full bg-[#261F1B] p-2 text-center shadow-md transition sm:w-3/4">
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
            } group relative cursor-pointer rounded-full px-2 py-2 capitalize hover:bg-[#8C6954]
            `}
          >
            {item.name}
            {/* Large screen nav */}
            <div
              className={`${
                active && navActive == item.name ? "" : "hidden"
              } absolute -top-36 left-0 grid h-32 w-full grid-cols-2 gap-2 rounded-3xl bg-[#261F1B] p-2 shadow-lg group-hover:visible max-lg:hidden
              `}
            >
              {item.subNav.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="flex items-center justify-center rounded-full hover:text-[#F29F05]"
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
            } absolute -top-36 grid h-32 w-full grid-cols-2 gap-2 rounded-3xl bg-[#261F1B] p-2 group-hover:visible lg:hidden
            `}
          >
            {item.subNav.map((item) => (
              <Link
                key={item}
                href="/"
                className="flex items-center justify-center rounded-full hover:text-[#F29F05]"
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
