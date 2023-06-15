import Users from "../components/Users";

async function fetchUsers() {
  const res = await fetch("http://localhost:8000/jugadores/");
  const data = await res.json();
  console.log(data);
  return data;
}

async function IndexPage() {
  const jugadores = await fetchUsers();

  return (
    <div>
      <Users jugadores={jugadores} />
    </div>
  );
}

export default IndexPage;
