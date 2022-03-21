import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../store/counter";
const Counter = () => {
  const count = useSelector((state) => state.entities.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="">
      <button
        className="btn btn-primary"
        aria-label="Increment value"
        onClick={() => dispatch(incremented())}
      >
        Increment
      </button>
      <span className="p-3">{count}</span>
      <button
       className="btn btn-danger"
        aria-label="Decrement value"
        onClick={() => dispatch(decremented())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
