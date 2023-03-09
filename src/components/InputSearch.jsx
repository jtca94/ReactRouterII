
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from "@mui/system";
import { Button } from '@mui/material';
import { useDataContext } from '../context/ContextApi';
import { useState } from 'react';

export default function InputSearch() {

    const { data } = useDataContext();
    const name = data.map((i) => i.name.charAt(0).toUpperCase() + i.name.slice(1));
    const [value, setValue] = useState(null);


    return (
        <Container sx={{textAlign: 'center'}}>
            <Autocomplete

                disablePortal
                id="combo-box-demo"
                options={name}
                sx={{ my: 3, width: 300, mx: 'auto' }}
                renderInput={(params) => <TextField {...params} label="Pokemon" />}
                
            />
            <Button 
                variant="contained" 
                sx={{width: 300}}
                color="secondary" 
                >Buscar</Button>

        </Container>
    );
}

