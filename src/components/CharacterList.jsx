import { useEffect, useState } from "react";
import { Character } from "./Character";

export const NavPage = ({ page, setPage }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p className="mb-0">Page: {page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
};

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div key={character.id} className="col-md-4">
              <Character
                id={character.id}
                name={character.name}
                image={character.image}
                location={character.location.name}
                status={character.status}
                type={character.type}
                gender={character.gender}
                origin={character.origin.name}
              />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
