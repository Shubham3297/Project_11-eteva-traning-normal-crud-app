import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

// only one root reducer is applicable.

const rootReducers = combineReducers({
    changeTheNumber
    // changeTheBackround, for multiple reducers
    // changeTheColor
})

export default rootReducers;