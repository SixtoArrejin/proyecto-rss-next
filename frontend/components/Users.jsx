"use client";
import { useRouter } from "next/navigation";
import './User.css'

function Users({ jugadores }) {
  const router = useRouter();

  return (
    <div>
      {/* <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <div>
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul> */}

      <div className="user-cards-container">
        {jugadores.map((jugador, index) => (
          <div className="card" style={{ width: "18rem", cursor: "pointer" }} key={index} onClick={() => router.push(`/users/${jugador.id}`)}>
              <img src={jugador.imagen} className="card-img-top" alt="La escaloneta" />
              <div className="card-body">
                <h5 className="card-title">{jugador.nombre_apellido}</h5>
                <p className="card-text">
                  Juega de {jugador.posicion}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Camiseta: </li>
                <li className="list-group-item">Altura: </li>
                <li className="list-group-item">Edad: </li>
                <li className="list-group-item">Goles: </li>
              </ul>
              {/* <div className="card-body">
                <a href="#" className="card-link">
                  Another link
                </a>
              </div> */}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Users;
