import TarjetaJugador from "../components/Jugadores";

async function fetchUsers() {
  const res = await fetch("http://localhost:8000/jugadores", {
    cache: 'no-store'
  });
  const data = await res.json();
  console.log(data)
  return data;
}

async function Home() {
  const jugadores = await fetchUsers();

  return (
    <div>
      <TarjetaJugador jugadores={jugadores} />
    </div>
  );
}

export default Home;