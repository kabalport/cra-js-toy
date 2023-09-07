// ... (기존 import 문)

import {Button, Container} from "@mui/material";
import useMemos from "../store";
import {useState} from "react";
import {useParams} from "react-router-dom";

const EditPage = () => {
    const { id } = useParams();
    const memo = useMemos((state) => state.memos.find((m) => m.id === parseInt(id, 10)));
    const updateMemo = useMemos((state) => state.updateMemo); // 추가된 부분
    const [formData, setFormData] = useState({ title: memo?.title || '', body: memo?.body || '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateMemo(memo.id, formData); // 수정된 부분
    };

    return (
        <Container>
            {/* ... (기존 폼 코드) */}
            <Button type="submit" variant="contained" color="primary">
                Update Memo // 수정된 부분
            </Button>
        </Container>
    );
};

export default EditPage;
