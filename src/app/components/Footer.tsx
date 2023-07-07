"use client"

import Link from "next/link"
import { useState } from "react"

const Footer = () => {
  const [active, setActive] = useState<string>()
  const nav = [
    { name: "about" },
    { name: "structure" },
    { name: "functional" },
    { name: "finishes" },
  ]
  return (
    <div className="relative z-10 mx-auto mb-3 grid grid-flow-col gap-2 rounded-full bg-[#261F1B] p-3 text-center shadow-md transition">
      {nav.map((item) => (
        <>
          <Link
            href={"#" + item.name}
            onClick={() => {
              setActive(item.name)
            }}
            key={item.name}
            className={`${
              active == item.name ? "bg-[#ae7408] hover:text-white" : ""
            } group relative cursor-pointer rounded-full px-4 py-2 capitalize hover:bg-[#ae7408]
            `}
          >
            {item.name}
          </Link>
        </>
      ))}
    </div>
  )
}

export default Footer
