import Link from "next/link";

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#00FFFF"}}>
    <div className="container">
      <Link href="/" className="navbar-brand" style={{ color: "black"}}>
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/about" className="nav-link" style={{ color: "black"}}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link" style={{ color: "black"}}>
              Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

