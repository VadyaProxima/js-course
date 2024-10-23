// угадай число
const secretNum = 5 //*Math.ceil(Math.random()*10);
let tries = 0

function guessNum(num) {
	if (tries >= 5) {
		return alert('игра окончена')
	}
	if (num === secretNum) {
		alert('вы выиграли!')
		tries = 5
	} else {
		alert('вы не выиграли')
		tries++
	}
}

let str = 'asdasd'
console.log(str.__proto__) //методы

// работа с объектами
const person = {
	name: 'Anna',
	surname: 'Dance',
	age: 18,
	greeting() {
		console.log('Hello')
	},
	changeSurname(newName, newSurname) {
		this.name = newName //this - контекст этого объекта
		this.surname = newSurname
	},
}

person.greeting()
person.changeSurname('Maks', 'Shalnev')

//загадка
let riddle = {
	question: 'Висит груша нельзя скушать',
	correctAnswer: 'лампочка',
	hints: ['это несъедобное', 'это не фрукт'],
	tries: 3,
	checkAnswer(answer) {
		if (this.tries < 1) {
			return alert('игра окончена')
		}
		if (answer === this.correctAnswer) {
			alert('Правильно')
			console.log('Правильно')
		} else {
			alert('Не правильно')
			console.log('Не правильно')
			this.tries--

			const hint = this.hints[this.tries === 2 ? 0 : 1]

			if (this.tries) {
				alert('подсказка: ' + hint)
			}
		}
	},
}

window.onload = function () {
	document.getElementById('riddle').innerText = riddle.question
}

function check() {
	var input = document.getElementsByTagName('input')[0]
	var guessedAnswer = input.value
	if (guessedAnswer) {
		riddle.checkAnswer(guessedAnswer)
	}
}

//Варианты записи функций:

//function expression. --могут быть вызваны до того как были созданы--
const sum = function (a, b) {
	return a + b
}

//стрелочная функция
const summ = (a, b) => {
	return a + b
}



//scope - область видимости

//Переменные, объявленные внутри функции, имеют локальную область 
//видимости и доступны только в пределах этой функции
// Когда функция возвращает значение, оно может быть записано в глобальную область видимости
//Глобальная область видимости содержит все глобальные переменные, функции и объекты


//проект цензор
function censor() {
	const args = []

	return function (arg1, arg2 = '') {
		let resultStr = arg1
		if (arg2) {
			args.push([arg1, arg2])
		} else {
			for (let item of args) {
				resultStr = resultStr.replace(new RegExp(item[0], 'gi'), item[1])
			}
			return resultStr
		}
	}
}

const changeScene = censor()
console.log('PHP', 'JS')
changeScene('PHP', 'JS')
console.log(changeScene('PHP is good'))
