import {ACTION_CONSTANTS} from '../action';

var cardID = 4;
var listIDT = 2;

const initialState = [
    {
        title:"Last Episode",
        id:0,
        cards:[
            {
                id:0,
                text:" The task 1"
            },
            {
                id:1,
                text:"The task 2dflkdsjfdsajlkjfd sajflkdsalkfjldsaflkjds afjlkdjflka  fjlddfjdsjlkfdsfjdslfdsafj dsfdsjflkdsjffdsfds ffdfdfdsfddf"
            },
            {
                id:2,
                text:" The task 1"
            },
            {
                id:3,
                text:"The task 2"
            }
        ]
    },
    {
        title:"Next Episode",
        id:1,
        cards:[
            {
                id:0,
                text:" The task for the next episode"
            },
            {
                id:1,
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
                id: listIDT,
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
                 id: cardID,
                 text: text
             }
             cardID += 1;
             newState = [];
             state.map( (list,idx) => {
                if ( idx == listID){
                    newState.push({
                        id:listID,
                        title:list.title,
                        cards:[...list.cards, card]
                    })
                } else {
                    console.log("Printing the list over here", list);
                    newState.push({
                        id:idx,
                        title:list.title,
                        cards:[...list.cards]
                    })
                }
             })
             console.log(newState)
            return newState;
        default:
            return state;
    }
}

export default listsReducer;