import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

import type { User } from "./types/user";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //    axios.get("https://example.com/users").then((res) => {
    //      setUsers(res.data);
    //    });

    setUsers([
      { id: 1, name: "nushida", age: 24, personalColor: "blue" },
      { id: 2, name: "sakioka", age: 28, personalColor: "pink" },
      { id: 3, name: "goto", age: 23, personalColor: "green" },
      { id: 4, name: "sato", age: 20, hobbies: ["soccer", "photo"] },
    ]);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};
