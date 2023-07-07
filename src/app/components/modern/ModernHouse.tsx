import About from "../About"
import Structure from "./Structure"
import Functional from "./Functional"
import Finishes from "./Finishes"

const ModernHouse = () => {
  return (
    <main className="h-full w-full overflow-hidden overflow-y-auto">
      <About id="about" />
      <Structure id="structure" />
      <Functional id="functional" />
      <Finishes id="finishes" />
    </main>
  )
}

export default ModernHouse
