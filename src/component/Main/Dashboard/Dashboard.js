import React from 'react';
import Input from '../../Input/Input';
import { connect } from "react-redux";

const Dashboard = (props) => {
    if(props.UserData.user[0].isAuthinticated !== true){
        props.history.replace('/');
    }
    let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let amount = parseInt(Math.random()*1000);
    let roomRent = parseInt(Math.random()*100);
    let Morrision = parseInt(Math.random()*100);

    return(
        <div>
            <div className="UserData">
                <img src="https://placehold.it/100x100" style={{marginRight: '10px'}} alt="user"/>
                <h3 className="userName">Welcome Back: {props.UserData.user[0].email}</h3>
                <h4 className="userLastLogin"><i>Last Login : {currentDate}</i></h4>
            </div>
            <div className="clearFix"></div>

            <hr/>

                <h3 className="brandColor">Account Balance: {amount} ₹</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>{currentDate}</td>
                        <td>Room Rent</td>
                        <td>{roomRent} ₹</td>
                    </tr>
                    <tr>
                        <td>{currentDate}</td>
                        <td>Morrision</td>
                        <td>{Morrision} ₹</td>
                    </tr>
                </thead>
            </table>

            <hr/>

            <div className="col-50">
                <h3>Subscribe to Alert</h3>
                <form>
                    <Input type="checkbox" label="SMS Alert" style={{float: 'left', marginRight: '15px'}}/> <br/>
                    <Input type="checkbox" label="Marketing Newsletter"  style={{float: 'left', marginRight: '15px'}}/><br/>
                    <Input type="checkbox" label="Flyers"  style={{float: 'left', marginRight: '15px'}}/><br/>
                    <button className="submitButton">Submit</button>
                </form>
                
            </div>
            

            <div className="col-50">
                <h3>Two Way Data Binding:</h3>
                <Input type="text" placeholder="Enter value here" label="Enter Value"/>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        UserData : state 
    }
}
export default connect(mapStateToProps)(Dashboard);