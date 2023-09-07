import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
// 템플릿에서 레이아웃설정을 한다.

const MainTemplate = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default MainTemplate;
