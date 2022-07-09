// Основы javaScript

// 1. Переменные
let numb = 6;
const height = 1.75;

var old = "В новом стандарте не используется";
//const нельзя поменять. let обладает областью видимости только внутри блока {}. А вот var обладает глобальной и/или функциональной


// 2. Типы данных
//// string
//// number
//// boolean
//// null - ничего, пустота. Обычно нужно для обнуления значения переменной
//// indefiened - когда чёто не задали. Например при объявлении пустой переменной её значение по умолчанию undefiened
//// object - частный случай -это массивы. 
//// bigInt - числа больше чем Number.MAX_SAFE_INTEGER. Пишутся с буквой n на конце
//// symbol - добавляет уникальное св-во к объекту


// 3. Операторы
// Операторы сравнения
//// >  <  >=  <=  ==  ===  !=  !==
// Условный оператор
//// if(условие){do}
/*if(time < 6) {
*	console.log('Good morning');
*} else {
*	console.log('Good day');
*};
*/
//Логические операторы 
//// && "и", || "или", ! "не" 
//Тернарный оператор (или упрошенный условный)
//// (условие) ? (true) : (false);
/* (10 < 12) ? console.log('Good morning') : console.log('Good day');


// !! Нюанс
// Переменную нельзя объявлять через let внутри условного оператора, тк из-за области видимости переменная будет только в тех {}, где создана и негде кроме
/*Correct
const time = 10;
let greeting;
if(time < 12) {
	greeting = 'Good morning';
} else {
	greeting = 'Good day';
};
console.log(greeting);
*/

/*Mistake
const time = 10;
if(time < 12) {
	let greeting = 'Good morning';
} else {
	greeting = 'Good day';
};
console.log(greeting);
*/


// 4. Конкатанация строк (сложение)
//  let a = 'Привет';
//  let b = 'Марк';
//  let summ = a + b;
//  console.log(summ);  // ПриветМарк
////
//  4.1 Шаблонные строки (обратные ковычки)
//  console.log(`${a}, ${b}!`);   // Привет, Марк!


// 5. Функции (DRY - don't repeat yourself) 
// function sayHi () { console.log('Hello') };
////
// function expression
// let sayHi = function () { console.log('Hello') };
// удобно тем, что функция вызывается только ниже (только после её объявления)
////
// function declaration 
// function sayHi () { console.log('Hello') };
// удобно тем, что можно сначала прописать логику программы, а потом прописать всю логику внутри функции. Но минус в том, что можно запутаться: функции мб вызваны и вверху и внизу от её объявления, что усложняет поиск
////
// !! Нюанс про компилятор
//    Код читается дважды: первый раз он читает все переменные, а второй - всю логику программы. Чтение сверху вниз, слева направо
//    Function declaration читается вместе с переменными при первом прочтении и поэтому её можно вызывать где угодно
////
// 5.1 В функциях есть параметры и аргументы
/*
	function sayHi (name) { console.log(`hello, ${name}`) }; // name - это параметр
	sayHi('Bob') // 'Bob' - это аргумент
*/


// 6. Return
// При запуске функция всегда возвращает результат. Если нет return, то возвращается undefiened
// Значение записывается на место вызова функции
// Хорошее замечание: return завершает работу функции. То есть после него код недостижим. А еще это спасает от бесконечной фунции
////
// 6.1 Функция как аргумент
/*
	function summ (a, b) {
		return a + b;
	};
	console.log(summ(19,12));
*/
// или console.log(summ(summ(10,15), summ(5,20));
////
// Немного сложно для понимания: вызов функции в функции
/*
	function doSmth (func) { 
		let x = 10;
		let y = 15;
		let result = func(x,y);
		console.log(result);
	};

	doSmth(summ);  // причем важно без скобок. Иначе с пустыми скобками отработает сумма undefiened + undefiened и будет doSmth(undefiened)
*/
////
// IIFA - immedeately involved function expression
// Самовызывающаяся функция 
// Анонимная самовызывающаяся функция
/*
	( function sayHi () { console.log('Hello') } ) ();
	// че мы сделали?
	// обернули функцию в круглые скобки и вызвали. 
	// Можно даже имя не указывать
	//  
	let res = ( function (a,b) { console.log('Hello') } ) (5,10);
	// итого получим 25
*/
// Это нужно было в ES5 чтобы обернуть var и ограничить область видимости
////
// 6.3 Стрелочные функции
/* 
	const sayHi = (name) => { 
								console.log(`Hello, ${name}`);
							}
*/
// если выражение короткое, то можно вот так
// const summ = (a, b) => a + b;   //причем даже без return


// 7. Массивы
// const autoBrands = ['Audi', 'BMW', 'Mazda'];
/*
	0: 'Audi'
	1: 'BMW'
	2: 'Mazda'
				length: 3
*/
// !! В массив можно запихать любые типы данных, но лучше однородный массив
// 7.1 Методы массивов
// push, pop, shift, unshift, slice, splice, forEach, indexOf, includes
// push()    => добавить в конец
// pop()     => удалить последний элемент
// shift()   => удалить первый элемент
// unshift() => добавить элемент в начало
////
// !! Нюанс про сравнение массивов
/*
	const arr = [1, 2, 3];
	let arr2 = arr;
	// тогда arr == arr2 //true
	//       arr === arr2 // true

	// если же сделать так:
	let arr2 = [1, 2, 3];
	// то arr2 == arr  // false
	//    arr === arr2 // false
*/
// Так получается потому что мы обращаемся к области памяти, а не к содержимому
// Присвоение переменной - это заимствование новой памяти, поэтому даже если массив идентичен, то у них области памяти разные
//
//// 
// arr.splice(1,1);
// первый параметр - это с какого начинать
// второй - сколько штук удалить


// 8. Циклы
// Обычный for
//for (i = 0; i < 10; i++)
////
// for (of)
// for ( let item of autoBrands) { console.log(item)};
// одна из удобнейших для массивов, их переборки
////
// forEach
// autoBrands.forEach( function(item) { console.log(item) })
// Можно еще использовать два параметра (item, index)
//
// autoBrands.forEach(brand) => console.log(brand);
//
// Кроме того можно написать функцию вне, а вызвать потом в forEach
// autoBrands.forEach(printBrand);
// хочу заметить, также без (), ибо тогда получится undefiened


// 9. Объекты
/*
	const person = {
		name: 'Марк',								// свойство
		age: 30,									// свойство
		isMarried: false,							// свойство
		sayHi: function () { console.log('Hi'); }	// метод
	}
*/
// Можно добавлять и удалять методы и свойства
// Добавление: person.job = 'Developer';
// Удаление:   delete person.age;
// !! Нюанс: то же самое что и со сравнением массивов.
// Мы можем делать объекты и массивы const а потом изменять их содержимое как захотим потому что переменная привязана к области памяти


// 10. Ключевое слово this
// Чтобы не ссылаться на объект, в котором ты находишься
// вместо person.name пишем this.name
// когда это полезно? Внутри объекта
/*  
	const person = {
		name: 'Марк',								
		age: 30,									
		isMarried: false,							
		// ниже обе записи идентичны по смыслу
		//sayHi: function (name) { console.log(`Hello, ${name}! I'm ${person.name`); }
		//sayHi: function (name) { console.log(`Hello, ${name}! I'm ${this.name`); }	
	}
*/
////
// 10.1 Обход объекта
// for in - перебирает неитерируемые сущности в отличие от for(of)
// for ( let key in person) { console.log(key)};
// или покруче вывод: for ( let key in person) { console.log(key, ':', person[key])};


// 11. Классы, конструкторы объектов
// Наследование. Например, я хочу создать 100 человек. И че, каждый раз эти куски кода копировать и менять?
// НУ уж нет. DRY
// Поэтому придумали конструкторы
// Кстати, класс - это как лекало для объектов
////
/*
	class Person {
		constructor (name, age, isMarried) {
			this.name = name;
			this.age = age;
			this.isMarried = isMarried;
		}
	};

	const person1 = new Person('Bob', 18, false);
	const person2 = new Person('Ivan', 30, true);
*/
// Помимо всего, в классах можно прописывать методы. 
/*
	class Person {
		constructor (name, age, isMarried) {
			this.name = name;
			this.age = age;
			this.isMarried = isMarried;

			sayHi (name) { console.log(`Hello, ${name}`)};
		}
	};

	const person3 = new Person('Anna', 21, false);
	const person4 = new Person('Alex', 34, true);

	person3.sayHi('Bibi'); // Hello, Bibi
*/

//<-- На этом первая часть подошла к концу -->