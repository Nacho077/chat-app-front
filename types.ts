//pages
export type RootStackParamList = {
    Home: undefined,
    Chat: chat,
    Login: undefined,
    Register: undefined
}

//tabs del Home
export type StackTopBar = {
    Home: undefined,
}

//user
export interface user{
    name: string
}

//chat
export interface chat{
    photo: string,
    name: string,
    id: string,
    messages: message[]
}

export interface message{
    id: string,
    sender: string,
    message: string,
    date: Date
}

//--------------------------------//
//---------- REDUX ---------------//
//--------------------------------//

//user
export const USER_LOAD: string = "USER_LOAD"
export const USER_SUCCESS: string = "USER_SUCCESS"
export const USER_FAIL: string = "USER_FAIL"

export interface defaultStateUser{
    loading: boolean,
    user?: user
}

export interface userLoad{
    type: typeof USER_LOAD,
    payload: any
}

export interface userSuccess{
    type: typeof USER_SUCCESS,
    payload: user
}

export interface userFail{
    type: typeof USER_FAIL,
    payload: any
}

export type userDispatch = userLoad | userSuccess | userFail


//chats
export const CHAT_LOAD: string = "CHAT_LOAD"
export const CHAT_SUCCESS: string = "CHAT_SUCCESS"
export const CHAT_FAIL: string = "CHAT_FAIL"

export interface defaultStateChat{
    loading: boolean,
    chats?: chat[]
}

export interface chatLoad{
    type: typeof CHAT_LOAD,
    payload: any
}

export interface chatSuccess{
    type: typeof CHAT_SUCCESS,
    payload: chat
}

export interface chatFail{
    type: typeof CHAT_FAIL,
    payload: any
}

export type chatDispatch = chatLoad | chatSuccess | chatFail
