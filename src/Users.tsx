import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get("https://dummyjson.com/users");
  return res.data.users;
};

export default function Users() {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error aya 😢</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.age} years)
          </li>
        ))}
      </ul>
    </div>
  );
}
