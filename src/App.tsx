import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";


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

      <Button onClick={()=>handleIncrement(1)}>Increment by 1</Button>
      <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>

    </>
  )
}

export default App
