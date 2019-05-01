import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable, Draggable} from "react-beautiful-dnd";
import styled from 'styled-components';

const TrelloListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height:auto;
    width: 272px;
    margin-right: 8px;
    box-sizing: border-box;
`
const TitleContainer = styled.div`
    margin: 0px;
    min-height: 38px;
    display: flex;
    align-items: center;
`
const TitleContent = styled.div`
    padding:0px 0px 0px 16px;
    font-weight:bold;
`
const TrelloListContent = styled.div`
    padding: 0px 4px 0px 4px;
    margin: 0px 4px 0px 4px;
    width: 256px;
`

const TrelloList = ({listID, title,cards, index}) => {
    return (
        <Draggable index = {index} draggableId={listID}>
            { provided => (
                <div ref = {provided.innerRef}
                {...provided.draggableProps} 
                {...provided.dragHandleProps}>
                <Droppable droppableId = {String(listID)} >
                    { (provided) => (
                        <TrelloListContainer {...provided.droppableProps}  ref = {provided.innerRef}>
                            <TitleContainer>
                                <TitleContent>
                                    {title}
                                </TitleContent>
                            </TitleContainer>
                            <TrelloListContent>
                                {cards.map( (card,index)  => (
                                        <TrelloCard key = {card.id} text = {card.text} id = {card.id} index = {index}/>
                                    )
                                )}
                            </TrelloListContent>
                            {provided.placeholder}
                            <TrelloActionButton listID = {listID}/>
                        </TrelloListContainer>
                    ) 
                    }
                </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default TrelloList;