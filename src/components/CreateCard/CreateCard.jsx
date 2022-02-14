import React from "react";
import "./CreateCard.css";
export const CreateCard = (props) => {
  const onTitularNameWrite = (evt) => {
    props.setTitularName(evt.currentTarget.value);
  };
  const onNumberCardWrite = (evt) => {
    props.setNumberCard(evt.currentTarget.value);
    if((evt.currentTarget.value.length / 4 === 1) || (evt.currentTarget.value.length / 4 === 2) || (evt.currentTarget.value.length / 4 === 3)) {
      console.log('es multiplo de 4');
    }
  };
  const onExpDateWrite = (evt) => {
    props.setExpDate(evt.currentTarget.value);
  };
  const onCvvWrite = (evt) => {
    props.setCvv(evt.currentTarget.value);
  };
  let errorMessage;
  if (props.errorInCreateCard) {
    errorMessage = (
      <p className="advice__text">
        Hubo un error, intenta colocar los datos correctamente.
      </p>
    );
  } else {
    errorMessage = null;
  }
  return (
    <>
      <form
        className={`create-card ${
          props.errorInCreateCard && "create-card--error"
        }`}
      >
        <h4 className="create-card__title">NUEVA TARJETA</h4>
        <img src="#" alt="Marca" className="create-card__card-name" />
        {/* nombre del titular */}
        <div className="create-card__section-container">
          <label className="create-card__label">TITULAR DE LA TARJETA</label>
          <input
            className="create-card__input create-card__input--1"
            placeholder="Nombre que aparece en la tarjeta"
            onChange={onTitularNameWrite}
            value={props.titularName}
            type="text"
          ></input>
        </div>
        {/* 16 digitos */}
        <div className="create-card__section-container">
          <label className="create-card__label">NO. DE TARJETA</label>
          <input
            className="create-card__input create-card__input--2"
            placeholder="16 dígitos de su tarjeta"
            onChange={onNumberCardWrite}
            value={props.numberCard}
          ></input>
        </div>
        <div className="create-card__2inputs">
          {/* fecha de expiracion */}
          <div className="create-card__section-container">
            <label className="create-card__label">FECHA EXP</label>
            <input
              className="create-card__input create-card__input--3"
              placeholder="MM/YYYY"
              onChange={onExpDateWrite}
              value={props.expDate}
            ></input>
          </div>
          {/* cvv */}
          <div className="create-card__section-container">
            <label className="create-card__label">CVV</label>
            <input
              className="create-card__input create-card__input--4"
              placeholder="..."
              onChange={onCvvWrite}
              value={props.cvv}
            ></input>
          </div>
        </div>
      </form>
      {errorMessage || <p></p>}
    </>
  );
};
