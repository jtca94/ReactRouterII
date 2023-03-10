import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import PokemonStats from "./PokeStats";
import { useDataContext } from "../context/ContextApi";


import InputSearch from "../components/InputSearch";



export default function Pokemons() {

    const { show } = useDataContext();
    return (
        <>
            <Container maxWidth='sm'>
                <Typography
                    variant="h4"
                    sx={{ textAlign: 'center', my: 3 }}
                >
                    Selecciona un Pokémon
                </Typography>

                <InputSearch />



            </Container>

            {show === false ? null : <PokemonStats />}
            
        </>

    )
}