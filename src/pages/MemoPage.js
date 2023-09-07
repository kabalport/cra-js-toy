import { useParams, useNavigate } from "react-router-dom";
import useStore from "../store";
import { Container, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";

function MemoPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const memo = useStore((state) => state.selectedMemo);
    const selectMemo = useStore((state) => state.selectMemo);
    const updateSelectedMemo = useStore((state) => state.updateSelectedMemo);

    useEffect(() => {
        selectMemo(Number(id));
    }, [id, selectMemo]);

    const handleUpdate = () => {
        if (memo && memo.title) {
            updateSelectedMemo(memo.title);
            navigate('/');
        }
    };

    return (
        <Container>
            {memo ? (
                <div>
                    <h1>{memo.title}</h1>
                    <TextField
                        label="Edit Memo"
                        variant="outlined"
                        value={memo.title}
                        onChange={(e) => updateSelectedMemo(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </div>
            ) : (
                <p>Memo not found</p>
            )}
        </Container>
    );
}

export default MemoPage;
