const initialState = {
    user : [{
        email: null,
        password: null,
        isAuthinticated : false,
        errorMessage : "Please enter login credentials to continue"
    }],
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case("SET_USER") : 
            if(action.responseData.message === 'success'){
                let emailValue = action.responseData.userName;
                let passValue = action.responseData.userId;
                const oldState = {...state}
                oldState.user.splice(0, 1, {
                    email: emailValue,
                    password: passValue,
                    isAuthinticated : true,
                    errorMessage : 'Success Logged In!'
                });
                return oldState;
            }
            else{
                const oldState = {...state}
                oldState.user.splice(0, 1, {
                    email: null,
                    password: null,
                    isAuthinticated : false,
                    errorMessage : 'Please check your Credintials!'
                });
                return oldState;
            }

        case('GET_USER') :
            return state;
            
        default :
            return state;
    }

}

export default rootReducer;