type FunctionalProps = {
  id: string
}

const Functional: React.FC<FunctionalProps> = ({ id }) => {
  return (
    <div id={id} className="flex h-full w-full items-center justify-center">
      <div className="shrink-1 flex h-72 w-80 flex-col sm:h-80 sm:w-96">
        {/* Roof */}
        <div className="h-[15%] cursor-pointer transition duration-200 hover:-translate-y-2">
          <div className="h-2/3 w-1/3 bg-black"></div>
          <div className="h-1/3 w-full bg-black"></div>
        </div>
        {/* Home */}
        <div className="h-[80%] w-full bg-black">
          {/* Second level */}
          <div className="flex h-1/2 w-full">
            <div className="flex w-32 flex-col">
              <div className="h-full bg-orange-900"></div>
              <div className="h-4 bg-black"></div>
            </div>
            <div className="h-full w-full bg-white p-6">
              <div className="m-auto h-full w-full bg-zinc-800"></div>
            </div>
            <div className="h-32 w-[5%] bg-black"></div>
          </div>
          {/* First level */}
          <div className="mx-auto grid h-1/2 w-full grid-cols-4 gap-2 px-3 py-2">
            <div className="cursor-pointer border-white bg-zinc-400 hover:border-2"></div>
            <div className="cursor-pointer border-white bg-zinc-400 hover:border-2"></div>
            <div className="relative flex cursor-pointer items-center justify-center border-white bg-orange-950 hover:border-2">
              <div className="h-1/2 w-4 border-2 border-black bg-zinc-200"></div>
              <div className="absolute right-2 top-1/2 h-2 w-2 rounded-full bg-yellow-600"></div>
            </div>
            <div className="cursor-pointer border-white bg-zinc-400 hover:border-2"></div>
          </div>
        </div>
        {/* Foundation */}
        <div className="h-[5%] cursor-pointer transition duration-200 hover:translate-y-2">
          <div className="h-full w-full bg-zinc-700"></div>
        </div>
      </div>
    </div>
  )
}

export default Functional
