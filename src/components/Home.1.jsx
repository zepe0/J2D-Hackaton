import { getCharacters } from "rickmortyapi";

import { useEffect, useState } from "react";
import { scrol } from "../logic/scrol";

function Home() {
  const [data, setData] = useState([]);
  const [datain, setInData] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getCharacters().then((initialData) => {
      console.log("Initial data", initialData);
      setInData(initialData.data.results);
      setPages(initialData.data.info.next);
    });
  }, [data, pages]);
  const fo = scrol(pages)
  console.log(fo)

  if (datain.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <ul className="characters">
        {datain.map((character, index) => (
          <li key={index}>
            <div className="flipper">
              <div className="front">
                <h2>{character.name}</h2>
                <img src={character.image} alt={`${character.name}`} />
              </div>
              <div className="back">
                <article>{character.status}</article>
                <article>{character.gender}</article>
                <article>{character.location.name}</article>
                <article>{character.type}</article>
                <article>{character.species}</article>
                <article>
                  <p>{character.origin.name}</p>
                </article>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
