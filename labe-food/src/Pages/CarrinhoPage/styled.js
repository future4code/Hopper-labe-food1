import styled from "styled-components"

export const TelaCarrinho = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
`

export const SessaoPg = styled.section`
    width: 90%;
    text-align: left;
    main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const NomePg = styled.p`
    border-bottom: 1px solid lightgray;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
`

export const FormaPg = styled.p`
    border-bottom: 1px solid black;
    width: 100%;
    padding-bottom: 5px;
`

export const FormCheck = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    label{
        padding-left: 10px;
        cursor: pointer;
    }
`

export const CheckPg = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
    ::before{
        content: '';
        width: 10px;
        height: 10px;
        background: black;
        border-radius: 50%;
        opacity: 0;
        transition: all 200ms ease-in-out;
        position: absolute;
    }
    :checked::before{
        opacity: 1;
    }
`

export const StyledAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.75rem;
    padding: 0 1rem;
    background-color: #eeeeee;
`