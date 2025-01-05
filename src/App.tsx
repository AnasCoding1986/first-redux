import Navbar from "./components/component/navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="container mx-auto p-5">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
