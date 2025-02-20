// Este componente es una vista que muestra la lista de personajes

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Personajes = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      {characters.map(({ id, name, status, species, image }) => {
        return (
          <Link to={`/character/${id}`} key={id}>
            <div>
              <img src={image} alt="" />
              <h3>{name}</h3>
              <p>{status}</p>
              <p>{species}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Personajes;
