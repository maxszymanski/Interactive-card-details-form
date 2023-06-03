const cardSide = document.querySelector('.card__info')
const confirmSide = document.querySelector('.confirm')
const submitBtn = document.querySelector('.card__form-btn')
const confirmBtn = document.querySelector('.confirm__btn')
const nameInput = document.querySelector('.card__input-name')
const numberInput = document.querySelector('.card__input-number')
const monthInput = document.querySelector('.card__input--month')
const yearInput = document.querySelector('.card__input--year')
const cvcInput = document.querySelector('.card__input--cvc')
let cardName = document.querySelector('.card__front-name')
let cardNumber = document.querySelector('.card__front-number')
let cardMonth = document.querySelector('.date-month')
let cardYear = document.querySelector('.date-year')
let cardCvc = document.querySelector('.card__back-cvc')
let errorName = document.querySelector('.error-name')
let errorNumber = document.querySelector('.error-number')
let errorDate = document.querySelector('.error-date')
let errorCvc = document.querySelector('.error-cvc')

let regexName =
	/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
let regexNumber = /^[\d\s]+$/
let regexMonth = /^(0[1-9]|1[0-2])+$/
let regexYear = /^(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])+$/
let regexCvc = /^[\d{1,3}]+$/

numberInput.oninput = function () {
	let spacetext = this.value.split(' ').join('')
	if (spacetext.length > 0) {
		spacetext = spacetext.match(new RegExp('.{1,4}', 'g')).join(' ')
	}
	this.value = spacetext
}

const checkName = () => {
	if (nameInput.value.match(regexName) && nameInput.value != '') {
		cardName.textContent = nameInput.value
		nameInput.classList.remove('border-error')
		errorName.textContent = ''
	}
	if (nameInput.value === '') {
		cardName.textContent = 'jane Appleseed'
		errorName.textContent = ''
		nameInput.classList.remove('border-error')
	}
	if (!nameInput.value.match(regexName) && nameInput.value !== '') {
		errorName.textContent = "Wrong format, can't use special characters or numbers"
		nameInput.classList.add('border-error')
	}
}

const checkNumber = () => {
	if (numberInput.value.match(regexNumber) && numberInput.value != '') {
		cardNumber.textContent = numberInput.value
		numberInput.classList.remove('border-error')
		errorNumber.textContent = ''
	}
	if (numberInput.value === '') {
		cardNumber.textContent = '0000 0000 0000 0000'
		errorNumber.textContent = ''
		numberInput.classList.remove('border-error')
	}
	if (!numberInput.value.match(regexNumber) && numberInput.value !== '') {
		errorNumber.textContent = 'Wrong format, numbers only'
		numberInput.classList.add('border-error')
	}
}

const checkMonth = () => {
	if (monthInput.value.match(regexMonth) && monthInput.value != '') {
		cardMonth.textContent = monthInput.value
		monthInput.classList.remove('border-error')
		errorDate.textContent = ''
	}
	if (monthInput.value === '') {
		cardMonth.textContent = '00'
		errorDate.textContent = ''
		monthInput.classList.remove('border-error')
	}
	if (!monthInput.value.match(regexMonth) && monthInput.value !== '') {
		errorDate.textContent = 'Wrong format, choose from 01 to 12'
		monthInput.classList.add('border-error')
	}
	if (!monthInput.value.match(regexMonth) && monthInput.value.length < 2) {
		errorDate.textContent = ''
		monthInput.classList.remove('border-error')
	}
}
const checkYear = () => {
	if (yearInput.value.match(regexYear) && yearInput.value != '') {
		cardYear.textContent = yearInput.value
		yearInput.classList.remove('border-error')
		errorDate.textContent = ''
	}
	if (yearInput.value === '') {
		cardYear.textContent = '00'
		errorDate.textContent = ''
		yearInput.classList.remove('border-error')
	}
	if (!yearInput.value.match(regexYear) && yearInput.value !== '') {
		errorDate.textContent = 'Wrong format, numbers only'
		yearInput.classList.add('border-error')
	}
	if (!yearInput.value.match(regexYear) && yearInput.value.length < 2) {
		errorDate.textContent = ''
		yearInput.classList.remove('border-error')
	}
}
const checkCvc = () => {
	if (cvcInput.value.match(regexCvc) && cvcInput.value != '') {
		cardCvc.textContent = cvcInput.value
		cvcInput.classList.remove('border-error')
		errorCvc.textContent = ''
	}
	if (cvcInput.value === '') {
		cardCvc.textContent = '000'
		errorCvc.textContent = ''
		cvcInput.classList.remove('border-error')
	}
	if (!cvcInput.value.match(regexCvc) && cvcInput.value !== '') {
		errorCvc.textContent = 'Wrong format, numbers only'
		cvcInput.classList.add('border-error')
	}
	if (!cvcInput.value.match(regexCvc) && cvcInput.value.length < 2) {
		errorCvc.textContent = ''
		cvcInput.classList.remove('border-error')
	}
}

const submit = () => {
	if ((!nameInput.value.match(regexName) && nameInput.value !== '') || nameInput.value == '') {
		errorName.textContent = 'Please, complete the name'
		nameInput.classList.add('border-error')
	}
	if ((!numberInput.value.match(regexNumber) && numberInput.value !== '') || numberInput.value == '') {
		errorNumber.textContent = 'Please, complete the card number'
		numberInput.classList.add('border-error')
	}
	if (numberInput.value.length < 19) {
		errorNumber.textContent = 'the number must consist of twelve digits'
		numberInput.classList.add('border-error')
	}
	if ((!monthInput.value.match(regexMonth) && monthInput.value !== '') || monthInput.value == '') {
		errorDate.textContent = 'Please, complete the data'
		monthInput.classList.add('border-error')
	}
	if ((!yearInput.value.match(regexYear) && yearInput.value !== '') || yearInput.value == '') {
		errorDate.textContent = 'Please, complete the data'
		yearInput.classList.add('border-error')
	}
	if ((!cvcInput.value.match(regexCvc) && cvcInput.value !== '') || cvcInput.value == '') {
		errorCvc.textContent = ''
		errorDate.textContent = 'Please, complete the data'
		cvcInput.classList.add('border-error')
	}

	if (
		numberInput.value.length == 19 &&
		nameInput.value.match(regexName) &&
		nameInput.value != '' &&
		numberInput.value.match(regexNumber) &&
		numberInput.value != '' &&
		monthInput.value.match(regexMonth) &&
		monthInput.value != '' &&
		yearInput.value.match(regexYear) &&
		yearInput.value != '' &&
		cvcInput.value.match(regexCvc) &&
		cvcInput.value != ''
	) {
		cardSide.classList.toggle('hide')
		confirmSide.classList.toggle('hide')
		cardSide.classList.toggle('show')
		confirmSide.classList.toggle('show')
	}
}

const closeConfirm = () => {
	cardSide.classList.toggle('hide')
	confirmSide.classList.toggle('hide')
	cardSide.classList.toggle('show')
	confirmSide.classList.toggle('show')
	cardName.textContent = 'jane Appleseed'
	cardNumber.textContent = '0000 0000 0000 0000'
	cardMonth.textContent = '00'
	cardYear.textContent = '00'
	cardCvc.textContent = '000'
	nameInput.value = ''
	numberInput.value = ''
	monthInput.value = ''
	yearInput.value = ''
	cvcInput.value = ''
}
submitBtn.addEventListener('click', submit)
confirmBtn.addEventListener('click', closeConfirm)
nameInput.addEventListener('keyup', checkName)
numberInput.addEventListener('keyup', checkNumber)
monthInput.addEventListener('keyup', checkMonth)
yearInput.addEventListener('keyup', checkYear)
cvcInput.addEventListener('keyup', checkCvc)
