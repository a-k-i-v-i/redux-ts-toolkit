import axios from "axios"
import { IUser } from "../../types/user"
import { userFetching, userFetchingError, userFetchingSuccess } from "../Reducers/UserSlice"
import { AppDispatch } from "../store"

export const fetchingUsers = ()=> {
  return async(dispatch: AppDispatch)=>{
    try{
        dispatch(userFetching())
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch (userFetchingSuccess(res.data))
    }catch(error: any){
        dispatch(userFetchingError(error.message))
    }
  }
}