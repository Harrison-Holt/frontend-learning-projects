import React, { useState } from 'react'; 

// The component for the Counter section
function Counter() { 

    // create the count variable along with the setter
    const [count, set_counter] = useState(0);

    // function to increment the count value 
    const increment = () => {
        set_counter(count + 1); 
    }

    // function to decrement the count value 
    const decrement = () => {
        if(count > 0) {
        set_counter(count - 1); 
        }
    }
    return (
        <div>
            <h1>React Counter</h1>
            <button style={increment_button} onClick={increment}>+</button>
            <span>{count}</span>
            <button style={decrement_button} onClick={decrement}>-</button>
        </div>
    ); 
}


const increment_button = {
    border: 'none', 
    backgroundColor: 'green',
    color: 'white',
    margin: '10px', 
    padding: '10px',
}
const decrement_button = {
    border: 'none', 
    backgroundColor: 'green', 
    color: 'white',
    margin: '10px', 
    padding: '10px',
}

export default Counter; 