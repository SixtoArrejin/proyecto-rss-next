async function getUser(id) {
  const res = await fetch(`http://localhost:8000/jugadores/${id}`);
  const data = await res.json();
  console.log(data)

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
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="card-body text-center">
            User
            <h3>
              {jugador.id}. {jugador.nombre_apellido} {jugador.numero_camiseta}
            </h3>
            <p>Altura: {jugador.altura} Posicion: {jugador.posicion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
