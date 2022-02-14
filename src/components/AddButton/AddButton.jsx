import React from "react";
import "./AddButton.css";
export const AddButton = ({
  setErrorInCreateCard,
  onAdd,
  titularName,
  setTitularName,
  numberCard,
  setNumberCard,
  expDate,
  setExpDate,
  cvv,
  setCvv,
}) => {
  const onSubmit = () => {
    if (!!titularName && !!numberCard && !!expDate && !!cvv) {
      onAdd(titularName, numberCard, expDate, cvv);
      setTitularName('');
      setNumberCard('');
      setExpDate('');
      setCvv('');
      setErrorInCreateCard(false);
    } else {
      setErrorInCreateCard(true);
    }
  };
  return (
    <button className="add-button" onClick={onSubmit}>
      AGREGAR
    </button>
  );
};
