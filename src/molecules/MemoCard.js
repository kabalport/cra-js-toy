import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MemoCard = ({ title, body }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{body}</Typography>
            </CardContent>
        </Card>
    );
};

export default MemoCard;
