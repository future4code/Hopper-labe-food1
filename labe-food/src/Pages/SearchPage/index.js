import React, { useState, useEffect } from 'react'
import Search from '../../Components/Search.js'
import axios from 'axios'
import CardRestaurant from '../../Components/CardRestaurant'
import styled from 'styled-components'
import Header from '../../Components/Header.js'
import { BASE_URL } from '../../constants/url.js'

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const SearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [ setSearchTitle] = useState('')

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true)
      await axios
        .get(`${BASE_URL}/restaurants`, {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
        .then(response => {
          setPosts(response.data.restaurants)
          console.log(response.data.restaurants)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
        })
    }
    loadPost()
  }, [])

  return (
    <>
      <Header />
      <StyledBox>
        <br />
        <Search onChange={e => setSearchTitle(e.target.value)} />

        <br />
        <h3>Busque por nome de restaurante</h3>
        {loading ? (
          <h4>Carregando ... </h4>
        ) : (
          posts
            // .filter((value) => {
            //   if (searchTitle === '') {
            //     return value;
            //   } else if (
            //     value.title.toLowerCase().includes(searchTitle.toLowerCase())
            //   ) {
            //     return value;
            //   }
            // })
            .map(item => (
              <CardRestaurant key={item.id}>
                {item.logoUrl}
                {item.name} {item.shipping}
                {item.deliveryTime}
              </CardRestaurant>
            ))
        )}
      </StyledBox>
    </>
  )
}

export default SearchPage
