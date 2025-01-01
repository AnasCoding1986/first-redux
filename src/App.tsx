import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state:RootState) => state.counter);

  const handleIncrement = (amount:number)=> {
    dispatch(increment(amount))
  }

  const handleDecrement = ()=> {
    dispatch(decrement())
  }

  return (
    <>

      <h1>Counter with Redux</h1>

      <button onClick={()=>handleIncrement(1)}>Increment by 1</button>
      <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>

    </>
  )
}

export default App
