import {
    USER_LOAD,
    USER_SUCCESS,
    USER_FAIL,
    userDispatch,
    defaultStateUser
} from '../../types'

const defaultState: defaultStateUser = {
    loading: false
}

const userReducer = (state: defaultStateUser = defaultState, action: userDispatch): defaultStateUser => {
    switch(action.type){
        case USER_LOAD:
            return{
                loading: true
            }
        case USER_SUCCESS:
            return{
                loading: false,
                user: action.payload
            }
        case USER_FAIL:
            return{
                loading: false
            }
        default:
            return state
    }
}

export default userReducer