const defaultState = {
  cash: 0,
};

const ADD_CASH = "ADD_CASH";
const DELETE_CASH = "DELETE_CASH";

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case DELETE_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const addCashAction = (payload) => ({ type: ADD_CASH, payload });
const deleteCashAction = (payload) => ({ type: DELETE_CASH, payload });

export { cashReducer, addCashAction, deleteCashAction };
