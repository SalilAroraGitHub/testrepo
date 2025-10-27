import Users from "./Users";
import AddUser from "./AddUser";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query + DummyJSON Demo 🚀</h1>
      <AddUser />
      <Users />
    </div>
  );
}
