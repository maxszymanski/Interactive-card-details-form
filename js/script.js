const cardSide = document.querySelector('.card__info')
const confirmSide = document.querySelector('.confirm')

const submitBtn = document.querySelector('.card__form-btn')
const confirmBtn = document.querySelector('.confirm__btn')

const submit = () => {
	cardSide.classList.toggle('hide')
	confirmSide.classList.toggle('hide')
	cardSide.classList.toggle('show')
	confirmSide.classList.toggle('show')
}
const confirm = () => {
    cardSide.classList.toggle('hide')
	confirmSide.classList.toggle('hide')
    cardSide.classList.toggle('show')
	confirmSide.classList.toggle('show')
}
submitBtn.addEventListener('click', submit)
confirmBtn.addEventListener('click', confirm)
