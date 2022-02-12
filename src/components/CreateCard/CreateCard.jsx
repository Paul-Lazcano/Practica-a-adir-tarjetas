import React from 'react'
import './CreateCard.css'
export const CreateCard = () => {
  return (
    <form className="create-card">
      <h4 className="create-card__title">NUEVA TARJETA</h4>
      <img src="#" alt="Marca" className='create-card__card-name' />
      <div className="create-card__section-container">
        <label className="create-card__label">TITULAR DE LA TARJETA</label>
        <input className='create-card__input create-card__input--1' placeholder='Nombre que aparece en la tarjeta'></input>
      </div>
      <div className="create-card__section-container">
        <label className="create-card__label">NO. DE TARJETA</label>
        <input className='create-card__input create-card__input--2' placeholder="16 dígitos de su tarjeta"></input>
      </div>
      <div className="create-card__2inputs">
        <div className="create-card__section-container">
          <label className="create-card__label">FECHA EXP</label>
          <input className='create-card__input create-card__input--3' placeholder='MM/YYYY'></input>
        </div>
        <div className="create-card__section-container">
          <label className="create-card__label">CVV</label>
          <input className='create-card__input create-card__input--4' placeholder='...'></input>
        </div>
      </div>
    </form>
  )
}
