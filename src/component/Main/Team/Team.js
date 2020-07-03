import React from 'react';

const Team = (props) => {
    let teams = ["karthik","karan",'Raj',"demo"]
    let member = teams.map(item =>{
        return(
    <li>{item}</li>
    )})
    return(
        <div>
            <h2>Our Team:</h2>
            <div style={{float: 'right', marginTop:'50px', marginRight: '15px'}}>
            <img src="https://placehold.it/250x200" alt="dummy Alt"/>
            </div>
            <hr/>
            <div style={{float: 'left'}}>
            <ul className="teamList">
                {member}
            </ul>
            </div>
        </div>
    )
}

export default Team;