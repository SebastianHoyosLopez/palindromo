import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const palindromo = (cadena) => {
    const palabra = cadena.split("");
    const reverse = palabra.reverse();
    setWord("");
    return cadena === reverse.join("")
      ? console.log("si es")
      : console.log("no es");
  };

  return (
    <div className="container my-5">
      <h1>Comprobar palindromo</h1>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button className="mt-5" onClick={() => palindromo(word)}>
        probar
      </button>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
