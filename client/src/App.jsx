import React, { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data.characters);
        setCharacters(data.characters);
      })
      .catch((err) => console.err("Failed to fetch", err));
  }, []);

  return (
    <div>
      <div>
        {characters.map((cha) => (
          <div key={cha.id}>
            <h3>{cha.name}</h3>
            <img src={cha.images[0]} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
