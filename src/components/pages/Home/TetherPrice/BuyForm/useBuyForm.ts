import { useReducer } from 'react';

export const MAX_LIMITATION = 1000000;

interface I_Props {
  rate: number;
}

interface I_Values {
  SEND_AMOUNT: number;
  RECEIVE_AMOUNT: number;
}

const INITIAL_VALUES: I_Values = {
  SEND_AMOUNT: 0,
  RECEIVE_AMOUNT: 0,
};

const reducer = (
  state: I_Values,
  action: {
    type: string;
    value: number;
    rate: number;
  }
): I_Values => {
  switch (action.type) {
    case 'SEND':
      return {
        SEND_AMOUNT: action.value,
        RECEIVE_AMOUNT: action.value * action.rate || 0,
      };
      break;

    case 'RECEIVE':
      return {
        RECEIVE_AMOUNT: action.value,
        SEND_AMOUNT: Math.floor(action.value / action.rate) || 0,
      };
      break;
  }

  return {
    SEND_AMOUNT: 0,
    RECEIVE_AMOUNT: 0,
  };
};

const useBuyForm = ({ rate }: I_Props) => {
  const [values, dispatch] = useReducer(reducer, INITIAL_VALUES);

  const changeHandler = (val: string, side: 'SEND' | 'RECEIVE') => {
    dispatch({
      type: side,
      value: +val,
      rate,
    });
  };

  return { changeHandler, values };
};

export default useBuyForm;
