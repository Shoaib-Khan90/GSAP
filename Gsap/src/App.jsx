import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Videos from './Pages/Videos'

function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/videos" element= {<Videos/>}/>
    </Routes>
    </div>
  )
  }

export default App;