/*
Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"

*/

function fib(a) {
	let strFib = '0';
	if (typeof a === 'number' && a > 1 && Math.round(a) === a){
	let arrFib = [1, 1];

	for (let i = 0; i < a - 2; i++){
		let b = arrFib[i];
		let c = arrFib[i + 1];
		arrFib[i + 2] = b + c;
	};

	for (let j = 0; j < a - 1; j++){
		strFib += ` ${arrFib[j]}`;
	};
	console.log(strFib);
	return strFib;
} else if (a === 1){
	console.log(strFib);
	return strFib;
} else {
	strFib = '';
	console.log(strFib);
	return strFib;
}
};

fib (10);

//Зразок із завдання

/*
function fib(num) {
	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
		 return "";
	}

	let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		 if (i + 1 === num) {
			  result += `${first}`;
			  // Без пробела в конце
		 } else {
			  result += `${first} `;
		 }

		 let third = first + second;
		 first = second;
		 second = third;
	}
console.log(result);

	return result;
}

fib(5)

*/