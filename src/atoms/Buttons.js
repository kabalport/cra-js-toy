import { Button as MUIButton } from "@mui/material";

const Button = ({ children, onClick }) => {
    return <MUIButton onClick={onClick}>{children}</MUIButton>;
};

export default Button;
