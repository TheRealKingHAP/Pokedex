import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {closeModal} from '../../../features/modal/modalSlice'
import styled from "styled-components"
import CustomButton from "../button/CustomButton"

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 100;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transition: all ease-in-out 150ms;

`
const ModalCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 769px) {
        width: 25rem;
        height: max-content;
    }
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0px 0px 10px #e2e2e2;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 80%;

    & img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

`

const TextContainer = styled.div`
    text-align: center;

    & h5{
        font-weight: bold;

    }

`
export default function PokemonModal({img, title, subtitle, visible}){
    const {isActive} = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    return(
        <ModalContainer visible={isActive} onClick={() => {dispatch(closeModal())}}>
            <ModalCard>
                <ImageContainer>
                    <img src={img} alt="shiny" />
                </ImageContainer>
                <TextContainer>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </TextContainer>
                <CustomButton active={true} onClick={() => {dispatch(closeModal())}}>Close</CustomButton>
            </ModalCard>
        </ModalContainer>
    )
}