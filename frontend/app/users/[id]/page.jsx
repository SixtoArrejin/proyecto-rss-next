async function getUser(id) {
  const res = await fetch(`http://localhost:8000/jugadores/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function UserPage({ params }) {
  const jugador = await getUser(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img
              src={jugador.imagen}
              alt={jugador.nombre_apellido}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="card-body text-center">
            Jugador
            <h2>
              {jugador.nombre_apellido}
            </h2>
            <p>Camiseta: {jugador.numero_camiseta}</p>
          </div>
          <div className="card-body">
            <h4>Descripción: </h4>
            <p>{jugador.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
