// DOM

console.log(document);  //Объект, кот. выводит весь HTML документ со всеми элементами (тегами)
console.log(document.getElementById("main-heading")); //Метод, кот. находит элемент в html документе по id
console.log(document.getElementById("main-heading").innerHTML); //Свойство, кот. позволяет получить HTML содержимое дочерних элементов (контент это тоже дочерний элемент какого-то тега)
document.getElementById("main-heading").innerHTML = "Лох"   //Присвоили новый текст

// let qwerty = document.getElementById("main-heading")
// let srfvdrv = qwerty.innerHTML;
// srfvdrv = "Лох"; //Через переменную не работает! Т.к. мы меняем не содержимое переменной, а должны присвоить новый текст команде innerHTML

console.log(document.getElementById("ma-heading").innerHTML);
console.log(document.getElementById("m-heading").innerHTML);



/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
=========================================================================================================================
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
=========================================================================================================================
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



// DOM через jQuery

//        Источники где можно скопировать ссылку на нужную версию jQuery.
// jQuery CDN          https://code.jquery.com/jquery/
// Google CDN          https://developers.google.com/speed/libraries#jquery
// Microsoft CDN       https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0
// CDNJS CDN           https://cdnjs.com/libraries/jquery
// jsDelivr CDN        https://www.jsdelivr.com/package/npm/jquery


// let sdfb = prompt("Введите новый заголовок:");
// $("#main-heading").text(sdfb);
$("#main-heading").text("Пуси Джуси");  // $ - функция, принимает один аргумент (строка селектора) и возвращает объект jQuery. Метод text - добавляет или перезаписывает дочерний элемент (пусть то контент либо элемент(тег) перезапишет в контент).

/////

// родитель.append(элемент или строка)   -  Синтаксис метода jQuery-объекта append.
$("body").append("<p>Это новый параграф</p>"); // Создаёт новый эл-т и добавляет в дерево DOM.
/*В метод jQuery-объекта append, передаётся нужный (новый) HTML-код. Аppend преобразует HTML в DOM-элемент (соответствующий заданным в коде тегам). 
Новый эл-т добавиться в конец объекта (блока) через который вызывали (в нашем случае BODY)*/

/////

// $("h1").fadeOut(3000).fadeIn(3000).slideUp(3000).slideDown(3000); //Затухание, появление, вверх, вниз
// $("h2").hide(3000).show(3000);		//Скрыть и показать

// for(i=0; i<5; i+=1){
//   $("h1").fadeOut(1000);
//   $("h1").fadeIn(1000);
// }


/*
#1. Перечислите своих друзей (и сделайте их лучшими!)
Создайте массив с именами нескольких друзей. В цикле for
создайте для каждого имени по одному элементу p и добавьте
эти элементы в конец <body>, вызывая jQuery-метод append.
С помощью jQuery измените текст элемента h1, чтобы вместо
"Привет, мир!" там было "Мои друзья". Используйте метод
hide и метод fadeIn, чтобы имена плавно возникали на экране.
Теперь измените созданные вами элементы p, добавив после
каждого имени слово "лучший!". Подсказка: если найти сразу
все элементы p с помощью $("p"), метод append можно вызвать
для них всех разом.*/


let arrFr = ["Bob", "Nik", "Sara", "Mika"];   // Доточить, т.к. работает не совсем правильно
for(i=0; i<arrFr.length; i+=1){
  let dfv = arrFr[i];
  $("body").append(`<p>${dfv}</p>`); //или так:("<p>" + dfv + "</p>")
  $("p").hide().fadeIn(3000);
}
$("h1").text("Мои друзья");


/*#2. Мигающий заголовок
Как с помощью fadeOut и fadeIn сделать так, чтобы заголовок
мигнул пять раз с интервалом в секунду? Как сделать это в цикле
for? А теперь измените цикл, чтобы заголовок появлялся
и исчезал в первый раз за секунду, потом за две, потом за три
и т. д.*/

/*let svs = 5;
for(i=0; i<svs; i+=1){
	let dfvdf = [1000, 2000, 3000, 4000, 5000];
	$("h1").fadeOut(dfvdf[i]).fadeIn(dfvdf[i]);
}*/

/*#3. Отложенная анимация
Для задержки анимации можно воспользоваться методом delay.
С помощью delay, fadeOut и fadeIn заставьте какой-нибудь
элемент плавно исчезнуть, а затем, через пять секунд, снова
проявиться.*/

//$("h1").fadeOut(3000).delay(5000).fadeIn(2000); //delay делает задержку между затуханием/проявлением, срабатывает как CSS стиль display: none;

/*#4. Метод fadeTo()
Поэкспериментируйте с методом fadeTo.*/

$("h1").fadeTo(2000, 0.5);	//Затухает до прозрачности 0.5 и в таком виде остаётся как CSS стиль opacity: 0.5;








/*
//Несколько классов и дочерние селекторы
<h1 class = "bold color_red">абзац</h1>   // в данном селекторе 2 класса
<h2 class = "bgzapas">абзац</h2>
<h3 class = "button">абзац</h3>
<div><p class = "bold color_red">абзац</p></div>

// Один и тот же класс может быть присвоен разным элементам и, кроме этого, 
одному элементу можно присвоить несколько классов

h1, h2, .bgzapas, .button, h3 {     //Вроде бы можно с запятыми и можно без запятых ипробелов (нужно пробовать)
  font-family: Arial, Helvetica, sans-serif; 
  padding: 10px;
  background-color: #fcfaed;
}
h1.bold {           //присваиваем данный класс только заголовкам h1
    color: green;
}
p.bold.color_red {  //присваиваем 2 (т.е. все) классы только элементам p
    color: green;
}
div > p {              - стилизоваться будет контейнер p
  font-size: 1.2em;
  padding: 10px;
}
*/


var clickHandler = function (event) {     //event - событие. Команда click (см.ниже) автоматом передаёт ф-ции значение аргумента (т.е. h1 в нашем случае) при её вызове.
  console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);  //Читается так: "В случае клика по выбранному эл-ту (h1), вызови ф-цию clickHandler и передай ей объект события"


//стр 163