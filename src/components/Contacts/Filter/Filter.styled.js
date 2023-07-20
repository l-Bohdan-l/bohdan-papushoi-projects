import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 20px;
    color: #000;

`

export const Input = styled.input`
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 20px;
    &:focus {
        outline: none;
        border-color: #0000ff;
        box-shadow: 0px 0px 10px 0px rgba(0,0,255,0.75);
    }
`

export const Wrapper = styled.div`
width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,255,0.75);
    }
`