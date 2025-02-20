import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detalle = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
    <div>
      <button
        disabled={id === '1'}
        onClick={() => {
          navigate(`/character/${parseInt(id) - 1}`);
        }}>
        Anterior
      </button>
      <button
        onClick={() => {
          navigate(`/character/${parseInt(id) + 1}`);
        }}>
        Siguiente
      </button>
      <h1>Detalle de {character.name}</h1>
      <img src={character.image} alt="" />
      <h3>{character.name}</h3>
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
};

export default Detalle;
