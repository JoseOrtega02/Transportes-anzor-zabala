import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default Error;
