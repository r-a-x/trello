import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title,cards}) => {
    console.log("In the TrelloList method");
    return (
        <div style={styles.container}>
            <div style={styles.title}>{title}</div>
            {cards.map( card => (
                    <TrelloCard text = {card.text} />
                )
            )}
        </div>
    );
};

const styles = {
    container: {
        // backgroundColor: '#17394d',
        backgroundColor: 'grey',
        width: '200px',
        padding: '5px',
        marginRight: '8px'
    },
    title: {
        margin:'0px'
    }
}
export default TrelloList;
