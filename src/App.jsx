import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import PokemonStats from './pages/PokeStats'
import  DataContextProvider  from './context/ContextApi'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {


  return (
    <DataContextProvider>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />}>
            <Route path="/pokemons/:name" element={<PokemonStats/>} />
          </Route>

        </Routes>

      </div>
    </DataContextProvider>
  )
}

export default App
