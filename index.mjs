// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp);


const input = document.querySelector('input')
const phoneValidate = document.querySelector(".info")
const imageMtn = document.querySelector(".image")
const gloImg = document.querySelector(".glo")
const airtelImg = document.querySelector(".airtel")
const etiImg = document.querySelector(".mobile")


function validate(field) {

  // * regex for different telecom carrier validation with country code
  const patternMtn = /^((\+)234|0)(703|704|706|803|806|810|813|814|816|903|906|913)\d{7}$/;
  const patternGlo = /^((\+)234|0)(705|805|905|807|815|811)\d{7}$/;
  const patternAirtel = /^((\+)234|0)(702|802|902|701|808|708|812)\d{7}$/;
  const patternEti = /^((\+)234|0)(809|909|908|817|818)\d{7}$/;


  if (patternMtn.test(field.value)) {
    field.className = 'valid';
    phoneValidate.style.display = 'none'
    imageMtn.style.display = "inline-block"

  } else if (patternGlo.test(field.value)) {
    field.className = 'valid';
    phoneValidate.style.display = 'none'
    gloImg.style.display = "inline-block"
  } else if (patternAirtel.test(field.value)) {
    field.className = 'valid';
    phoneValidate.style.display = 'none'
    airtelImg.style.display = "inline-block"
  } else if (patternEti.test(field.value)) {
    field.className = 'valid';
    phoneValidate.style.display = 'none'
    etiImg.style.display = "inline-block"
  } else {
    field.className = 'invalid'
    phoneValidate.style.display = 'block'
    imageMtn.style.display = "none"
    gloImg.style.display = "none"
    airtelImg.style.display = "none"
    etiImg.style.display = "none"
  }
}

input.addEventListener('keyup', (e) => {

  validate(e.target);

});





