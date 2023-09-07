import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import HomePage from "./pages/HomePage";
import PlayerPage from "./pages/PlayerPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route index element={<HomePage />} />
                    <Route path="player" element={<PlayerPage />} />
                </Route>
                <Route path="/admin" element={<MainTemplate />}>
                    <Route index element={<HomePage />} />
                    <Route path="player" element={<PlayerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
