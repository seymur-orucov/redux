import { useDispatch, useSelector } from "react-redux";
import { addCashAction, deleteCashAction } from "../vanillaRedux/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../vanillaRedux/customerReducer";
import { fetchCustomers } from "../asyncActions/customerAction";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const { cash } = useSelector((state) => state.cash);
  const { customers } = useSelector((state) => state.customers);

  const addCash = (value) => {
    dispatch(addCashAction(value));
  };

  const deleteCash = (value) => {
    dispatch(deleteCashAction(value));
  };

  const addCustomer = (value) => {
    const customer = {
      id: Date.now(),
      name: value,
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
    console.log(id);
  };

  return (
    <div className="App">
      <div>
        <h1>{cash}</h1>
        <button onClick={() => addCash(+prompt("Add cash"))}>Add cash</button>
        <button onClick={() => deleteCash(+prompt("Delete cash"))}>
          Delete cash
        </button>
      </div>
      <hr />
      <div>
        <button onClick={() => addCustomer(prompt("Name of customer"))}>
          Add customer
        </button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Get customers
        </button>
        {customers.length ? (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id} onClick={() => removeCustomer(customer.id)}>
                {customer.name}
              </li>
            ))}
          </ul>
        ) : (
          <h1>Not customer</h1>
        )}
      </div>
    </div>
  );
};

export default ReduxExample;
