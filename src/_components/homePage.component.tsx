import React, { useEffect, useState } from "react";
import { Grid, } from "@material-ui/core";
import MyCard from "./card.component";

interface props {
    email: string;
    firstname: string;
    id?: number;
    avatar?: URL;
    [key: string]: any;
}

export const MyPhoto: React.FC = () => {
    const [users, setUsers] = useState<[]>();

  

    useEffect(() => {
        async function fetchData() {
            setUsers(
                await fetch('https://reqres.in/api/users')
                    .then(res => res.json())
                    .then(res => res.data)
                    .catch(err => console.log(err, 'error...'))
            )
        };
        fetchData()
    }, [])


    return (
        <div>
            <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
            <Grid container spacing={10}
                style={{ padding: '24px' }}
            >
                {users.map(users =>
                    <Grid key={users.id} item
                        xs={12} sm={6} md={4} lg={4} xl={3}
                    >
                        <MyCard
                            key={users.id} email={users.email} firstname={users.first_name}
                            lastname={users.last_name} avatar={users.avatar}
                        />
                    </Grid>)}
            </Grid>
        </div>
    )
}