"use client"

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

type StructureProps = {
  id: string
}

const Structure: React.FC<StructureProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="h-full w-full relative flex items-center justify-center"
    >
      <div className="flex flex-col h-72 w-[340px] sm:h-80 sm:w-96">
        {/* Roof */}
        <div className="h-[15%] cursor-pointer hover:-translate-y-2 transition duration-200">
          <div className="h-2/3 w-1/3 bg-black"></div>
          <div className="h-1/3 w-full bg-black"></div>
        </div>
        {/* Home */}
        <div className="h-[80%] w-full bg-black">
          {/* Second level */}
          <div className="h-1/2 flex w-full">
            <div className="flex flex-col w-32">
              <div className="h-full bg-orange-900"></div>
              <div className="h-4 bg-black"></div>
            </div>
            <div className="h-full w-full bg-white p-6">
              <div className="h-full w-full bg-zinc-800 m-auto"></div>
            </div>
            <div className="w-[5%] h-32 bg-black"></div>
          </div>
          {/* First level */}
          <div className="h-1/2 w-full mx-auto grid grid-cols-4 gap-2 py-2 px-3">
            <div className="cursor-pointer hover:border-2 border-white bg-zinc-400"></div>
            <div className="cursor-pointer hover:border-2 border-white bg-zinc-400"></div>
            <div className="cursor-pointer hover:border-2 border-white relative bg-orange-950 flex items-center justify-center">
              <div className="h-1/2 w-4 bg-zinc-200 border-2 border-black"></div>
              <div className="h-2 w-2 absolute top-1/2 right-2 bg-yellow-600 rounded-full"></div>
            </div>
            <div className="cursor-pointer hover:border-2 border-white bg-zinc-400"></div>
          </div>
        </div>
        {/* Foundation */}
        <div className="h-[5%] cursor-pointer hover:translate-y-2 transition duration-200">
          <div className="h-full w-full bg-zinc-700"></div>
        </div>
      </div>
      <a
        href="#functional"
        className="h-10 w-10 bg-[rgba(0,0,0,0.7)] rounded-full absolute bottom-[5%] animate-bounce flex items-center justify-center"
      >
        <ArrowDownwardIcon />
      </a>
    </div>
  )
}

export default Structure
