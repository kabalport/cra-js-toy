import React from "react";
import Container from "@mui/material/Container";
import MemoList from "../organisms/MemoList";

const MemoTemplate = ({ memos }) => {
    return (
        <Container>
            <MemoList memos={memos} />
        </Container>
    );
};

export default MemoTemplate;
