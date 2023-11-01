import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <div className="app">
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
