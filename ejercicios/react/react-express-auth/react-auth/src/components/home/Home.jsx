
import {Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Bienvenid@ a The Bridge Auth</h1>

      <nav>
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/register">Registrarme</Link> 
      </nav>
    </>
  );
}
