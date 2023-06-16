import TarjetaJugador from "../components/TarjetaJugador.jsx";

async function fetchJugadores() {
  const res = await fetch("http://localhost:8000/jugadores", {
    cache: 'no-store'
  });
  const data = await res.json();
  console.log(data)
  return data;
}

async function Index() {
  const jugadores = await fetchJugadores();

  return (
    <div>
      <TarjetaJugador jugadores={jugadores} />
    </div>
  );
}

export default Index;