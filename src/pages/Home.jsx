import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function Home() {
    return (
        <Container maxWidth='sm' >
            <Typography
                variant='h4'
                sx={{ textAlign: 'center', my: 3 }}
            >Bienvenido maestro Pokémon!!!
            </Typography>
            <Box 
                component='img'
                src='/images/landingImg.png'
                alt='Landing Image'
                sx={{ width: '50%', height: 'auto', alignContent: 'center', display: 'block', mx: 'auto'}}
            />
            <Typography
                align="center"
                paragraph
                color='white'
                sx={{ my: 3, backgroundColor: 'yellowDark.main', borderRadius: '10px', p: 2, boxShadow: 5 }}
            >
                ¡Bienvenido a nuestra webApp de Estadísticas de Pokémon! Encuentra información detallada sobre tus Pokémon favoritos para mejorar tu juego y convertirte en un verdadero maestro Pokémon. Explora nuestra amplia base de datos y descubre todo lo que necesitas saber sobre el maravilloso mundo de Pokémon. ¡Comienza hoy mismo!
            </Typography>
        </Container>
    )

}