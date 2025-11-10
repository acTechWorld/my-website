import SectionHero from './sections/SectionHero'
import SectionKPI from './sections/SectionKPI'
import SectionContact from './sections/SectionContact'
import SectionResume from './sections/SectionResume'
import SectionSkills from './sections/SectionSkills'
function App() {
  return (
    <div className=" flex flex-col">
      <SectionHero/>
      <SectionKPI/>
      <SectionSkills />
      <SectionResume />
      <SectionContact />
    </div>
  )
}

export default App
