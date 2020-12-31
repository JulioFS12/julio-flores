
import { types } from '../types/types';


export const setShowSide =  (value) => {

    if( value ){
        return ({ type: types.showSideScroll });
    } else {
        return ({ type: types.hiddeSideScroll });
    }

}