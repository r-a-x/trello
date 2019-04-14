import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const TrelloCard = ({text}) => {
    console.log("Calling the card component");
    return (
        <Card style={styles.container}>
            <CardContent style={styles.card}>
            <Typography gutterBottom style={styles.content}>
                {text}
            </Typography>
            </CardContent>
        </Card>
        );
};

const styles = {
    container:{
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,45,66,.25)',
        cursor: 'pointer',
        display: 'block',
        marginBottom: '8px',
    },
    card:{
        margin:'0px',
        padding:'6px 8px 2px 8px',
        minHeight:'24px',
    },
    content:{
        padding:'0px',
        minHeight:'20px',
        border:'0px 0px 4px 0px',
    }
}

export default TrelloCard;