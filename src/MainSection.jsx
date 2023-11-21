import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Blue from './Blue.jsx'
import Red from './Red.jsx'
import Pink from './Pink.jsx'
import Black from './Black.jsx'
import Purple from './Purple.jsx'

const MainSection = () => {
  return (
    <div id="main-section">
        <Routes>
        <Route  path='/' element={<Home />}/>
          <Route path='/blue' element={<Blue />}/>
          <Route path='/red' element={<Red />}/>
          <Route path='/pink' element={<Pink />}/>
          <Route path='/black' element={<Black />}/>
          <Route path='/purple' element={<Purple />}/>
        </Routes>
        </div>
  )
}

export default MainSection;
