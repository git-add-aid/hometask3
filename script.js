var inputAge = +prompt("Напиши мне свой возраст!",'');
console.log(inputAge);
if (isNaN(inputAge)) {
  alert('Нужно ввести свой возраст числом!')
} else if (inputAge === 0) {
  alert('Та введи ты уже число!!!')
} else {
  alert('хорошо! , Я вычисляю твой возраст ')
}
if (inputAge % 10 >= 5 || inputAge % 10 === 0 || (inputAge % 100 >= 11 && inputAge % 100 <= 14)) {
  alert('Тебе ' + inputAge +' лет!')
} else if (inputAge % 10 === 1) {
  alert('Тебе ' + inputAge + ' год!')
} else {
  alert('Тебе ' + inputAge + ' года!')
}