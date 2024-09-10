
// IMPORT
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navigation from './Components/Navigation/Navigation'
import Project from './Components/Project/Project'
import Social from './Components/SocialMedia/Social'
import Data from './Model/Data'

export default function App() {


  const {project, skills} = Data

  return (
      <>
        <Navigation />
        <Home />
        <About  skills={ skills} />
        <Project project={project}/>
        <Social />
      </>
  )
}
