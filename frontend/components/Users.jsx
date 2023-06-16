"use client";
import { useRouter } from "next/navigation";
import "./User.css";

function Users({ jugadores }) {
  const router = useRouter();

  return (
    <div>
      <div className="user-cards-container">
        {jugadores.map((jugador, index) => (
          <div
            className="card"
            style={{ width: "18rem", cursor: "pointer" }}
            key={index}
            onClick={() => router.push(`/users/${jugador.id}`)}
          >
            <img
              src={jugador.imagen}
              className="card-img-top"
              alt="La escaloneta"
            />
            <div className="card-body">
              <h4 className="card-title">{jugador.nombre_apellido}</h4>
              <p className="card-text">{jugador.posicion}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Camiseta: {jugador.numero_camiseta}
              </li>
              <li className="list-group-item">Altura: {jugador.altura}</li>
              <li className="list-group-item">Edad: {jugador.edad}</li>
              <li className="list-group-item">Goles: {jugador.goles} </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
