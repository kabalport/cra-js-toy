import React from "react";
import MemoCard from "../molecules/MemoCard";
import Container from "@mui/material/Container";

const MemoList = ({ memos }) => {
    return (
        <Container>
            {memos.map((memo) => (
                <MemoCard key={memo.id} title={memo.title} body={memo.body} />
            ))}
        </Container>
    );
};

export default MemoList;
