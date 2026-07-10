import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Trainer from './Pages/Trainer'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/trainer" element= {<Trainer/>}/>
      <Route path="/contact" element= {<Contact/>}/>
    </Routes>
    </div>
  )
  }

export default App;