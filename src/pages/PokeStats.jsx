import { Container } from "@mui/system";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";


export default function PokemonStats() {
    const params = useParams();
    
    const [pokemon, setPokemon] = useState(null);
    console.log(params.name)
   
    

    const getPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const data = await response.json();
            setPokemon(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemon();
    }, [params])

    
    return(
        <Container>
            {pokemon === null ? null : <PokemonCard pokemon={pokemon} /> }
        </Container>
    )
}