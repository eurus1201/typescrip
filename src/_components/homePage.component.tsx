import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MyCard from "./card.component";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface IUser {
  email: string;
  firstname: string;
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
}

export const PhotoList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [card, setCards] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCards({ [event.target.name]: !!event.target.checked });
    // setCards(true);
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
      <FormControlLabel
        control={
          <Switch checked={true} onChange={handleChange} name="cardMod" />
        }
        label="Secondary"
      />
      {card ? (
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
