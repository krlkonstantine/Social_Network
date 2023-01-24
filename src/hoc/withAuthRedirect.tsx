import React from "react";
import {Navigate} from "react-router-dom";


export const withAuthRedirect = (Component:any) => {
    debugger

    const RedirectComponent = (props:any)=> {
        debugger
        return <Component {...props}/>


            //if (!props.isAuth) return  <Navigate to="/login" />
        }
    return RedirectComponent
}
