import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const endpoint = "https://api.github.com/users";

export default (props) => {
  // // Вызов ошибки CORS
  // (async ()=>{
  //   const fetchYoutube = await fetch("https://www.youtube.com/watch?v=9QneqUhCVtU");
  //   if (fetchYoutube.ok){
  //     console.log("it never works")
  //   }
  // })();

  const [users, setUsers] = useState([
    {
      id: 0,
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
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar src={user.avatar_url} />
          </ListItemAvatar>
          <ListItemText>{user.login}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
};
