import Link from "next/link";

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link href="/" className="navbar-brand">
        Jugadores
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              Equipo
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link">
              Director tecnico
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
