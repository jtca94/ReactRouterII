import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function Pokemons() {
    return(
        <Container maxWidth='sm'> 
            <Typography 
                variant="h4"
                sx={{textAlign: 'center', my: 3}}
                >
                Selecciona un Pokémon
            </Typography>
        </Container>
    )
}