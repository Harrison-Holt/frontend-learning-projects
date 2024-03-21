import React from 'react'; 

// The Compoment for the Footer 
function Footer() {
    return (
        <footer style={Footer_Style}>
            <p>Last Updated March 21, 2024</p>
        </footer>
    ); 
}

// Styling for the Footer 
const Footer_Style = {
    backgroundColor: 'grey', 
    color: 'white', 
    bottom: '0', 
    left: '0',
    width: '100%', 
    position: 'fixed',
    padding: '10px',  
    textAlign: 'center', 
}

export default Footer; 