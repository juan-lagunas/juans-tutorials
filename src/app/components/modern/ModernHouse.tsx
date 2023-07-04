import Structure from "./Structure"
import Functional from "./Functional"
import Finishes from "./Finishes"

const ModernHouse = () => {
  return (
    <main className="h-full w-full overflow-hidden overflow-y-auto">
      <Structure />
      <Functional />
      <Finishes />
    </main>
  )
}

export default ModernHouse
