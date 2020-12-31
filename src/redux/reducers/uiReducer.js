import { types } from '../types/types';

const initialState = {
    ShowSideBar: false,
}

export const uiReducer = ( state = initialState, action) => {

    switch (action.type) {
        case types.showSideScroll:
                return {
                    ...state,
                    ShowSideBar: true,
                }
        case types.hiddeSideScroll:
            return {
                ...state,
                ShowSideBar: false
            }
    
        default:
            return state;
    }

}