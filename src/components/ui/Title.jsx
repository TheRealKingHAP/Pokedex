import styled from "styled-components"

const TitleStyles = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: #1f2937
`

export const Title = ({children}) => {
    return (
        <TitleStyles>
            {children}
        </TitleStyles>
    )
}