document.querySelectorAll('.number, .operation')
    .forEach( el => el.addEventListener('click', numberOperClick) );
     
function numberOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}
document.querySelector('.equals')
    .addEventListener('click', equals);
    
function equals() {
   const display = document.querySelector('.display');
//   if (display += '/0') { 
//   display.value = 'Dividing by zero is impossible!'; 
//   } else {
      display.value = eval(display.value);
//   }
}

document.querySelector('.sqrt')
    .addEventListener('click', findSqrt);
function findSqrt() {
   const display = document.querySelector('.display');
   display.value = Math.sqrt(display.value);
}

document.querySelector('.plus-minus')
    .addEventListener('click', plusMinus);
     function plusMinus () {
    const display = document.querySelector('.display');
    display.value = -display.value;
    }
document.querySelector('.clear')
    .addEventListener('click', clearScr);
    function clearScr() {
    const display = document.querySelector('.display');
    display.value = '';
    }


    
//document.querySelector('.percents')
//    .addEventListener('click', findPerc);
//    function findPerc() {
//    const display = document.querySelector('.display');
//    const str = display.split('.operation').;
   
//    }