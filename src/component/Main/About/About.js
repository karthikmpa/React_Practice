import React from 'react';

const About = () => {
    return(
        <div>
            <h2>About us:</h2>
            <hr/>
            <div className="col-50">
                <img src="https://placehold.it/250x200" style={{width: '100%'}} alt="dummy"/>
            </div>
            <div className="col-50">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <br/><br/>    
                Eget mi proin sed libero enim sed faucibus turpis in. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. </p>
            </div>
        </div>
    )
}

export default About;