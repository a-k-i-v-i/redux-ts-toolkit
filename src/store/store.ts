import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UserSlice from "./Reducers/UserSlice";


const  rootReducer = combineReducers({
    userSlice : UserSlice
})

export const setupStore = ()=>{
    return configureStore({
        reducer : rootReducer
    })
}


export type rootState = ReturnType<typeof rootReducer>
 type AppStore = ReturnType<typeof setupStore>
export type AppDispatch =  AppStore['dispatch']
