import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearInput: 'CLEAR INPUT',
  consentChange: 'CONSENT CHANGE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearInput:
      return {
        ...action.initialState,
      };
    case actionTypes.consentChange:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialState) => {
  const [formValues, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.id,
      value: e.target.value,
    });
  };

  const handleClearValues = () => {
    dispatch({ type: actionTypes.clearInput, initialState });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleConsentChange = () => {
    dispatch({ type: actionTypes.consentChange });
  };

  return {
    formValues,
    handleInputChange,
    handleClearValues,
    handleThrowError,
    handleConsentChange,
  };
};
