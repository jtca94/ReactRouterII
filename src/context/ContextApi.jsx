import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const DataContext = createContext();

export default function DataContextProvider({ children }) {
    //Lógica de la app

    // Evita el renderizado del useEffect antes de que se haya seleccionado pokemon, previniendo que haga un fetch con un params undefined
    const [show, setShow] = useState(false);
    // Data de los pokemones, nombre y url
    const [data, setData] = useState([]);
    // Valor del input del usuario
    const [value, setValue] = useState(null);
    // Navegación programática al input del usuario
    const navigate = useNavigate();
    // Función que se ejecuta al hacer click en el botón
    const HandleClick = () => {
        navigate(`/pokemons/${value.toLowerCase()}`);
        setShow(true);
    }
    // Devuelve a false el estado de show para que no se renderice el componente de que contiene el useEffect al renderizar nuevamente la pagina pokemones
    const handleShow = () => {
        setShow(false);
    }


    // Fetch de la data de los pokemones
    const getData = async () => {

        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const data = await response.json();
            setData(data.results);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <DataContext.Provider value={{ data, value, setValue, HandleClick, handleShow, show }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext);