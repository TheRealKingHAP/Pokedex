import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PokemonCard from '../card/PokemonCard';
import { openModal } from '../../../features/modal/modalSlice';
import PokemonModal from '../modals/PokemonModal';
import CustomButton from '../button/CustomButton';
import LoadingIcon from '../icons/LoadingIcon';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20rem;
    grid-auto-rows: minmax(100px, auto);
    width: 75vw;
    height: 60vh;
    overflow: auto;
    padding: 1rem;
    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 1fr);

    }

    &::-webkit-scrollbar{
        width: 0.5rem;
        height: 0.5rem;

    }
    &::-webkit-scrollbar-thumb{
        border-radius: 0.5rem;
        background-color: #0004;
        visibility: hidden;
    }
    &:hover::-webkit-scrollbar-thumb{
        visibility: visible;
        
    }
`

const Card = styled.div`
    position: relative;
    height: 20rem;
    width: 15rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px #d8d8d8;
    display: flex;
    flex-direction: column;
    
`
const CardImage = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        object-fit: cover;
    }
`
const TextContainer = styled.div`
    text-align: left;
    margin-left: 1rem;
    & h4{
        margin: 0;
        font-weight: bold;
        font-size: 18px;
    }
    & div {
        z-index: 10;
        cursor: default;
    }
    & div button{
        height: max-content;
        width: max-content;
        padding: 0.5rem;
        z-index: 20;
    }
`
const TypeSection = styled.div`
    display: flex;
    font-weight: normal;
    font-size: 16px;
    & p{
        margin-right: 0.5rem;
    }
`
const AbilitySection = styled.div`
    display: flex;
    & p{
        margin-right: 0.5rem;
    }
`

const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LinkContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
`
function ListView({data, isLoading, error}) {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const dispatch = useDispatch()
    const handleOpenModal = (index) => {
        setSelectedPokemon((prev) => index)
        dispatch((openModal()));
    }
    if(data.length <= 0 || error && !isLoading){
        return (
            <IconContainer>
                <p>No hay datos que mostrar</p>
            </IconContainer>
        )
    }
    if(isLoading && !error){
        return(
            <IconContainer>
                <LoadingIcon />
            </IconContainer>
        )
    }
    return (
        <ListContainer>
            {data.map((pokemon, index) => (
                <Card key={index}>
                <CardImage>
                    <img src={pokemon.image} alt={pokemon.name} />
                </CardImage>
                <TextContainer>
                    <h4>{pokemon.name}</h4>
                    <AbilitySection>
                        {pokemon.ability.map((ability, index) => (
                            <p key={index}>{ability}</p>
                            
                        ))}
                    </AbilitySection>
                    <div style={{
                        display: 'flex',
                        width: '90%',
                        justifyContent: 'space-between'
                    }}>
                        <TypeSection>
                            {pokemon.type.map((type, index) => (
                                <p key={index}>{type}</p>
                            ))}
                        </TypeSection>
                        <CustomButton active={true} onClick={() => {handleOpenModal(index)}}>Shiny</CustomButton>
                    </div>
                </TextContainer>
                <LinkContainer>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <LinkContainer/>
                    </Link>
                </LinkContainer>
                </Card>
            ))}
            <PokemonModal img={data[selectedPokemon].variants.shiny} title={data[selectedPokemon].name} subtitle={'Shiny'} visible={openModal}/>
        </ListContainer>
    )
}

export default ListView