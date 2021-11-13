var num = document.getElementById("amount")
var javob = document.getElementById("result")


form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  javob.textContent = natija (Number(num.value))
})


function natija (num) { 
  if(num % 5 === 0 && num % 3 === 0){
    return "FizzBuzz";
  }   
  else if(num % 3 === 0){
    return "Fizz";
  }
  else if(num % 5 === 0){
    return "Buzz";
  }
  else {
    return num;
  }
}

var toggle = document.querySelector('.toggle')
var toggleOn = document.querySelector('.toggle--on')
var dark =document.querySelector('.dark')
var sun = document.querySelector('.sun')

toggle.addEventListener('click', function (event){
  toggleOn.classList.toggle ('toggle--on');
  document.body.classList.toggle ('dark');
  document.body.classList.toggle ('sun');

})



//input 3ga bo'linsa, fizz qaytadi
//input 5ga bo'linsa, buzz qaytadi
//input 5ga ham 3ga ham bo'linsa, fizzbuzz qaytadi
//input 5ga ham 3ga ham bo'linmasa, inputni o'zi qaytadi
//input son bo'lmasa , "Son emas" qaytaradi