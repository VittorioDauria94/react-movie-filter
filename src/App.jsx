import Header from "./components/Header";
import Main from "./components/Main";
import films from "./assets/data/films";
import FilmCard from "./components/FilmCard";
import { useState, useEffect } from "react";

function App() {
  const [filteredArray, setFilteredArray] = useState(films);
  const [searchGenre, setSearchGenre] = useState("");

  const genres = [...new Set(films.map((film) => film.genre))];

  useEffect(() => {
    if (searchGenre === "") {
      setFilteredArray(films);
    } else {
      const filtered = films.filter((film) => film.genre === searchGenre);
      setFilteredArray(filtered);
    }
  }, [searchGenre]);

  const cards = filteredArray.map((film) => (
    <FilmCard
      key={film.id}
      title={film.title}
      src={film.src}
      genre={film.genre}
    />
  ));

  const selectOptions = genres.map((genre) => (
    <option key={genre} value={genre}>
      {genre}
    </option>
  ));

  return (
    <>
      <Header />
      <Main
        card={cards}
        options={selectOptions}
        value={searchGenre}
        onChange={(e) => setSearchGenre(e.target.value)}
      />
    </>
  );
}

export default App;
