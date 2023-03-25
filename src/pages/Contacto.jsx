import React from 'react'

const Contacto = () => {
  return (
    <div className='container'>
      <div className="mb-3 mt-5">
        <h1 className='mb-5'>Contáctanos <span>🌻</span></h1>
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu correo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" >¿Qué necesitas?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Ingresa tu comentario, sugerencia o cotización'></textarea>
            </div>
    </div>
  )
}

export default Contacto
