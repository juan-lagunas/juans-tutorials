"use client"

import Link from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"

const Header = () => {
  return (
    <div className="h-14 w-full flex items-center justify-between px-4 sm:px-10 text-center">
      <Link href="" className="text-sm font-semibold shrink">
        Juan Tutorial
      </Link>
      <Link href="https://github.com/juan-lagunas/juans-tutorials">
        <GitHubIcon />
      </Link>
    </div>
  )
}

export default Header
