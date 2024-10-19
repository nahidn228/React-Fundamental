import { useState } from "react";
import Health from "./Health";
import Service from "./Service";

const Rendering = () => {
  const [status, setstatus] = useState(false);
  const handleState = () => {
    setstatus(!status);
  };
  console.log(status);
  return (
    <div>
      <h3>Rendering:{status ? <Health></Health> : <Service></Service>}</h3>

      <button onClick={handleState}>Toggle</button>
    </div>
  );
};

export default Rendering;
