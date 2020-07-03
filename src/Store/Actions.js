export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";

const userType = () => {
    return{
        type : GET_USER
    }
}

export const getUser = () => {
    return dispatch => {
        return dispatch(userType());
    }
}

const submitType = (event, responseData) =>{
    return{
        type : SET_USER,
        value : event,
        responseData : responseData
    }
}
export const submitUser = (event) => {
    event.preventDefault();
    let email = event.target['email'].value;
    let password = event.target['password'].value;
    let data =  { email: email, password: password};

    return dispatch => {
            fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE'
                },
                body : JSON.stringify(data)
            }).then(response => 
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })
            ).then(res => {
                let responseData = res.data;
                return dispatch(submitType(event, responseData));
            })
            .catch( error => {
                console.log(error);
            }));
        }
}