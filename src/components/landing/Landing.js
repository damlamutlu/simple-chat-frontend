import React , { useState } from 'react';
import axios from 'axios';

import "./Landing.css";


function Landing(){


    const [username , setUsername] = useState('');

    const clickedHandler = () => {
        axios.get('http://localhost:8080/user/' + username).then(response => {   
           if(response.data === ""){              
                axios.post('http://localhost:8080/user/saveUser' , {
                    username:username                    
                }).then(response => {
                    //open message page
                    console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
        }else{
            //open message page
        }
        }).catch(error => {
            console.log(error);
        })
    }

    const inputHandler = (event) => {
        setUsername(event.currentTarget.value);       
    }

    return(    
        <div className="landing-page">
            <div>
                <input type="text" placeholder="username" onChange={inputHandler} />
            </div>
            <div>
                <button className="button" onClick = {clickedHandler}>
                    <span className="fa fa-arrow-circle-right" style={{ color :"blue" }}></span>
                </button>
            </div>     
        </div>

    );
}
export default Landing;