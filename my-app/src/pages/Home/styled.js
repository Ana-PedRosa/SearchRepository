import styled from "styled-components";
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const FlexContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: .25rem 0 0 0.25rem;
    font-family: sans-serif;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const Button = styled.button`
    height: 2.6rem;
    padding: 0 12px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: #29220C;
    }
`

export const ErroMsg = styled.span`
    display: block;
    font-size: 0.5 rem;
    font-family: sans-serif;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`