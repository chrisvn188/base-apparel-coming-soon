import validEmail from "./modules/validEmail.js";
import get from "./modules/getElement.js";

const errorMessage = get('.error-message');
const errorIcon = get('.error-icon');
const form = get('.form');
const email = get('#email');

function setActive(el){
  el.classList.add('active');
}

function removeActive(el){
  el.classList.remove('active');
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if(!validEmail(email.value)) {
    setActive(errorIcon);
    setActive(errorMessage);
  }
  else{
    alert('Email sent :)');
    removeActive(errorIcon);
    removeActive(errorMessage);
  }
});