import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { NavLink } from 'react-router-dom';

import '../app.css'

const drawerWidth = 240;
const navItems = [{ name: 'Home', path: '/' }, { name: 'Pokemons', path: '/pokemons' }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    // drawer para versiones mobile
    const drawer = (
        <Box color='secondary' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                PokeDex!
            </Typography>
            <CatchingPokemonIcon sx={{ fontSize: 100, color: 'secondary.main' }} />
            <Divider />
            <List>
                {navItems.map(({ name, path }) => (

                    <ListItem key={name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <NavLink
                                className={({isActive}) => isActive ? 'activeMobile' : 'inactiveMobile'}
                                to={path}
                                style={{ textDecoration: 'none' }}>
                                <ListItemText primary={name} />
                            </NavLink>
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CatchingPokemonIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />    
                    <Typography
                        variant="h6"
                        
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        PokeDex
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ name, path }) => (

                            <Button key={name} >
                                <NavLink
                                    className={({isActive}) => isActive ? 'active' : 'inactive'}
                                    style={{ textDecoration: 'none' }}
                                    to={path}
                                    >
                                    {name}
                                </NavLink>
                            </Button>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#FFDE00' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />

        </Box>

    );
}


export default DrawerAppBar;