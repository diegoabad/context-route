import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          padding: '0',
        }}>
        <li style={{ marginRight: '10px' }}>
          <NavLink
            className={(params) => {
              return params.isActive ? 'active' : null;
            }}
            to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}>
            Acerca
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}>
            Contacto
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                return isActive ? 'active' : null;
              }}>
              Perfil
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to="/character"
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}>
            Personajes
          </NavLink>
        </li>
      </ul>
      {user && <h2>{`Bienvenido ${user.userName}`}</h2>}
      {!user ? (
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? 'active' : null;
          }}>
          Iniciar Sesión
        </NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
