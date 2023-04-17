import React from 'react'
import MainLayout from '../../components/ui/layout/MainLayout'
import { useParams, useNavigate} from 'react-router-dom'
import usePokemons from '../../hooks/usePokemons'
import LoadingIcon from '../../components/ui/icons/LoadingIcon'
import CustomButton from '../../components/ui/button/CustomButton';
import styled from 'styled-components'

const PokemonHeader = styled.div`
    width: 80vw;
    height: 50vh;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px #cfcfcf ;
    @media (min-width: 769px) {
        width: 24rem;
        height: 24rem;
    }
    & img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    `
const PokemonDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    & .section:nth-child(odd){
        margin-bottom: 3rem;
    }
    @media (min-width: 769px) {
        width: 65%;
        flex-direction: row;
        justify-content: space-between;
        
        & div:nth-child(odd){
            margin: 0rem;
        }
    }
    
    h4{
        font-size: 18px;
    }
    padding: 1rem;
`
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    & .detail:nth-child(odd){
        margin-bottom: 3rem;
    }
`
const Detail = styled.div`
    border: 1px solid #4b5563;
    padding: 1rem;
    text-align: left;
    width: 80vw;
    height: 10rem;
    overflow: hidden;
    @media (min-width: 769px) {
        width: 40rem;
        height: 10rem;
        & p{
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
    }
    & p{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .typeContainer{
        display: flex;
        
    }
    .typeContainer p {
        margin-right: 0.5rem;
        font-weight: bold;
    }
`
const AbilityDetail = styled.div`
    border: 1px solid #4b5563;
    padding: 1rem;
    text-align: left;
    width: 80vw;
    height: 10rem;
    overflow: auto;
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
    @media (min-width: 769px) {
        width: 40rem;
        height: 10rem;
    }
    & p{
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .typeContainer{
        display: flex;
        
    }
    .typeContainer p {
        margin-right: 0.5rem;
        font-weight: bold;
    }
`
const MovesContainer = styled.div`
    border: 1px solid #4b5563;
    padding: 1rem;
    text-align: left;
    width: 80vw;
    height: 25rem;
    overflow: auto;
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
    @media (min-width: 769px) {
        width: 20rem;
        height: 25rem;
    }
    & p{
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .typeContainer{
        display: flex;
        
    }
    .typeContainer p {
        margin-right: 0.5rem;
        font-weight: bold;
    }
`
const MovesDetailContainer = styled.div`
    display: flex;
    flex-direction: column;

    & h5{
        font-size: 16px;
        margin: 0px;
    }
    
    & p{
        font-weight: 700;
        color: #9ca3af;
    }

    & .detailBox{
        border-bottom: 1px solid black;
        margin-bottom: 1rem;
    }

`
function Pokemon() {
    const {pokemonId} = useParams()
    const {pokemons, isLoading, error} = usePokemons(pokemonId, 0);
    const navigate = useNavigate()
    if(pokemons.length <= 0 || isLoading){
        return (
            <MainLayout>
                <LoadingIcon />
            </MainLayout>
        )
    }
    return (
        <MainLayout>
            <PokemonHeader>
                <img src={pokemons[0].variants.default} alt={pokemons[0].name} />
            </PokemonHeader>
            <PokemonDetailContainer>
                <DetailContainer className='section'>
                    <Detail className='detail'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <h4>Nombre: {pokemons[0].name}</h4>
                            <div className='typeContainer'>
                                {pokemons[0].type.map((type, index) => (
                                    <p key={index}>{type}</p>
                                ))}
                            </div>
                        </div>
                        <p>
                            Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Detail>
                    <AbilityDetail className='detail'>
                        <h4>Habilidades</h4>
                        {pokemons[0].ability.map((ability, index) => (
                            <p key={index}><strong>{ability}</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        ))}
                    </AbilityDetail>

                </DetailContainer>
                <MovesContainer className='section'>
                    <h4>Movimientos</h4>
                    <div className='moveBox'>
                        {pokemons[0].moves.map((move, index) => (
                            <MovesDetailContainer className='moveDetailBox' key={index}>
                                <h5>{move}</h5>
                                <div className='detailBox' style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                    }}>
                                    <p>Poder</p>
                                    <p>Precisión</p>
                                    <p>Tipo</p>
                                    </div>
                                    <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                    }}>
                                    <p>100</p>
                                    <p>100</p>
                                    <p>Normal</p> 
                                    </div>
                                </div>
                            </MovesDetailContainer>
                        ))}

                    </div>
                </MovesContainer>
            </PokemonDetailContainer>
            <CustomButton active={true} onClick={() => navigate('/')}>Home</CustomButton>
        </MainLayout>
    )
}

export default Pokemon