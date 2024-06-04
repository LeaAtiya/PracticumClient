import * as actionType from './Actions'

const initialState = {
    workers: [],
    worker: null,
    toShow: false,
}

const WorkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_WORKERS:
            return { ...state, workers: action.payload }
        case actionType.SET_WORKER:
            return { ...state, worker: action.payload }
        case actionType.ADD_WORKER: {
            const workers = [...state.workers];
            workers.push(action.payload);
            return { ...state, workers: action.payload }
        }
        case actionType.EDIT_WORKER: {
            const workers = [...state.workers];
            const findIndex = workers.findIndex(x => x.id == action.payload.id);
            workers[findIndex] = action.payload;
            return { ...state, workers }
        }
        case actionType.SET_TO_SHOW: {
            return { ...state, toShow: action.payload }
        }

        default: {
            return { ...state }
        }
    }
}
export default WorkerReducer; 