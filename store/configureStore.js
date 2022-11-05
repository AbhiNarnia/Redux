import { createStore, combineReducers } from "redux";

import countReducer from "../SRC/reducers/countReducer";

const rootReducer = combineReducers(
    {
        counter: countReducer
    }
)

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;