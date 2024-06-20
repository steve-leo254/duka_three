import { Navigate,Outlet} from "react-router-dom";

export default function Protected() {

    const login_status = localStorage.getItem("isLoggedIn")
    console.log("isLoggedIn ", login_status)
    if (!login_status || login_status !== "true") {
       < Navigate to='/login'/>
    }
    return login_status ?<Outlet/>:< Navigate to='/login'/>

}