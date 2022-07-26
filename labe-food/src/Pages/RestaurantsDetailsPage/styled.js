import styled from "styled-components"

export const TelaRestaurante = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
`

export const NomeApp = styled.p`
    border-bottom: 1px solid lightgray;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
`

export const NomeCategoria = styled.p`
    border-bottom: 1px solid;
    width: 100%;
    padding-bottom: 10px;
    font-size: 16px;
`

export const BoxNomeQtd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BotaoQtd = styled.button`
    background-color: white;
    border-color: #FF3B30;
    border-radius: 0 10px 0 10px;
    padding: 10px 13px;
    font-size: 16px;
    color: #FF3B30;
    margin: 0;
    
`

export const BotaoAdd = styled.button`
    background-color: white;
    border-radius: 10px 0 10px 0;
    height: 35px;
    width: 120px;
    font-size: 14px;
    bottom: 0;
    margin: 0;
`