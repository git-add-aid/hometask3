
var question = confirm('У тебя есть браться или сестры?');
if (question) {
  var relativesNames = prompt('Напиши их имена через , ')
  if (relativesNames == '') {
    alert('Пожалуйста введите имя!')
  } else {
    alert('Привет  ' + relativesNames + ' !')
  } 
  
} else {
  var cousinQuestion = confirm('а 2х юродные?')
  if (cousinQuestion) {
    var cousinNames = prompt('Напиши их имена через ,')
    if (cousinNames == '') {
      alert('Пожалуйста введите имя!')
    } else {
    alert('Привет ' + cousinNames + ' !') }
} else {
    alert('Мне очень жаль :( ')
  }
}
