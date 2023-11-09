import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const endpoint = "https://api.github.com/users";

export default (props) => {
  const [users, setUsers] = useState([
    {
      login: "initial",
    },
  ]);
  const handleLoadUsers = async () => {
    const response = await fetch(endpoint);
    if (response.ok) {
      const fetchedUsers = await response.json();
      console.log(fetchedUsers);
      setUsers(fetchedUsers);
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleLoadUsers}>Загрузить пользователей</Button>
      {users.map((user) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.avatar_url} />
          </ListItemAvatar>
          <ListItemText>{user.login}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
};
