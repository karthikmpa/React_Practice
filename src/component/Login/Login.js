import  React from 'react';
import Input from '../Input/Input';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions';

const Login = (props) => {

    let errorOutput = 'please wait';
    if(props.loginData.user[0].isAuthinticated != null){
        errorOutput = <div className="errorLogin">
            {props.loginData.user[0].errorMessage}
        </div>;
    }
    if(props.loginData.user[0].isAuthinticated !== false){
        props.history.replace('/main/dashboard');
    }

    return(
        <ErrorBoundary>

            <div className="login-section">
                { errorOutput }
                <form onSubmit={(event) => { event.persist(); props.DataSubmit(event)}} >
                    <Input label="Email" 
                        type="input" 
                        name="email" 
                        minLength="8"
                        maxLength="25"
                        placeholder="Enter Email"
                        required/>
                    <br/>
                    <Input label="Password" 
                        type="password"
                        name="password" 
                        minLength="8"
                        maxLength="20"
                        placeholder="Enter Password" 
                        required/>
                    <br/>
                    <button type="submit" className="btn btn-default float-right">Login</button>
                    <div className="clearFix"></div>
                </form>
            </div>
        </ErrorBoundary>
    )
}

const mapStateToProps = state => {
    return {
        loginData : state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        DataSubmit : (event) => { dispatch(actionTypes.submitUser(event)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);