import {combineReducers} from "redux";
import {counter} from "./counter-reducer"
import {todos} from "./totdos-reducer"

export const reducer=combineReducers({
    todos:todos,
    counter:counter
})
