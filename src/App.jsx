import { useState } from 'react'
import Header from './components/Header'

import './App.css'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className=''>
       <Header/>
       <LandingPage/>
      </div>
        
   
  )
}

export default App
