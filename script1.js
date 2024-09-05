document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); 

// Expresión regular que permite solo letras (mayúsculas y minúsculas y tilde)
const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;


let nombre = document.getElementById('name').value.trim();
let asunto = document.getElementById('case').value.trim();
let mensaje = document.getElementById('message').value.trim();


let isValid = true;


if (!regex.test(nombre)) {
document.getElementById('errorName').style.display = 'block';
isValid = false;
} else {
document.getElementById('errorName').style.display = 'none';
}
if (!regex.test(asunto)) {
document.getElementById('errorCase').style.display = 'block';
isValid = false;
} else {
document.getElementById('errorCase').style.display = 'none';
}
if (!regex.test(mensaje)) {
document.getElementById('errorMessage').style.display = 'block';
isValid = false;
} else {
document.getElementById('errorMessage').style.display = 'none';
}
if (isValid) {
document.getElementById('formSuccess').style.display = 'block';
}
}); 

