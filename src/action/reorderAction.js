import ACTION_CONSTANTS from './constant';

const reorderAction = (source, destination, draggableId, type) => {
    return {
        type: ACTION_CONSTANTS.REORDER_ACTION,
        payload: {
            source,
            destination,
            draggableId,
            type
        }
    }
}

export default reorderAction;