import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const TrelloCard = ({text}) => {
    console.log("Calling the card component");
    return (
        <Card style={styles.container}>
            <CardContent>
            <Typography  color="textSecondary" gutterBottom>
                {text}
            </Typography>
            </CardContent>
        </Card>
        );
};

const styles = {
    container:{
        backgroundColor: 'white',
        marginBottom:'5px',
        height: '50px'
    }
}

export default TrelloCard;