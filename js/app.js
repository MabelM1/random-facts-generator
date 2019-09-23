'use strict'

//const apiUrl = 'https://api.openbrewerydb.org/breweries?by_state=new_york'
const apiUrl = 'http://numbersapi.com/random/trivia?json'
const triviaField = document.querySelector('.trivia');

const submitButton = document.querySelector('.submit');

const dataFallback = ["2 is the only even prime number", "0 Is the Only Number That Can’t Be Represented In Roman Numerals", "13 are the weeks in a season"]



function randomNumber() {
	return Math.round(Math.random() * 2)
}

function handleErrors(response) {
	if(!response.ok) {
		throw new Error((response.status + ' ' + response.statusText))
	}
	return response.json()
}

function updateUISuccess(data) {	
	triviaField.textContent = data.text
}

function updateUIError (error) {

	console.log('error', error)
	triviaField.textContent = dataFallback[randomNumber()]
}

function createRequest (url, succeed, fail) {
	fetch(apiUrl, {
	"method": "GET"
	 
	})
	.then((response) => handleErrors(response))
	.then((data) => succeed(data))
	.catch((error) => fail(error))
}


submitButton.addEventListener('click', function() {
	createRequest (apiUrl, updateUISuccess , updateUIError)
},false)