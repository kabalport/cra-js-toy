import React from "react";
import Button from "@mui/material/Button";

const ButtonAtom = ({ label, onClick }) => {
    return <Button onClick={onClick}>{label}</Button>;
};

export default ButtonAtom;
