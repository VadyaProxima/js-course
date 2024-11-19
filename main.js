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

//замыкания ( функция, которая имеет доступ к переменной своей внешней функции даже после того, как эта внешняя функция завершила выполнение)
const createCounter = () => {
	let count = 0

	return () => {
		count += 1
		return count
	}
}
const counterInc = createCounter()

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

// map

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

//DOM

//получение ссылок на элементы

const title = document.querySelector('h1')
const btn = document.querySelector('#btn') //по индетификатору
const subtitle = document.querySelector('.title.gray') //по class
const section = document.querySelectorAll('section')

const btn2 = document.getElementById('btn')
const subtitle2 = document.getElementsByClassName('title gray') //<section>  <h2 class="title">Third section</h2>  </section>
const sections2 = document.querySelectorAll('section')

//toggle visibility

const btnVis = document.getElementById('toggle-btn')
const div = document.querySelector('.element')

function toggleDivVisibility() {
	div.classList.toggle('hide')
}

btnVis.addEventListener('click', toggleDivVisibility)

let accordions = document.querySelectorAll('.accordion')
accordions.forEach(accordion => accordion.addEventListener('click', toggle))
function toggle() {
	this.nextElementSibling.classList.toggle('show')
}

const btns = document.querySelectorAll('[data-clicked]')

btns.forEach(btn => btn.addEventListener('click', addClick))
function addClick(event) {
	event.target.dataset.clicked++
}

const btnListner = document.querySelector('button')
btnListner.addEventListener('click', handleEvent)
function handleEvent(event) {
	console.log(event)
}

//todo-list (local storage practice)

const list = document.getElementById('todos')
document.querySelector('.add-task').addEventListener('click', handleClick)
document.addEventListener('DOMContentLoaded', loadTodos)

function handleClick() {
	const newTodo = this.previousElementSibling.value.trim()

	if (newTodo) {
		createTodo(newTodo)
		saveToStorage(newTodo)
		this.previousElementSibling.value = ''
	} else {
		alert('input field is empty ')
	}
}

function saveToStorage(todo) {
	const todos = JSON.parse(localStorage.getItem('tasks')) || []

	localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}

function loadTodos() {
	const todos = JSON.parse(localStorage.getItem('tasks'))

	if (todos) {
		todos.forEach(todo => createTodo(todo))
	}
}

function createTodo(text) {
	const li = document.createElement('li')
	li.innerText = text
	li.className = 'todo-item'
	li.addEventListener('click', removeTodo)

	list.appendChild(li)
}

function removeTodo() {
	this.removeEventListener('click', removeTodo)
	this.remove()
	removeLocalStorage(this.innerText)
}
function removeLocalStorage(todo) {
	const todos = JSON.parse(localStorage.getItem('tasks')).filter(
		obj => obj !== todo
	)
	localStorage.setItem('tasks', JSON.stringify(todos))
}

//модальное окно

document.querySelector('#myBtn').addEventListener('click', toggleSpoiler)

function toggleSpoiler() {
	const spoiler = document.querySelector('#spoiler')
	spoiler.classList.toggle('closed')

	if (spoiler.classList.contains('closed')) {
		dettachSpoilerEvents()
	} else {
		attachSpoilerEvents()
	}
}
function dettachSpoilerEvents() {
	document.removeEventListener('keydown', handleEscape)
}
function attachSpoilerEvents() {
	document.addEventListener('keydown', handleEscape)
}
function handleEscape(e) {
	if (e.key === 'Escape') toggleSpoiler()
}

// ООП

// создание классов
class Player {
	static totalPlayers = 0 // статическое свойство
	#score // приватное свойство

	constructor(login, firstName, lastName, score = 100) {
		this.firstName = firstName
		this.lastName = lastName
		this.login = login
		this.#score = score
		Player.totalPlayers++
	}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	set fullName(name) {
		const [f, l] = name.split(' ')
		this.firstName = f
		this.lastName = l
	}

	get score() {
		return this.#score
	}

	incrementScore(num = 10) {
		this.#score += num // изменяем приватное свойство
	}

	decrementScore(num = 10) {
		this.#score -= num // изменяем приватное свойство
	}

	static create(login) {
		return new Player(login, 234) //статический метод
	}

	static sortByScore(a, b) {
		return a.score - b.score
	}
}

const player1 = new Player('Vanya')
const player2 = new Player('Edik', 200)
player1.incrementScore()
console.log(player1, player1.score)

const p1 = Player.create

const p2 = new Player('z', 'Vadya', 'Proxima')
console.log(p2.fullName)
p2.lastName = 'Levi'
console.log(p2.fullName)
p2.fullName = 'Stas Ubica'
console.log(p2)

//наследование классов
class CasinoEnjoyers extends Player {
	static totalPlayers = 0 //статические свойства. totalPlayers - частный случай для CasinoEnjoyers

	constructor(login, score = 100, balance = 1000) {
		super(login, score)
		this.balance = balance
		CasinoEnjoyers.totalPlayers++
	}
	incrBalance(dep = 10) {
		this.balance += dep
	}

	static create(login) {
		return new CasinoEnjoyers(login, 234, 23123) //статический метод
	}
}
const pp1 = new CasinoEnjoyers('ludik', 10, 200)
pp1.incrBalance()
console.log(pp1)

console.log(Player.totalPlayers)

const playersArr = []
playersArr[0] = new Player('tom', 20)
playersArr[1] = new Player('otm', 201)
playersArr[2] = new Player('mot', 10)
playersArr[3] = new Player('tmo', 5)
playersArr[4] = new CasinoEnjoyers('vlad', 123, 20)
playersArr[4] = new CasinoEnjoyers('stas', 103, 200)

console.log(playersArr.sort(Player.sortByScore))

//паттерны проектирования

//порождающие
//singleton - порождающий паттерн, у класса есть только 1 экземпляр и предоставляет к нему глобальную точку доступа
//создаем пользователя и админа, админ может быть только один

class User {
	constructor(login, email) {
		this.login = login
		this.email = email
		this.role = 'user'
	}
}

class Admin extends User {
	static instance = null

	constructor(login, email) {
		if (Admin.instance) {
			return Admin.instance // принято возвращать существующий экземпляр
		}

		super(login, email)
		this.role = 'admin'
		Admin.instance = this
	}
}

//фабричный
class UserCreator {
	static userList = {
		user: User,
		admin: Admin,
	}

	static create(login, email, role = 'user') {
		const UserType = UserCreator.userList[role] || UserCreator.userList['user'] // Default to User
		const instance = new UserType(login, email)
		instance.role = role
		return instance
	}
}

const user1 = UserCreator.create('User1', 'user1@mail.com')
const admin1 = UserCreator.create('Admin1', 'admin1@mail.com', 'admin')
console.log(user1, admin1)

//структурные

// адаптер

class UserCreator2 {
	static userList = {
		user: User,
		publisher: Admin, //поменялось название админа
	}

	static createUser(login, email, role = 'user') {
		//поменялось название функции/библиотеки/чего угодно
		const UserType =
			UserCreator2.userList[role] || UserCreator2.userList['user']
		const instance = new UserType(login, email)
		instance.role = role
		return instance
	}
}
//адаптируемся под изменения
class UserAdapter {
	static userList = {
		user: 'user',
		admin: 'publisher',
	}

	static create(login, email, role = 'user') {
		const mappedRole = UserAdapter.userList[role] || 'user'
		return UserCreator2.createUser(login, email, mappedRole)
	}
}

const user3 = UserAdapter.create('User3', 'user3@mail.com', 'admin')
console.log(user3)

//фасад - предоставляет простой интерфейс к сложной система классов, библиотеки, фреймворку

class Order {
	constructor(order) {
		this.order = order
		this.status = 'received'

		KitchenTask.createTask(this)
	}
}

class KitchenTask {
	constructor(task) {
		this.task = task.order
		this.statu = 'preparing'
	}

	static createTask(task) {
		const kTask = new KitchenTask(task)

		setTimeout(() => {
			DeliveryTask.createTask(kTask)
		}, 3000)
	}
}

class DeliveryTask {
	constructor(task) {
		this.task = task.task
		this.status = 'in delivery'
	}

	static createTask(task) {
		const dTask = new DeliveryTask(task)

		setTimeout(() => {
			dTask.status = 'complete'
		}, 3000)
	}
}

//поведенческие паттерны

//наблюдатель - механизм подписки, позволяющий одним объектам следить и реагировать на события происходящие в др. объектках
class Post {
	constructor(title, subtitle) {
		this.title = title
		this.subtitle = subtitle
	}
}

class Editor {
	#observers = []

	constructor(login, role = 'editor') {
		this.login = login
		this.role = role
		this.posts = []
	}

	createPost(title, subtitle) {
		const post = new Post(title, subtitle)

		this.posts.push(post)
		this.notify(post)
	}

	attach(observer) {
		const isExist = this.#observers.includes(observer)

		if (isExist) return

		this.#observers.push(observer)
		console.log('эдитор получил нового обозревателя')
	}
	detach(observer) {
		const observerIndex = this.#observers.indexOf(observer)

		if (observerIndex === -1) {
			return console.log('обозреватель не был найден')
		}

		this.#observers.slice(observerIndex, 1)
		console.log('эдитор удалил обозревателя')
	}
	notify(post) {
		for (const observer of this.#observers) {
			observer.update(this.login + 'опубликовал пост' + JSON.stringify(post))
		}
	}
}

class Admin52 {
	constructor(login, role = 'admin') {
		this.login = login
		this.role = role
	}

	update(subject) {
		console.log(subject)
	}
}

const editor1 = new Editor('Stas');
const editor2 = new Editor('German');
const admin52 = new Admin52('NGG')

editor1.attach(admin52)
editor1.createPost('da zdravstvuet', 'saint-petersburg')