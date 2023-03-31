// переменная, в которой хранится выбранное математическое действие
let op; 

// функция расчёта
function func() {
    // переменная для результата
  let result;
  // получаем первое и второе число
  //let  num1=document.querySelector('#num1').value;
  
  
  //console.log(num1)
 let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  // смотрим, что было в переменной с действием, и действуем исходя из этого

  if (op=='+'){
    result = num1 + num2;
  }
  else if(op=='-'){
    result = num1 - num2;
  }
  else if (op=='*'){
    result = num1 * num2;
  }
  else{
    result = num1 / num2;
  }
 /* switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }*/

  // отправляем результат на страницу
  document.getElementById("result").innerHTML = result;
}
