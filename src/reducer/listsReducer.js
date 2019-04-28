import {ACTION_CONSTANTS} from '../action';

var cardID = 6;
var listIDT = 2;

const initialState = [
    {
        title:"Last Episode",
        id:`list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:" The task 1"
            },
            {
                id:`card-${1}`,
                text:"The task 2dflkdsjfdsajlkjfd sajflkdsalkfjldsaflkjds afjlkdjflka  fjlddfjdsjlkfdsfjdslfdsafj dsfdsjflkdsjffdsfds ffdfdfdsfddf"
            },
            {
                id:`card-${2}`,
                text:" The task 1"
            },
            {
                id:`card-${3}`,
                text:"The task 2"
            }
        ]
    },
    {
        title:"Next Episode",
        id:`list-${1}`,
        cards:[
            {
                id:`card-${4}`,
                text:" The task for the next episode"
            },
            {
                id:`card-${5}`,
                text:"The task for the next episode"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    console.log("In the list Reducer", action.type);
    let newState = [];
    switch(action.type) {
        case ACTION_CONSTANTS.ADD_LIST_ACTION:
            newState = [...state];
            newState.push({
                id: `list-${listIDT}`,
                title: action.payload.title,
                cards:[]
            });
            listIDT += 1;
            return newState;
        case ACTION_CONSTANTS.ADD_CARD_ACTION:
            console.log("In the Add Card button reducer");
             const {listID, text} = action.payload
             console.log("The action of the object payload in the list Reducer is ");
             console.log(action.payload);
             const card = {
                 id: `card-${cardID}`,
                 text: text
             }
             cardID += 1;
             newState = [];
             state.map( (list,idx) => {
                if ( idx == listID){
                    newState.push({
                        id:`list-${listID}`,
                        title:list.title,
                        cards:[...list.cards, card]
                    })
                } else {
                    console.log("Printing the list over here", list);
                    newState.push({
                        id:`list-${idx}`,
                        title:list.title,
                        cards:[...list.cards]
                    })
                }
             })
             console.log(newState)
            return newState;
        case ACTION_CONSTANTS.REORDER_ACTION:
             newState = [...state];
             const {
                 source,
                 destination,
                 draggableId
             } = action.payload;
             if( source.droppableId == destination.droppableId ){
                var list = newState.find( list => list.id === source.droppableId );
                const cardTo = list.cards[source.index];
                list.cards.splice(source.index, 1, null);
                list.cards.splice(destination.index, 0, cardTo);
                const nullCardIndex = list.cards.indexOf( null);
                list.cards.splice(nullCardIndex, 1);
             }
             return newState;
        default:
            return state;
    }
}

export default listsReducer;