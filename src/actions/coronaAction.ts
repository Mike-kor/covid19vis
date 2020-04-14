import {curCountry} from '../slices/coronaSlice';

export const setCountry = (info : any) => (dispatch : any) => {
    dispatch(curCountry(info));
}

