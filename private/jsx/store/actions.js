import store from './store';
import * as consts from './consts';

export const vlangAddLink = link => (
    store.dispatch({
        type: consts.VLANG_ADD_LINK,
        link
    })
)

export const vlangRemoveLink = index => (
    store.dispatch({
        type: consts.VLANG_REMOVE_LINK,
        index
    })
)

export const vlangAddNode = node => (
    store.dispatch({
        type: consts.VLANG_ADD_NODE,
        node
    })
)

export const vlangRemoveNode = index => (
    store.dispatch({
        type: consts.VLANG_REMOVE_NODE,
        index
    })
)


export const vlangMoveNode = (index, newPosition)  => (
    store.dispatch({
        type: consts.VLANG_UPDATE_NODE_POSITION,
        index: index,
        position: newPosition

    })
)
