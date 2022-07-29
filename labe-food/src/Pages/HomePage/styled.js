import styled from "styled-components"

export const TelaHome = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
`

export const Categorias = styled.ul`
  width: auto;
  max-width: 100vw;
  overflow: overlay;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  li{
    list-style-type: none;
    margin: 0 5px;
    font-size: 16px;
    :active{
        color: #e86e5a;
    }
  }
`
export const NomeApp = styled.p`
    border-bottom: 1px solid lightgray;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
`

export const Buscador = styled.input`
  background: url("https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-19-32.png") no-repeat 0px 5px;
  background-size: 24px;
  width: 80vw;
  border: solid 1px #c7c7cc;
  /* border-bottom: solid 1px #ccc; */
  padding: 10px 10px 10px 30px;
  outline: none;
`