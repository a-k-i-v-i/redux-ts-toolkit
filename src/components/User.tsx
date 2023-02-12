import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchingUsers } from "../store/ActionCreators/actionCreators";

const User = ()=>{
    const dispatch = useAppDispatch()
    const {user,loader,error} = useAppSelector((s)=> s.userSlice)
    useEffect(()=>{
      dispatch(fetchingUsers)
    },[])
    return(
        <div>
            {
                user.map((el)=>(
                    <h1>{el.name}</h1>
                ))
            }
        </div>
    )
}

export default User