import { combineReducers } from "redux";
import { reducer as catFactReducer } from './catFact';


const rootReducer = combineReducers({
    catFact: catFactReducer
})

export { rootReducer };