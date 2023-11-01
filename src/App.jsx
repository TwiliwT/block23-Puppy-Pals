import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      {" "}
      <div className="names-container">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && (
        <div className="puppy-container">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          <button
            className="close-button"
            onClick={() => {
              setFeatPupId(null);
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default App;
