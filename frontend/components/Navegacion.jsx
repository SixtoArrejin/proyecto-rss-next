import Link from "next/link";

export const Navegacion = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li>
            {" "}
            <Link href="/" className="nav-link">
              Jugadores
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/equipo" className="nav-link">
              Equipo
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/director-tecnico" className="nav-link">
              Director técnico
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
