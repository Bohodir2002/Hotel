import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Details2 from '../../components/Details.home/Details2'
import Header from '../../components/Header/Header'
import Servise from '../../components/Servise/Servise'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Servise/>
        <Details2/>
    </div>
  )
}

export default Home