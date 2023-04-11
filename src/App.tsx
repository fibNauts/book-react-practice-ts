import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};


export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //    axios.get("https://example.com/users").then((res) => {
    //      setUsers(res.data);
    //    });

    setUsers<User[]>([
      { id: 1, name: "nushida", age: 24, personalColor: "blue" },
      { id: 2, name: "sakioka", age: 28, personalColor: "pink" },
      { id: 3, name: "goto", age: 23, personalColor: "green" },
    ]);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.nama} age={user.age} />
      ))}
    </div>
  );
};
