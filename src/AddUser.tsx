import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface NewUser {
  firstName: string;
  lastName: string;
  age: number;
}

export default function AddUser() {
  const queryClient = useQueryClient();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const mutation = useMutation({
    mutationFn: async (newUser: NewUser) => {
      const res = await axios.post("https://dummyjson.com/users/add", newUser);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ firstName, lastName, age: Number(age) });
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div>
      <h1>Hello guys</h1>
      
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">➕ Add</button>
      </form>

  {mutation.status === "pending" && <p>Adding user...</p>}
  {mutation.status === "error" && <p>Error aya 😢</p>}
  {mutation.status === "success" && <p>User added successfully 🎉</p>}
    </div>
  );
}
