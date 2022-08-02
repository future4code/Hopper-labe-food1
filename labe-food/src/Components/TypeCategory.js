import React, { useState } from 'react'
import { BASE_URL } from '../constants/url.js'
import { useGetRest } from '../hooks/useGetRest'
import styled from 'styled-components'

const Categorias = styled.ul`
  width: auto;
  max-width: 100vw;
  text-transform: uppercase;
  overflow: overlay;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    list-style-type: none;
    margin: 0 5px;
    font-size: 16px;
    :active {
      color: #e86e5a;
    }
  }
`


const TypeCategory = ({ setSelect }) => {
  const [infoRestaurante] = useGetRest(`${BASE_URL}/restaurants`)

  const onCategory = category => {
    setSelect(category)
  }
  const categorias = infoRestaurante.map((info, i) => (
    <li key={info.id} onClick={() => onCategory(info.category, i)}>
      <strong>{info.category}</strong>
    </li>
  ))

  return <Categorias>{categorias}</Categorias>
}

export default TypeCategory
