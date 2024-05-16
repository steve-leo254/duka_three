import { useNavigate } from "react-router-dom";

const Checkstatus = () => {
    const navigate = useNavigate();

    const loginStatus = localStorage.getItem('isLoggedIn');
    
    if (!loginStatus || loginStatus !== "true") {
        navigate('/login'); 
        return null; 
    }

    return null; 
};

export default Checkstatus;
