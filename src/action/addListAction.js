import ACTION_CONSTANTS from './constant';

const addListAction =  title => {
    return {
        type: ACTION_CONSTANTS.ADD_LIST_ACTION,
        payload: {
            title
        }
    }
}

export default addListAction;