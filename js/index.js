/* 
getElementById(id)
return value: element or group of elements markup
const shippingweight = document.getElementById('weight')
console.log(shippingweight)
*/

/* 
getElementByClassName(css class name)
return type is HTMLCollect
** class name does not have dot **
const testThings = document.getElementsByClassName('test')
console.log(testThings)
*/

/* 
getElementByTagName(element)
const ptag = document.getElementsByTagName('li')
console.log(ptag)
*/

/* 
querySelector(element)
*/

const inputField = document.querySelector('input');
console.log(inputField);

/* 
Read Data from the dom using a button click as the event that drives the code 
*/

//reference variables

const calculate = document.querySelector('label');
const shippingWeight = document.querySelector('input');
const shippingRate = 5;
const shippingPrice = document.querySelector('.shipping-price');
shippingPrice.textContent = "$0.00";



calculate.addEventListener('click', function(){
  const rate = Number(shippingWeight.value) * shippingRate;
  
  shippingPrice.textContent = "$"+rate+".00";
  shippingPrice.style.fontSize = "4rem";
  
});



// const loginButton = document.getElementById('login')
// loginButton.addEventListener('click', function(){
//   console.log('login clicked');
// });

// const imageLogo = document.querySelector('img')
// imageLogo.addEventListener('mouseenter', function(){
//   console.log('logo hover');
// });
