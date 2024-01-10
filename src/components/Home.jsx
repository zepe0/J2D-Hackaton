import { getCharacters } from "rickmortyapi";
import { useEffect, useState } from "react";

function Home() {
  const [datain, setInData] = useState([]);
  const [pages, setPages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [datain]);

  function fetchData() {
    console.log(datain, "data");
    if (datain.length > 0) {
      fetch(pages).then((response) => {
        response.json().then((newData) => {
         
          setInData([...datain, ...newData.results]);
          setPages(newData.info.next);
        });
      });
    } else {
      getCharacters().then((initialData) => {
        setInData(initialData.data.results);
        setPages(initialData.data.info.next);
        console.log("Initial data", datain);
      });
    }
  }

  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollY } = window;
    const { scrollHeight } = document.documentElement;
    if (innerHeight + scrollY >= scrollHeight) {
      fetchData();
    }
  };
  const handleSearch = () => {

    const filteredData = datain.filter((character) => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
   
    );
    return filteredData;
  };
  if (datain.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar personaje"
      />
      <ul>{handleSearch().map((item, index) => <div key={index} item={item} />)}</ul>
      <button onClick={fetchData}>Cargar mas personajes</button>

      <ul className="characters">
        {datain.map((character, index) => (
          <li key={index}>
            <div className="flipper">
              <div className="front">
                <h2>
                  {character.id}-{character.name}
                </h2>
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
