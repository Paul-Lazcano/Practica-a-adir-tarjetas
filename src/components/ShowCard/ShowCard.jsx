import React from 'react'
import './ShowCard.css'
export const ShowCard = () => {
  return (
    <div className="show-card">
      <div className="show-card__section-container show-card__section-container--1">
        <h4 className="show-card__title">TARJETA DE NOMINA</h4>
        <img src="#" alt="Marca de tarjeta" />
      </div>

      <div className="show-card__section-container show-card__section-container--2 ">
        <h4 className="show-card__numbers">●●●● ●●●● ●●●●</h4>
        <p className="show-card__info">4398</p>
      </div>

      <div className="create-card__2inputs">
        <div className="show-card__section-container show-card__section-container--3">
          <h4 className="show-card__title">TITULAR DE LA TARJETA</h4>
          <p className="show-card__info">JUAN A. GOMEZ TORRES</p>
        </div>

        <div className="show-card__section-container show-card__section-container--4">
          <h4 className="show-card__title">VENCE HASTA</h4>
          <p className="show-card__info">08/2022</p>
        </div>
      </div>
    </div>
  )
}
