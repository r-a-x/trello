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
    switch(action.type) {
        default:
            return state;
    }
}

export default listsReducer;