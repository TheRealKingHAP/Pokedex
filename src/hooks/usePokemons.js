import { useEffect, useState } from "react";

function usePokemons(name, page){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);
    const controller = new AbortController()

    const getPokemons = async (page) => {
        setIsLoading((prev) => true)
        setIsError((prev) => false)
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
        if(!res.ok){
            setIsLoading((prev) => false)
            setIsError((prev) => 'Hubo un error')
            return
        }
        let pokemonList = await res.json()
        let promises = []
        let finalPokemons = []
        pokemonList.results.map((pokemon) => {
            let res = fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.name).then(res => res.json())
            if(!res.ok){
                setIsLoading((prev) => false)
                setIsError((prev) => 'Hubo un error')
            }
            promises.push(res);
        })
        Promise.all(promises).then((results) => {
            const pokemon = results.map(data => ({
                name: data.name,
                id: data.id,
                image: data.sprites["front_default"],
                variants: {
                    shiny: data.sprites.other['official-artwork'].front_shiny,
                    default: data.sprites.other['official-artwork'].front_default
                },
                type: data.types.map(type => type.type.name),
                ability: data.abilities.map(ability => ability.ability.name),
                moves: data.moves.map(move => move.move.name)
            }))
            finalPokemons.push(...pokemon)
            setPokemons((prev) => finalPokemons);
            setIsLoading((prev) => false)
            setIsError((prev) => false)

        })
    }

    const getSinglePokemon = async (name) => {
        setIsLoading((prev) => true)
        setIsError((prev) => false)
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!res.ok){
            setIsLoading((prev) => false)
            setIsError((prev) => 'Hubo un error')
            return []
        }
        let pokemon = await res.json()
        setPokemons((prev) => [{
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites['front_default'],
            variants: {
                shiny: pokemon.sprites.other['official-artwork'].front_shiny,
                default: pokemon.sprites.other['official-artwork'].front_default
            },
            type: pokemon.types.map(type => type.type.name),
            ability: pokemon.abilities.map(ability => ability.ability.name),
            moves: pokemon.moves.map(move => move.move.name).slice(0, 10)
        }]);
        setIsLoading((prev) => false);
        setIsError((prev) => false)

    }

    useEffect(() => {
        if(name){
            getSinglePokemon(name)
        }
        if(!name){
            getPokemons(page)
        }

        return() => controller.abort('Cancel Request')
    }, [name, page])

    return {pokemons, isLoading, error}
}

export default usePokemons