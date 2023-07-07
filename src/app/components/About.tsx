import { ArrowDownCircleIcon } from "@heroicons/react/24/solid"

type Props = {
  id: string
}

const About = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="relative flex h-full w-full items-center justify-center"
    >
      <a
        href="#functional"
        className="absolute bottom-[10%] flex h-10 w-10 animate-bounce items-center justify-center rounded-full"
      >
        <ArrowDownCircleIcon className="" />
      </a>
    </div>
  )
}

export default About
