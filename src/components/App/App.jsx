import React, { useState } from "react";
import { GoBack } from "../GoBack/GoBack";
import { PageInfo } from "../PageInfo/PageInfo";
import { CreateCard } from "../CreateCard/CreateCard";
import { ShowCard } from "../ShowCard/ShowCard";
import { Advice } from "../Advice/Advice";
import { AddButton } from "../AddButton/AddButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./App.css";

export const App = () => {
  const { item: cards, saveItem: saveCard } = useLocalStorage("CARDS", []);
  const [titularName, setTitularName] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errorInCreateCard, setErrorInCreateCard] = useState(false);
  const addCard = (titularName, numberCard, expDate, cvv) => {
    const newCard = { titularName, numberCard, expDate, cvv, id: new Date() };
    const newCards = [...cards];
    Array.isArray(newCards) && newCards.push(newCard);
    saveCard(newCards);
  };

  const deleteCard = (id) => {
    const cardIndex =
      Array.isArray(cards) && cards.findIndex((card) => card.id === id);
    const newCards = [...cards];
    newCards.splice(cardIndex, 1);
    saveCard(newCards);
  };

  return (
    <div className="App">
      <GoBack returnName="Manicure" />
      <PageInfo />

      {!cards.length && (
        <CreateCard
          addCard={addCard}
          titularName={titularName}
          setTitularName={setTitularName}
          numberCard={numberCard}
          setNumberCard={setNumberCard}
          expDate={expDate}
          setExpDate={setExpDate}
          cvv={cvv}
          setCvv={setCvv}
          errorInCreateCard={errorInCreateCard}
        />
      )}

      {!!cards.length && (
        cards.map(item => (
        <ShowCard
          deleteCard={deleteCard}
          titularName={item.titularName}
          numberCard={item.numberCard}
          expDate={item.expDate}
          key={item.id}
          id={item.id}
        />
        ))
      )}
      <Advice />
      {!cards.length && (
        <AddButton
          onAdd={addCard}
          titularName={titularName}
          setTitularName={setTitularName}
          numberCard={numberCard}
          setNumberCard={setNumberCard}
          expDate={expDate}
          setExpDate={setExpDate}
          cvv={cvv}
          setCvv={setCvv}
          cardDoesExist={false}
          setErrorInCreateCard={setErrorInCreateCard}
        />
      )}

    </div>
  );
};
