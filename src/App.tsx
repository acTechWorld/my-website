import SectionHero from './sections/SectionHero'
import SectionKPI from './sections/SectionKPI'
import SectionContact from './sections/SectionContact'
import SectionResume from './sections/SectionResume'
import SectionSkills from './sections/SectionSkills'
import SectionPortfolio from './sections/SectionPortfolio'
import SectionBlog from './sections/SectionBlog'
function App() {
  return (
    <div className=" flex flex-col">
      <SectionHero/>
      <SectionKPI/>
      <SectionSkills />
      <SectionPortfolio />
      <SectionResume />
      <SectionBlog />
      <SectionContact />
    </div>
  )
}

export default App

//CV fr