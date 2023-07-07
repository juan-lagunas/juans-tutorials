"use client"

import Link from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"

const Header = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between px-4 text-center sm:px-10">
      <a href="#structure" className="shrink text-sm font-semibold">
        Juan Tutorial
      </a>
      <Link href="https://github.com/juan-lagunas/juans-tutorials">
        <GitHubIcon />
      </Link>
    </div>
  )
}

export default Header
