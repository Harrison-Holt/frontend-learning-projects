import React from 'react'; 

// The component for the Header  
function Header() {
    return (
        <header style={Header_Style}>
            <p>My First React App</p>
        </header>
    ); 
}

// Styling for the Header 
const Header_Style = {
    backgroundColor: 'grey', 
    color: 'white', 
    top: '0', 
    left: '0',
    width: '100%', 
    padding: '10px',
    textAlign: 'center', 
}

export default Header; 