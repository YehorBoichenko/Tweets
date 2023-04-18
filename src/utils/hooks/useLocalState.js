/**

A custom React Hook that uses localStorage to persist and retrieve data
@param {string} storageKey - The key to use to store/retrieve the value from localStorage
@param {*} defaultValue - The default value to return if no value is found in localStorage
@returns {array} - An array containing the current stored value and a function to update the stored value
*/
import { useState, useEffect } from "react";
export const useLocalState = (storageKey, defaultValue) => {
  // Initialize the state with the stored value or the default value if none is found
  const [storedValue, setStoredValue] = useState(() => {
    return JSON.parse(window.localStorage.getItem(storageKey)) ?? defaultValue;
  });
  // Update localStorage whenever the stored value changes
  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(storedValue));
  }, [storageKey, storedValue]);

  // Return an array containing the stored value and a function to update it
  return [storedValue, setStoredValue];
};
