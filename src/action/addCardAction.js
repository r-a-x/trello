import ACTION_CONSTANTS from './constant';

const addCardAction = (listID = 0, text) => {
    console.log("The text for the addCardAction is in the",listID, text);
    return {
        type: ACTION_CONSTANTS.ADD_CARD_ACTION,
        payload: {
            listID, text
        }
    }
}

export default addCardAction;