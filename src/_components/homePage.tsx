import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MyCard from "./card";
import Switch from "@material-ui/core/Switch";
import IUser from "../_interfaces/user";


export const PhotoList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [card, setCards] = useState({cardMod:true});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCards({...card,[event.target.name]:!(card.cardMod) });
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users").then(res => {
      res.json().then(usersRes => {
        const data: IUser[] = usersRes.data;
        setUsers(data);
      });
    });
  }, []);

  return (
    <div>
       <Switch checked={card.cardMod} onChange={handleChange} name="cardMod"  inputProps={{ 'aria-label': 'change show style' }} />
      {card.cardMod ? (
        <div>
          <h3>THE CARD STYLE</h3>
          <Grid container spacing={10} style={{ padding: "24px" }}>
            {!!users &&
              users.map(user => (
                <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                  <MyCard
                    key={user.id}
                    email={user.email}
                    firstname={user.first_name}
                    lastname={user.last_name}
                    avatar={user.avatar}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        <div>
          <h3>THE LIST STYLE</h3>
          <Grid>
            {!!users &&
              users.map(user => (
                <div key={user.id}>
                  <div>
                    <span>it is email:{user.email}</span>
                  </div>
                  <div>
                    <span> it is firstname:{user.first_name}</span>
                  </div>
                  <div>
                    <span> it is lastname:{user.last_name}</span>
                  </div>
                  <div>
                    <span> it is avatar:{user.avatar}</span>
                  </div>
                </div>
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
};
