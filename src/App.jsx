import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        
      </Routes>
      
    </div>
  )
}

export default App
