import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);

  const palindromo = () => {
    const palabra = word.split("");
    const reverse = palabra.reverse();
    setWord("");
    setWords([
      ...words,
      { name: word, esPalindromo: word === reverse.join("") ? true : false },
    ]);
  };

  return (
    <div className="container my-5">
      <h1>Comprobar palindromo</h1>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button className="mt-5" onClick={() => palindromo()}>
        probar
      </button>
      <div>
        <div>
          {words.map((wordtext, index) => (
            <div key={index}>
              <h3>{wordtext.name}</h3>
              <div>
                Resultado:
                {wordtext.esPalindromo && wordtext.name ? (
                  <div>Si es un palindromo</div>
                ) : (
                  <div>No un palindromo</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
