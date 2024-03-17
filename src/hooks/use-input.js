import { useReducer, useState } from "react";

const initialInputState = {
   inputValue: "",
   wasTouched: false
}

const inputStateReducer = (state, action) => {
   if (action.type === "INPUT_CHANGE") {
      return { inputValue: action.value, wasTouched: state.wasTouched };
   }
   if (action.type === "INPUT_BLUR") {
      return { inputValue: state.inputValue, wasTouched: true };
   }
   if (action.type === "RESET_INPUT") {
      return { inputValue: "", wasTouched: false };
   }
   return initialInputState;
}

const useInput = (validateValueFunc) => {

   const [inputState, dispatchAction] = useReducer(inputStateReducer, initialInputState);

   const isInputValid = validateValueFunc(inputState.inputValue);
   const isInputInvalid = !isInputValid && inputState.wasTouched;

   const inputChangeHandler = (event) => {
      dispatchAction({ type: "INPUT_CHANGE", value: event.target.value });
      // dispatchAction({type:"INPUT_BLUR"});
   }

   const inputLostFocusHandler = () => {
      dispatchAction({ type: "INPUT_BLUR" })
   }

   const resetValues = () => {
      dispatchAction({ type: "RESET_INPUT" });
   }

   return {
      inputValue: inputState.inputValue,
      isInputValid,
      isInputInvalid,
      inputChangeHandler,
      inputLostFocusHandler,
      resetValues
   }
};



export default useInput;