import {
    USER_LOAD,
    USER_FAIL,
    USER_SUCCESS,
    userDispatch
} from '../types'
import { Dispatch } from 'redux'

export const getUser = (num: number) => async(dispatch: Dispatch<userDispatch>) => {
    try{
        dispatch({
            type: USER_LOAD,
            payload: ''
        })
        dispatch({
            type: USER_SUCCESS,
            payload: {name: "Nacho"}
        })
    }catch(e){
        console.log(e)
        dispatch({
            type: USER_FAIL,
            payload: ''
        })
    }
}