import { Container } from "@mui/system";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Skeletons from "../components/Skeletons";
import PokemonCard from "../components/PokemonCard";


export default function PokemonStats() {
    const params = useParams();
    // fake promise solo para probar loading y mostrar skeletons
    const fakePromise = new Promise((resolve) => { setTimeout(() => resolve(), 1000) });
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        try {
            setLoading(true)
            // uso de fakePromise
            await fakePromise;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const data = await response.json();
            setPokemon(data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemon();
    }, [params])


    return (
        <Container>
            {loading === true ? <Skeletons /> : <PokemonCard pokemon={pokemon} />}
        </Container>
    )
}