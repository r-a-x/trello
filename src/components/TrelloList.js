import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable} from "react-beautiful-dnd";
import styled from 'styled-components';

const TrelloListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height: 100%;
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

const TrelloList = ({listID, title,cards}) => {
    console.log("In the TrelloList method");
    return (
        <Droppable droppableId = {String(listID)}>
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
                    <TrelloActionButton listID = {listID}/>
                    {provided.placeholder}
                </TrelloListContainer>
            ) 
            }
        </Droppable>
    );
};

export default TrelloList;