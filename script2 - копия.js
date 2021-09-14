// DOM

var dgdrvd = document;  //Объект, кот. выводит весь HTML документ со всеми элементами (тегами)
console.log(dgdrvd);
var qwerty = document.getElementById("main-heading"); //Метод, кот. находит элемент в html документе по id
console.log(qwerty);
var srfvdrv = qwerty.innerHTML; //Свойство, кот. позволяет получить HTML содержимое дочерних элементов (контент это тоже дочерний элемент какого-то тега)
console.log(srfvdrv);
console.log(qwerty.innerHTML);  //Правильно писать вот так (не внося в переменную), т.к. в дальнейшем присвоить новое содержимое через переменную нельзя будет.
// var esgd = prompt("Введите новый заголовок:");
// qwerty.innerHTML = esgd;  //Присваиваеим новое содержимое
// srfvdrv = esgd; //Через переменную не работает! Т.к. мы меняем не содержимое переменной, а должны присвоить новый текст команде innerHTML
document.getElementById("main-heading").innerHTML = "Лох"   //Всё в одной строчке

var fgvkfopv = document.getElementById("ma-heading").innerHTML
console.log(fgvkfopv);

var ffhfrtopv = document.getElementById("m-heading").innerHTML
console.log(ffhfrtopv);


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


// var sdfbdfg = prompt("Введите новый заголовок:");
// $("#main-heading").text(sdfbdfg);
$("#main-heading").text("Пуси Джуси");  //$ - функция, принимает один аргумент (строка селектора) и возвращает объект jQuery

