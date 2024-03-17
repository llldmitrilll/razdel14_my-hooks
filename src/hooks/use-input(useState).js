import { useState } from "react";

const useInput = (validateValueFunc) => {

   const [inputValue, setInputValue] = useState("");
   const [wasInputTouched, setWasInputTouched] = useState(false);

   const isInputValid = validateValueFunc(inputValue);
   const isInputInvalid = !isInputValid && wasInputTouched;

   const inputChangeHandler = (event) => {
      setInputValue(event.target.value);
      setWasInputTouched(false);
   }

   const inputLostFocusHandler = () => {
      setWasInputTouched(true);
   }

   const resetValues = () => {
      setInputValue("");
      setWasInputTouched(false);
   }

   return {
      inputValue,
      isInputValid,
      isInputInvalid,
      inputChangeHandler,
      inputLostFocusHandler,
      resetValues
   }
};



export default useInput;