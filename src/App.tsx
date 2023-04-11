import { useEffect, useState } from "react";
import { ListItem } from "./componentes/ListItem";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.nama} age={user.age} />
      ))}
    </div>
  );
};
