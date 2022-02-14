import { useState, useEffect } from 'react'

export const useLocalStorage = ({ itemName, initialValue = [] }) => {

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
      setItem(parsedItem);
    } catch (err) {
      console.log(err.message)
    }
  }, [])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (err) {
      console.log(err.message);
    }
  }

  return {
    item,
    saveItem,
  }
}
