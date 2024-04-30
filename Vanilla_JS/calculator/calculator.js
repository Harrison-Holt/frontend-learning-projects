
document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("display").value += this.textContent; 
    }); 
}); 

document.querySelectorAll('.op').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("display").value += ' ' + this.textContent + ' '; 
    }); 
}); 


document.getElementById("equals").addEventListener('click', function() {
    let equation = document.getElementById("display").value; 

    try {
        let result = eval(equation); 
        document.getElementById("display").value = result; 
    }
    catch(error) {
        document.getElementById("display").value = "Error"; 
    }
}); 

document.getElementById("clear").addEventListener('click', function() {
    document.getElementById("display").value = ''; 
}); 