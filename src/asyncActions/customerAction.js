import { addManyCustomerAction } from "../vanillaRedux/customerReducer";

export const fetchCustomers = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomerAction(json)));
  };
};
