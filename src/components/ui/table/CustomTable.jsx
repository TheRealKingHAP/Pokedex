import React, { useState } from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'
import PokemonModal from '../modals/PokemonModal'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../features/modal/modalSlice'
import {AiOutlineLoading} from 'react-icons/ai';
import LoadingIcon from '../icons/LoadingIcon'
import {useNavigate} from 'react-router-dom'
const TableContainer = styled.div`
    width: 75vw;
    height: 60vh;
    background-color: #f3f4f6;
    border-radius: 1rem;
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
`
const TableStyles = styled.table`
    width: 100%;
    &,th, td{
        padding: 1rem;
        border-collapse: collapse;
    }


`
const TBody = styled.tbody`
    text-align: center; 

    & tr{
        transition: all ease-in-out 150ms;

    }
    & tr:nth-child(even){
        background-color: #e5e7eb;
    }
    & tr:hover{
        background-color: #f9fafb;
        cursor: pointer;
    }
    
`
const THead = styled.thead`
    background-color: #e5e7eb;
    position: sticky;
    top: 0;
    text-align: center;

`
const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
function CustomTable({data, isLoading, error}) {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    if(data.length <= 0 || error){
        return (
            <TableContainer>
                <IconContainer>
                    <p>No hay datos que mostrar</p>
                </IconContainer>
            </TableContainer>
        )
    }

    const handleOpenModal = (index) => {
        setSelectedPokemon((prev) => index)
        dispatch((openModal()));
    }
    const handleRowClick = (id) => {
        navigate(`/pokemon/${id}`)
    }
    return (
        <TableContainer>
            {isLoading ?
                <IconContainer>
                    <LoadingIcon />
                </IconContainer>
                :
                
            <TableStyles>
                <THead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Vista Previa</th>
                        <th>Tipos</th>
                        <th>Habilidades</th>
                        <th>Variantes</th>
                    </tr>
                </THead>
                <TBody>
                    {data.map((value, index) => (
                        <tr key={value.id}>
                            <td onClick={() => handleRowClick(value.id)}>{value.id}</td>
                            <td onClick={() => handleRowClick(value.id)}>{value.name}</td>
                            <td onClick={() => handleRowClick(value.id)}><img src={value.image} /></td>
                            <td onClick={() => handleRowClick(value.id)}>{value.type.map((type, index) => (
                                <p key={index}>{type}</p>
                            ))}</td>
                            <td onClick={() => handleRowClick(value.id)}>
                                {value.ability.map((ability, index) => (
                                    <p key={index}>{ability}</p>
                                ))}
                            </td>
                            <td><CustomButton active={true} onClick={(e) => handleOpenModal(index)}>Shiny</CustomButton></td>
                        </tr>
                    ))}
                </TBody>
                <PokemonModal img={data[selectedPokemon].variants.shiny} title={data[selectedPokemon].name} subtitle={'Shiny'} visible={openModal}/>
            </TableStyles>
            }
        </TableContainer>
    )
}

export default CustomTable