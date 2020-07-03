import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input {...this.props} />
            </div>
        )
    }
}

export default Input;