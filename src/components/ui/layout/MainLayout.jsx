import styled from "styled-components"

const LayoutStyle = styled.div`
    height: max-content;
    @media (min-width: 769px) {
        height: max-content;
        padding-top: 1rem;
        padding-bottom: 0rem;
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
`

function MainLayout ({children}) {
    return (
        <LayoutStyle>
            {children}
        </LayoutStyle>
    )
}

export default MainLayout