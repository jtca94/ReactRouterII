
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from "@mui/system";
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import { Alert } from '@mui/material';
import { useDataContext } from '../context/ContextApi';


export default function InputSearch() {

    const { data, setValue, value, HandleClick, inputFill, setInputFill } = useDataContext();
    const name = data.map((i) => i.name.charAt(0).toUpperCase() + i.name.slice(1));



    return (
        <Container sx={{ textAlign: 'center' }}>
            <Autocomplete
                isOptionEqualToValue={(option, value) => option == value}
                disablePortal
                id="combo-box-demo"
                options={name}
                sx={{ my: 3, width: 300, mx: 'auto' }}
                renderInput={(params) => <TextField {...params} label="Pokemon" />}
                value={value}
                onChange={(e, newValue) => setValue(newValue)}

            />
            <Tooltip title="Búsqueda">
                <Button
                    onClick={HandleClick}
                    variant="contained"
                    sx={{ width: 300 }}
                    color="secondary"
                >Buscar
                </Button>
            </Tooltip>
            {inputFill && <Alert 
                sx={{ mt: 3 }}
                severity="warning"
                onClose={() => setInputFill(false)}>Debes seleccionar un pokémon o escribir un nombre</Alert>}
            
        </Container>
    );
}

