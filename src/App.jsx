import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './componets/MyTitle'
import PokemonCard from './componets/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div>
        <MyTitle/>
        <PokemonCard/>
      </div>
 
  )
}

export default App
