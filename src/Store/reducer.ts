interface AuthType {
    name: string; 
    isLoggedIn: boolean; 
}

const initialState = {
    isLoggedIn: false,
    name: ''
};

const authReducer = (state = initialState, action: AuthType) => {
    switch (action.isLoggedIn) { 
        case true:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                name: action.name
            };
        default:
            return state;
    }
};

export default authReducer;
