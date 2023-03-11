import { Container } from "@mui/system";
import { Typography, Box, Grid, Divider, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";





export default function PokemonCard({pokemon}) {

    const Item = styled('div')(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    }));

    const { name, sprites, types, stats, abilities } = pokemon;
   
    


    return (
        <>
            
        <Container sx={{ mt: 3 }} >
            <Grid container spacing={3} >


                <Grid item xs={12} md={5}>
                    <Item>
                        <Typography variant="h2" sx={{ textAlign: 'center' }}> {name.charAt(0).toUpperCase() + name.slice(1)} </Typography>

                        <Box
                            component='img'
                            src={sprites.other['official-artwork'].front_default}
                            alt={name}
                            sx={{ width: '100%', height: 'auto', alignContent: 'center', display: 'inline', mx: 'auto' }}
                        />
                    </Item>
                </Grid>


                <Grid item xs={12} md={3}>
                    <Item>
                        <Typography variant="h4" sx={{ mt: 2, ml: 3 }}>Tipos</Typography>
                        <Divider />
                        <List>
                            {types.map((type) => <ListItem key={type.type.name} >{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</ListItem>)}
                        </List>
                        <Typography variant="h4" sx={{ mt: 2, ml: 3 }}>Habilidades</Typography>
                        <Divider />
                        <List>
                            {abilities.map((ability) => <ListItem key={ability.ability.name} >{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) }</ListItem>)}
                        </List>
                    </Item>
                </Grid>


                <Grid item xs={12} md={4}>
                    <Item>
                        <Typography variant="h4" sx={{ mt: 2, ml: 3 }}>Stats</Typography>
                        <Divider />
                        <List>
                            {stats.map((stat) => <ListItem key={stat.stat.name} >{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:  +<b>{stat.base_stat}</b></ListItem>)}
                        </List>

                    </Item>
                </Grid>


            </Grid>
        </Container>
            
        </>
    )
}