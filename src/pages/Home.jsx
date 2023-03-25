import React from 'react'
import Flores from '../assets/images/Flores.jpg'

const Home = () => {
    return (

        <div className='text-center mt-5'>
            <h2>Bienvenidos a Invernadero Manzano</h2>
            <p>Donde puedes encontrar todas las plantas para tu hogar</p>
            <img  className='mb-5' src={Flores} alt="" />

        </div>

    )
}

export default Home
