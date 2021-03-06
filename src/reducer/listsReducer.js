import {ACTION_CONSTANTS} from '../action';

var cardID = 6;
var listIDT = 2;

const initialState = [
    {
        title:"1",
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
        title:"2",
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
                if ( `list-${idx}` == listID){
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
                 draggableId,
                 type
             } = action.payload;
             if ( type === "list" ){
                 var sourceList = newState[source.index];
                 if(source.index > destination.index){
                    newState.splice(source.index, 1);
                    newState.splice(destination.index,0,sourceList);
                 }
                 else{
                    newState.splice(destination.index+1, 0, sourceList);
                    newState.splice(source.index, 1);
                 }
                 return newState;
             }
             if( source.droppableId == destination.droppableId ){
                var list = newState.find( list => list.id === source.droppableId );
                const sourceCard = list.cards[source.index];
                if(source.index > destination.index){
                    list.cards.splice(source.index, 1);
                    list.cards.splice(destination.index,0, sourceCard);
                 }
                 else{
                    list.cards.splice(destination.index+1, 0, sourceCard);
                    list.cards.splice(source.index, 1);
                 }
             }
             else{
                //  The drop is happening in some other list
                var destinationList =  newState.find( list => list.id === destination.droppableId);
                var sourceList = newState.find( list => list.id === source.droppableId);

                destinationList.cards.splice(destination.index, 0, sourceList.cards[source.index]);
                sourceList.cards.splice(source.index, 1);
             }
             return newState;
        default:
            return state;
    }
}

export default listsReducer;