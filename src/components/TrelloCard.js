import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-bottom: 8px;
`

const TrelloCard = ({text,id,index}) => {
    console.log("Calling the card component");
    return (
        <CardContainer>
            <Draggable draggableId={String(id)} index={index}>
                {(provided) => (
                    <div ref = {provided.innerRef}
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                            <Card>
                                <CardContent style={styles.card}>
                                <Typography gutterBottom style={styles.content}>
                                    {text}
                                </Typography>
                                </CardContent>
                            </Card>
                        
                    </div>
                )}
            </Draggable>
        </CardContainer>
        );
};

const styles = {
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