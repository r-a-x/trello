import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({listID, title,cards}) => {
    console.log("In the TrelloList method");
    return (
        <div style={styles.container}>
            <div style = {styles.title.container}>
                <div style = {styles.title.content}>
                    {title}
                </div>
            </div>
            <div style = {styles.trelloList}>
                {cards.map( card => (
                        <TrelloCard key = {card.id} text = {card.text} />
                    )
                )}
            </div>
        <TrelloActionButton listID = {listID}/>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: '3px',
        boxSizing: 'borderBox',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        width: '272px',
        marginRight: '8px',
        boxSizing: 'border-box'
    },
    title: {
        container:{
            margin:'0px',
            minHeight:'38px',
            display:"flex",
            alignItems: 'center'
        },
        content:{
            padding:'0px 0px 0px 16px',
            fontWeight:'bold'            
        }
    },
    trelloList: {
        padding:'0px 4px 0px 4px',
        margin:'0px 4px 0px 4px',
        width:'256px'
    }
}
export default TrelloList;