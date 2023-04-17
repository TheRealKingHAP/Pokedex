import styled from "styled-components"
import LoginForm from "../../components/form/LoginForm"
import MainLayout from "../../components/ui/layout/MainLayout"

const Logo = styled.img`
    object-fit: contain;
    width: 250px;
    height: 92.51px;
    @media (min-width: 769px){
        width: max-content;
        height: max-content;
    }
`

function Login () {
    
    return (
        <MainLayout>
            <Logo src={'/pokedexLogo.png'} alt="pokedexLogo"/>
            <LoginForm />
        </MainLayout>
    )
}

export default Login