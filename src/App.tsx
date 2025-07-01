import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const dispatch = useAppDispatch();
  // const counter = useSelector((state) => state.counter);
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter Application with Redux</h1>
      <button onClick={() => handleIncrement(5)} className="increment">
        Increment by 5
      </button>
      <button onClick={() => handleIncrement(1)} className="increment">
        Increment
      </button>
      <div className="count">{count}</div>
      <button onClick={handleDecrement} className="decrement">
        Decrement
      </button>
    </div>
  );
}

export default App;
