import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    width: 300px;
    gap: 20px;

`
export const FormInput = styled.input`  
    margin-top: 30px;
    padding: 10px;
    border:1px solid slategray;
    color: black;
    background-color: aliceblue;


`
export const FormTArea = styled.textarea` 
    padding: 10px;
    border:1px solid slategray;
    color: black;
    height: 150px;
    background-color: aliceblue;

`
export const FormButton = styled.button` 
    padding: 10px;
    border:1px solid slategray;
    background-color: aliceblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: lightslategray;

    }
`
