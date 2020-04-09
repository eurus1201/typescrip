import * as React from "react";
import { TextField } from "@material-ui/core";

interface props {
onSubmit : ()=> void;
}

export const MyPhoto : React.FC<props> = ()=>{
    return <TextField />
}