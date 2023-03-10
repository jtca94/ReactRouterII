import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import PokemonStats from "./PokeStats";
import { useDataContext } from "../context/ContextApi";


import InputSearch from "../components/InputSearch";



export default function Pokemons() {

    const { show } = useDataContext();
    return (
        <Container sx={{minHeight: '80vh'}}>
            <Container maxWidth='sm' sx={{ minHeight: '75%' }} >
                <Typography
                    variant="h4"
                    sx={{ textAlign: 'center', my: 3 }}
                >
                    Selecciona un Pokémon
                </Typography>
                {/*componente que contiene el input de busqueda */}
                <InputSearch />
            </Container>
            {/* este operador ternario evita que al entrar a la pagina pokemons ejecute el useEffect al renderizar el componente
            evitando asi un error 404 en consola al no existir un params que consumir */}
            {show === false ? null : <PokemonStats />}
        </Container>

            )
}