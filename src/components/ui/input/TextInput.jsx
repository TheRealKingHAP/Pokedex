import styled from "styled-components"

const InputStyle = styled.input`
    font-size: 16px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.6rem;
    border: 1px solid #777777;
    border-radius: 0.4rem;
    color: #1f2937;
    
    &:focus{
        outline: 1px solid #0C0C0C;
    }
`
function TextInput ({value, onChange, type, required, autoComplete, placeholder}) {
        
    return (
        <InputStyle placeholder={placeholder} autoComplete={autoComplete} required={required} type={type} value={value} onChange={onChange} />
    )
}

export default TextInput