import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const SpinAnimation = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(359deg)
    }
`
const IconContainer = styled.div`
    height: 2rem;
    width: 2rem;

    & svg{
        width: 100%;
        height: 100%;
        animation: ${SpinAnimation} 1s infinite;

    }

`

function LoadingIcon() {
  return (
    <IconContainer>
        <AiOutlineLoading />
    </IconContainer>
  )
}

export default LoadingIcon