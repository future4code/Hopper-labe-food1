import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContatex';

const GlobalState = (props) => {

    const [restaurants, setRestaurants] = useState([])
    const [restaurantDetail, setRestaurantDetail] =useState({})
    const [profile, setProfile] = useState({})
    const [address, setAddress] = useState({})
    const [activeOrder, setActiveOrder] = useState({})
    const [orderHistory, setOrderHistory] = useState([])
    const [cart, setCart] = useState([])

    const states = {
restaurants,
restaurantDetail,
profile,
address,
activeOrder,
orderHistory,
cart

};

    const setters = {
        setRestaurants,
        setRestaurantDetail,
        setProfile,
        setAddress,
        setActiveOrder,
        setOrderHistory,
        setCart


    }


    return <GlobalStateContext.Provider value={{ setters, states }}>
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState