import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "../atoms/Buttons";

const MovieCard = ({ title, url, onPlay }) => {
    return (
        <Card>
            <CardContent>
                <Typography>{title}</Typography>
                <Button onClick={() => onPlay(url)}>Play</Button>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
