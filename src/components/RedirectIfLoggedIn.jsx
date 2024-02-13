import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtil";
import { getUser } from './../utils/TokenUtil';

export function RedirectIfLoggedIn({props}){
    // if (isAuthenticated()) {
    //     return <Navigate to="/dashboard"></Navigate>

    // } else {
    //     return props.children;
    // }
    const userRole = getUser(); // Assuming getUser() returns user role

    if (isAuthenticated() && userRole === "SUPPLIER") {
        return <Navigate to="/supplier" />;
    } else {
        return props.children;

    }
}
