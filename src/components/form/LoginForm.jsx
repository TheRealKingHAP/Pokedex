import styled from "styled-components"
import TextInput from "../ui/input/TextInput"
import { useState } from "react"
import CustomButton from "../ui/button/CustomButton"


const FormStyle = styled.form`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ErrorText = styled.p`
    color: red;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
`
function LoginForm () {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!inputData.email){
            setError((prev) => 'Ingrese un correo electrónico valido')
            return
        }
        if(!inputData.password){
            setError((prev) => 'Ingrese una contraseña valida')
            return
        }
        try {
            setError((prev) => '');
            localStorage.setItem('email', inputData.email);
            localStorage.setItem('password', inputData.password);
            window.location.reload();
        } catch (error) {
            console.log('Lo sentimos hubo un error')
            return
        }
    }
    return (
        <FormStyle onSubmit={handleSubmit}>
            <TextInput placeholder={'Correo electrónico'} value={inputData.email} type={'text'} required={true} autoComplete={'email'} onChange={(e) => setInputData((prev) => ({...inputData, email: e.target.value}))}/>
            <TextInput placeholder={'Contraseña'} value={inputData.password} type={'password'} required={true} autoComplete={'user-password'} onChange={(e) => setInputData((prev) => ({...inputData, password: e.target.value}))}/>
            <CustomButton active={true}>Iniciar sesión</CustomButton>
            {error ? <ErrorText>{error}</ErrorText> : null}
        </FormStyle>
    )
}

export default LoginForm