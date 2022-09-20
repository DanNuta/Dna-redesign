import React, { Component } from 'react';
import "./NotFound.scss";

class NotFound extends Component {
    
    
    render() { 
        return ( 
            <div className='Error'>
                <h1 className='h1_404'>4 <span>0</span> 4</h1>
                <h2 className='ups_error'>Ups...Don’t Cry!</h2>
                <h3 className='just_error'>It’s just a 404 Error!</h3>
                <h6 className='use_mavigation'>Use the navigation above to go to the home page</h6>
                
            </div>
         );
    }
}
 
export default NotFound;