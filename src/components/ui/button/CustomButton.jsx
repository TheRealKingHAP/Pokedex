import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;
  padding: 1rem;
  width: max-content;
  background-color: ${props => props.active ? '#4b5563' : 'white'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.active ? 'transparent' : '#4b5563'};
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  z-index: 20;
`

export default function CustomButton({onClick, children, active}) {
  return (
    <ButtonStyle onClick={onClick} active={active}>
        {children}
    </ButtonStyle>
  )
}
