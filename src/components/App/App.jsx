import React, { useState } from "react";
import { GoBack } from "../GoBack/GoBack";
import { PageInfo } from "../PageInfo/PageInfo";
import { CreateCard } from "../CreateCard/CreateCard";
import { ShowCard } from "../ShowCard/ShowCard";
import { Advice } from "../Advice/Advice";
import { AddButton } from "../AddButton/AddButton";
import "./App.css";

export const App = () => {
  const [cardExist, setCardExist] = useState(false);
  return (
    <div className="App">
      <GoBack returnName="Manicure" />
      <PageInfo />

      {!cardExist && <CreateCard />}

      {!!cardExist && <ShowCard />}

      <Advice />
      {!cardExist && <AddButton onAdd={setCardExist}/>}
    </div>
  );
};
