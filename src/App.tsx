import Users from "./Users";
//@ts-ignore
import AddUser from "./AddUser.tsx";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query + DummyJSON Demo 🚀</h1>
      <AddUser />
      <Users />
    </div>
  );
}
