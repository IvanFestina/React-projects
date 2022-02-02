import s from "./counter.module.css";
import {Typography} from "@mui/material";
import React from "react";

export const IncorrectValue = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <Typography fontWeight={"bold"} fontSize={20} color={'rgba(118, 5, 5, 0.94)'}>Incorrect
                    value!</Typography>
            </div>
        </div>
    )
}