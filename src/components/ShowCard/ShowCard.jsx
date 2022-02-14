import React from "react";
import "./ShowCard.css";
export const ShowCard = ({
  deleteCard,
  titularName,
  numberCard,
  expDate,
  id,
}) => {
  return (
    <>
      <div className="show-card">
        <div className="show-card__section-container show-card__section-container--1">
          <h4 className="show-card__title">TARJETA DE NOMINA</h4>
          <img src="#" alt="Marca de tarjeta" />
        </div>

        <div className="show-card__section-container show-card__section-container--2 ">
          <h4 className="show-card__numbers">●●●● ●●●● ●●●●</h4>
          <p className="show-card__info">{`${numberCard[12]}${numberCard[13]}${numberCard[14]}${numberCard[15]}`}</p>
        </div>

        <div className="create-card__2inputs">
          <div className="show-card__section-container show-card__section-container--3">
            <h4 className="show-card__title">TITULAR DE LA TARJETA</h4>
            <p className="show-card__info">{titularName}</p>
          </div>

          <div className="show-card__section-container show-card__section-container--4">
            <h4 className="show-card__title">VENCE HASTA</h4>
            <p className="show-card__info">{`${expDate[0]}${expDate[1]}/${expDate[2]}${expDate[3]}`}</p>
          </div>
        </div>
      </div>
      <button className='add-button' onClick={() => deleteCard(id)}>BORRAR</button>
    </>
  );
};
