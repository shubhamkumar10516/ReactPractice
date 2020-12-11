import React from 'react';
import '../App.css';
function Header(){

    const  date = new Date();
    const month = date.getMonth();
    
    return (
        <div className = "Header">
            <h3> Happy {month}!</h3>
            <div id = "logo"> <h3>Kant Acadmey</h3> </div>
            <div id = "menu"> New, Home, Sign Up</div>
        </div>
    );
}

export default Header;