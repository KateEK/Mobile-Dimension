// 1 task

var arr = [ 1, 2, 3, 4, 5, 8, 9, 45, 32, 14, 75, 2345, 87, 4, 6, 8, 9, 0, 56, 2, 1, 3 ,5];

var number = 0;

var arrNew = arr.map(function(item){
    if(number > item){
        return number - item;
    }
    return item - number;
});

arrNew.forEach(function(elem, index, array){
    if(array.some(function(el){
            return (elem - el) > 0;
        })){
        return
    }
    console.log(index);

});

// 2 task

var plus = function(x) { return function(y) { return x + y }; };

var sum = plus(2)(3);
console.log(sum);



// 3 task

var str = '<b data-count="4"><i data-sum="5"></i></b>';

str = str.replace(/[0-9]/g, function(str) {
    return str * 3
});


// 4 task
var secondStr = " 'раз два три' 'четыре пять шесть' сем'ь ";
secondStr.replace(/\s'([^']*)'\s/g, ' "$1" ');


// 5 task
var wrap = document.querySelector('div[data-role="buttons"]');
var childs = wrap.children;

childs.forEach = [].forEach;

childs.forEach(function(item, i, arr) {
    if( i === 0 || i === (arr.length - 1) ) {
        return
    }
    item.style.backgroundColor = 'red';
});



/** bonus
 *
 * 2..toString(2) === '10';
 * потому что метод toString() с переданным ему аргументом "2" возвращает строковое представление числа в двоичном формате
 * две точки ставятся потому что, так как - это тип "number", то первой точкой ожидается разделитель десятичной дроби,
 * а второй точкой - вызов метода
 *
 *
 * (![]+[])[+[]] === 'f'
 * сначала выполнится действие в круглых скобках, так как массив (даже пустой) при приведении типа к булеву значению
 * будет true, то с знаком ! (то есть "не") ![] === false; false + [] === false + '' === 'false';
 * далее у строки 'false' берем букву под индексом +[] === 0;
 * 'false'[0] === 'f';
 */

