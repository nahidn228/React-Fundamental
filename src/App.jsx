import { useState, useEffect } from "react";
import "./App.css";
import Rendering from "./Components/Rendering/Rendering";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log("hello");
  }, [count]);

  // const information = {
  //   message: "secrete",
  //   phone: "01300000",
  // };

  const handleState = () => {
    setCount(count + 1);
  };
  const handleState1 = () => {
    setCount(count - 1);
  };

  return (
    <>

    <Rendering></Rendering>
      <h1>Hello React</h1>

      <h3>use State value: {count} </h3>

      <button onClick={handleState}>Increase</button>
      <button onClick={handleState1}>Decrease</button>

      {/* <Products info={information}></Products> */}
    </>
  );
}

export default App;
