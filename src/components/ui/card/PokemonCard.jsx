import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../features/modal/modalSlice'

const Card = styled.div`
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
        font-weight: bold;
        font-size: 18px;
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
function PokemonCard({name, types, image, abilities, handleOpenModal}) {
  return (
    <Card>
        <CardImage>
            <img src={image} alt={name} />
        </CardImage>
        <TextContainer>
            <h4>{name}</h4>
            <AbilitySection>
                {abilities.map((ability, index) => (
                    <p key={index}>{ability}</p>
                    
                ))}
            </AbilitySection>
            <div style={{
                display: 'flex',
                width: '90%',
                justifyContent: 'space-between'
            }}>
                <TypeSection>
                    {types.map((type, index) => (
                        <p key={index}>{type}</p>
                    ))}
                </TypeSection>
                <CustomButton>Shiny</CustomButton>
            </div>
        </TextContainer>
    </Card>
  )
}

export default PokemonCard