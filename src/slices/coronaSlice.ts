import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    info : null,
}

const coronaSlice = createSlice(
    {
        name:'corona',
        initialState,
        reducers : {
            curCountry : (state : any, action : any) => {
                console.log('payload ', action.payload);
                state.info = action.payload;
            }
        }
    }
);

export const { curCountry } = coronaSlice.actions;
export default coronaSlice.reducer;