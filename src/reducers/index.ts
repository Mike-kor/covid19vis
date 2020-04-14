import corona from "../slices/coronaSlice";
import {combineReducers} from "redux";

const reducers = combineReducers({
    corona,
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;