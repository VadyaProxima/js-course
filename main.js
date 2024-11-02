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

//коллбэки и функции высшего порядка
function copyArrAndDoSmth(arr, instruction) {
	const output = []

	for (let i = 0; i < arr.length; i++) {
		output.push(instruction(arr[i]))
	}
	return output
}

function numSquared(num) {
	return num * num
}

const result = copyArrAndDoSmth([1, 2, 3], numSquared)
console.log(result)

//рекурсия

let counter = 0
function repeater(char) {
	counter++

	if (counter === 5) {
		return char
	}

	return char + repeater(char)
}
console.log(repeater('zxc'))

//замыкания (функции, которые возвращаются из других функций)
const addByX = a => b => a + b

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

// map (в отличии от forEach возвращает новый массив с таким же кол-ом элементов, оставляя оригинальный)

const developers = [
	{
		id: 1,
		fullName: 'Anton Petrov',
		skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
		salary: 1000,
	},
	{
		id: 2,
		fullName: 'Ivan Ivanov',
		skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
		salary: 950,
	},
	{
		id: 3,
		fullName: 'Albert Sidorov',
		skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
		salary: 850,
	},
]

const middleDevelopers = developers.map(person => {
	return {
		...person,

		skills: [...person.skills, 'TypeScript'],

		salary: person.salary + 500,
	}
})

console.log(middleDevelopers)

//фильтрация массивов и коллекций

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const oddNumbers = numbers.filter(el => el % 2 !== 0)

console.log(oddNumbers)

const users = [
	{
		id: 1,
		name: 'Brad Pette',
		isMarried: true,
	},
	{
		id: 2,
		name: 'Diana Moor',
		isMarried: false,
	},
	{
		id: 3,
		name: 'Olivie Giroud',
		isMarried: true,
	},
	{
		id: 4,
		name: 'Brad Parker',
		isMarried: true,
	},
]

const marriedUsers = users.filter(el => el.isMarried)
console.log(marriedUsers)

const names = [
	'Mikhail',
	'Ivan',
	'Albert',
	'John',
	'Ian',
	'Petr',
	'Alexandr',
	'Oleg',
	'Jaroslav',
	'Vsevolod',
]
const shortNames = names.filter(el => el.length < 5)
console.log(shortNames)

const developers2 = [
	{
		id: 1,
		fullName: 'Ivan Ivanov',
		skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug'],
	},
	{
		id: 2,
		fullName: 'Petr Petrov',
		skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm'],
	},
	{
		id: 3,
		fullName: 'Ian Melnikov',
		skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript'],
	},
	{
		id: 4,
		fullName: 'Antonio Banderas',
		skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React'],
	},
]

const tsDevelopers = developers2.filter(dev =>
	dev.skills.includes('TypeScript')
)
console.log(tsDevelopers)

//reduce

const order = [
	{
		id: 1,
		name: 'Лопата',
		price: 1000,
		quantity: 1,
	},
	{
		id: 2,
		name: ['Удочка, Леска'],
		price: 1200,
		quantity: 2,
	},
	{
		id: 3,
		name: 'Ведро',
		price: 500,
		quantity: 3,
	},
	{
		id: 4,
		name: 'Мороженое',
		price: 100,
		quantity: 8,
	},
]

const totalPrice = order.reduce((acc, el) => acc + el.price * el.quantity, 0)
console.log(totalPrice)

//сортировка массива
const food = ['Apple', 'Melon', 'Banana', 'Yogurt', 'Orange', 'Stawberry']

const players = [
	{
		id: 1,
		name: 'Cristiano',
		surname: 'Ronaldo',
		club: 'Juventus',
	},
	{
		id: 2,
		name: 'Lionel',
		surname: 'Messi',
		club: 'Barcelona',
	},
	{
		id: 3,
		name: 'Karim',
		surname: 'Benzema',
		club: 'Real Madrid',
	},
	{
		id: 4,
		name: 'Maxi',
		surname: 'Gomez',
		club: 'Valencia',
	},
	{
		id: 5,
		name: 'Quincy',
		surname: 'Promes',
		club: 'Spartak',
	},
]

function sorting(a, b) {
	if (a > b) {
		return 1
	}

	if (a < b) {
		return -1
	}

	return 0
}

food.sort(sorting)

console.log(players.sort((a, b) => sorting(a.surname, b.surname)))

//деструктуризация
function getInfo() {
	return ['BMW', 'X3']
}
const [carName = '', carSeries = ''] = getInfo()

//проект магазин

const products = [
	{
		id: 1,
		title: 'Lenovo Yoga',
		price: 3000,
	},
	{
		id: 2,
		title: 'Acer Aspire',
		price: 1800,
	},
	{
		id: 3,
		title: 'Dell Vostro',
		price: 3400,
	},
]

let orderInShop = []

function addToBasket(productId) {
	// TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
	if (orderInShop.find(el => el.id === productId))
		return alert('Товар уже в корзине!')
	// TODO: если товар еще не в корзине, добавить его из массива products
	const product = products.find(item => item.id === productId)
	orderInShop = [...orderInShop, product]
	// Эти строчки не трогаем, они отвечают за переотрисовку страницы
	renderCart()
	rerenderTotalPrice()
}

function removeFromBasket(productId) {
	// TODO: описать логику удаления товара из корзины
	orderInShop = orderInShop.filter(item => item.id !== productId)
	// Эти строчки не трогаем, они отвечают за переотрисовку страницы
	renderCart()
	rerenderTotalPrice()
}

function rerenderTotalPrice() {
	// TODO: опишите функционал подсчета общей стоимости заказа

	const totalPrice = orderInShop.reduce((acc, user) => {
		return acc + user.price
	}, 0)
	// Не меняйте эту строчку
	document.getElementById('total').innerText = totalPrice
}

// Этот метод остается без изменений
function renderCart() {
	const cart = document.getElementById('basket-items')

	cart.innerHTML = ''
	orderInShop.forEach(item => {
		const el = document.createElement('li')
		el.innerText = item.title
		el.onclick = () => removeFromBasket(item.id)
		cart.appendChild(el)
	})
}
