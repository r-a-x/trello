import ACTION_CONSTANTS from './constant';

const reorderAction = (source, destination, draggableId) => {
    return {
        type: ACTION_CONSTANTS.REORDER_ACTION,
        payload: {
            source,
            destination,
            draggableId
        }
    }
}

export default reorderAction;