"use client"

import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between px-4 text-center sm:px-10">
      <a href="/" className="shrink text-sm font-semibold">
        Juan Tutorial
      </a>
      <Link
        href="https://github.com/juan-lagunas/juans-tutorials"
        className="relative h-5 w-5"
      >
        <Image src="/images/github-mark-white.png" alt="github" fill />
      </Link>
    </div>
  )
}

export default Header
