import { createContext, useContext, useEffect, useState } from "react";


export const DataContext = createContext();

export default function DataContextProvider({ children }) {
    //Lógica de la app



    const [data, setData] = useState([]);

   
    

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
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext);