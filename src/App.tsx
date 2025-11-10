import SectionHero from './sections/SectionHero'
import SectionKPI from './sections/SectionKPI'
import SectionContact from './sections/SectionContact'
import SectionResume from './sections/SectionResume'
function App() {
  return (
    <div className="bg-white dark:bg-[#1f1f24] flex flex-col">
      <SectionHero/>
      <SectionKPI/>
      <SectionContact />
      <SectionResume />
    </div>
  )
}

export default App
