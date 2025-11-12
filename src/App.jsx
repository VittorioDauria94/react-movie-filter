import Header from "./components/Header";
import Main from "./components/Main";
import films from "./assets/data/films";
import FilmCard from "./components/FilmCard";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [filteredArray, setFilteredArray] = useState(films);
  const [allFilms, setAllFilms] = useState(films);
  const [searchGenre, setSearchGenre] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [filmUrl, setFilmUrl] = useState("");
  const [filmGenre, setFilmGenre] = useState("");

  const genres = [...new Set(allFilms.map((film) => film.genre))];

  useEffect(() => {
    if (searchGenre === "") {
      setFilteredArray(allFilms);
    } else {
      setFilteredArray(allFilms.filter((film) => film.genre === searchGenre));
    }
  }, [searchGenre, allFilms]);

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

  function handleSubmit(e) {
    e.preventDefault();

    if (filmTitle.trim() === "") return;
    if (filmGenre.trim() === "") return;
    if (filmUrl.trim() === "") return;

    const nextId = Math.max(...allFilms.map((film) => film.id)) + 1;

    const newFilm = {
      id: nextId,
      title: filmTitle,
      genre: filmGenre,
      src: filmUrl,
    };

    setAllFilms((prev) => [...prev, newFilm]);
    setFilmTitle("");
    setFilmGenre("");
    setFilmUrl("");
    setSearchGenre("");
  }

  return (
    <>
      <Header />
      <Main
        card={cards}
        options={selectOptions}
        value={searchGenre}
        onChange={(e) => setSearchGenre(e.target.value)}
        form={
          <Form
            submit={handleSubmit}
            title={filmTitle}
            setTitle={(e) => setFilmTitle(e.target.value)}
            genre={filmGenre}
            setGenre={(e) => setFilmGenre(e.target.value)}
            url={filmUrl}
            setUrl={(e) => setFilmUrl(e.target.value)}
          />
        }
      />
    </>
  );
}

export default App;
