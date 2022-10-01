import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../toolkitSlice/toolkitSlice";

const ToolkitExample = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count);

  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default ToolkitExample;
