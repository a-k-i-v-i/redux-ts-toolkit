import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/user"

interface IUserState {
    user : IUser[],
    loader : boolean,
    error :  string
}

const initialState : IUserState = {
    user : [],
    loader : false,
    error : ''
}


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        userFetching (state){
            state.loader = true,
            state.error = ''
        },
        userFetchingSuccess (state,action: PayloadAction<IUser[]>){
            state.loader = false,
            state.user = action.payload
        },
        userFetchingError (state,action: PayloadAction<string>){
            state.loader = false
            state.user = []
            state.error = action.payload
        }
    }
})

export const {userFetching,userFetchingError,userFetchingSuccess} = userSlice.actions
export default userSlice.reducer

