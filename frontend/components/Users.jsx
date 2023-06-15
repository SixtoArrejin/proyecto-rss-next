"use client";
import { useRouter } from "next/navigation";

function Users({ jugadores }) {
  const router = useRouter();

  return (
    <div>
      <ul className="list-group">
        {jugadores.map((jugador) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={jugador.id}
            onClick={() => router.push(`/users/${jugador.id}`)}
          >
            <div>
              <h5>
                {jugador.id}. {jugador.nombre_apellido} {jugador.numero_camiseta}
              </h5>
              <p>Altura: {jugador.altura} Posicion: {jugador.posicion}</p>
            </div>
            <img src={jugador.imagen} style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
