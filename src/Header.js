import React from 'react';
 import './Header.css'
 import { Button } from '@material-ui/core';


const Header = () => {
    return ( 
        <div className="header">
             <h3>GRE SOLD OUT</h3>
           
            <div className="app_header_log">
             <Button color="primary" variant="contained">
               SignIn
             </Button>
             
           </div> 
        </div>
     );
}
 
export default Header;