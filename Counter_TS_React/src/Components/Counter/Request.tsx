import s from "./counter.module.css";
import {Typography} from "@mui/material";
import React from "react";

export const Request = () => {

    return (
        <div className={s.wrapper}>
                <div className={s.box}>
                    <Typography fontWeight={"bold"} fontSize={20} color={'white'}> Enter values end press 'set'</Typography>
                </div>
            </div>
    )
}