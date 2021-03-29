import {
    CHAT_LOAD,
    CHAT_SUCCESS,
    CHAT_FAIL,
    userDispatch,
    defaultStateChat
} from '../../types'

const defaultState: defaultStateChat = {
    loading: false
}

const userReducer = (state: defaultStateChat = defaultState, action: userDispatch): defaultStateChat => {
    switch(action.type){
        case CHAT_LOAD:
            return{
                ...state,
                loading: true
            }
        case CHAT_SUCCESS:
            return{
                loading: false,
            }
        case CHAT_FAIL:
            return{
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer