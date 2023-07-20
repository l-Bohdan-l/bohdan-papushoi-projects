import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 170px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: #fff;
    
`

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
    &:focus {
        border: 1px solid #000;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`