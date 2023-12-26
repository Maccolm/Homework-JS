class FindCouple {
	constructor(bgImage, cardImages, rowNum = 4, columnNum = 5, cssObj) {
		this.bgImageSrc = bgImage
		this.cardImages = cardImages
		this.rowNum = rowNum
		this.columnNum = columnNum
		this.clickFlag = true
		this.cssObj = {
			card: 'card',
			cardFront: 'card-front',
			cardBack: 'card-back',
			flipped: 'flipped',
			cardBox: 'card-box',
			checked: 'checked',
			...(cssObj && {})
		}
	}
	getRandomImg() {
		const randomIndex = Math.floor(Math.random() * this.cardImages.length)
		const randomImg = this.cardImages[randomIndex]
		this.cardImages.splice(randomIndex, 1)
		return randomImg
	}

	renderTable() {
		const table = document.createElement('table')
		for (let i = 0; i < this.rowNum; i++) {
			const row = this.getTableRow()
			table.append(row)
		}
		return table
	}
	getTableRow() {
		let tr = document.createElement('tr')
		for (let i = 0; i < this.columnNum; i++) {
			const td = document.createElement('td')
			const cardContainer = document.createElement('div')
			cardContainer.className = this.cssObj.card
			const cardBox = document.createElement('div')
			cardBox.className = this.cssObj.cardBox
			//Створюю лицьову частини картки
			const cardFront = document.createElement('div')
			cardFront.className = this.cssObj.cardFront
			const backgroundImg = document.createElement('img')
			backgroundImg.src = this.bgImageSrc
			cardFront.append(backgroundImg)
			cardBox.append(cardFront)

			// Створюю задню частини картки
			const cardBack = document.createElement('div')
			cardBack.className = this.cssObj.cardBack
			// Вибираю рандомну картинку
			const randomImg = this.getRandomImg()
			cardContainer.setAttribute('photoId', randomImg.id) //присвоюю атрибут для ідентифікації і перевірки
			const img = document.createElement('img')
			img.src = randomImg.img

			cardBack.append(img)
			cardBox.append(cardBack)
			cardContainer.append(cardBox)
			td.append(cardContainer)
			tr.append(td)

			//додаю подію до картки
			cardContainer.onclick = (event) => this.addFlippedCard(event)
		}
		return tr
	}
	addFlippedCard(event) {
		//перевіряю флаг, якщо він false, то забороняю вибір картки
		!this.clickFlag ? this.targetContainer.style.pointerEvents = 'none' : this.targetContainer.style.pointerEvents = 'inherit'
		//перевірити чи не вибрана вже перша карта
		const allCards = document.querySelectorAll('.card')

		const flippedCard = Array.from(allCards).some(card => card.classList.contains(this.cssObj.flipped))

		//якщо ні, то добавляємо клас до першої карти
		if (!flippedCard) {
			this.firstCard = event.currentTarget
			this.firstCard.classList.add(this.cssObj.flipped)
		} else {
			//інакше до другої карти
			this.secondCard = event.currentTarget
			this.secondCard.classList.add(this.cssObj.flipped)
			//забороняю взаємодію з карточками
			this.clickFlag = false
			this.checkCardsId()
		}
	}
	checkCardsId() {
		//отримуємо атрибути двох картинок
		const firstPhotoIdCard = this.firstCard.getAttribute('photoId')
		const secondPhotoIdCard = this.secondCard.getAttribute('photoId')
		//порівнюємо їх, якщо ті самі - залишаю, якщо ні перевертаю назад
		if (firstPhotoIdCard == secondPhotoIdCard) {
			this.firstCard.classList.remove(this.cssObj.flipped)
			this.firstCard.classList.add(this.cssObj.checked)
			this.secondCard.classList.remove(this.cssObj.flipped)
			this.secondCard.classList.add(this.cssObj.checked)
			// дозволяю взаємодію з карточками
			this.clickFlag = true
		} else {
			setTimeout(() => {
				this.firstCard.classList.remove(this.cssObj.flipped)
				this.secondCard.classList.remove(this.cssObj.flipped)
				this.clickFlag = true
			}, 500)
		}
	}
	render(containerId) {
		this.targetContainer = document.getElementById(containerId)
		const table = this.renderTable()
		this.targetContainer.append(table)
	}
}
window.onload = function () {
	const game = new FindCouple(bgImage, images)
	game.render('container')
}
const bgImage = './img/background.png'
const images = [
	{ id: 1, img: './img/1.png' },
	{ id: 2, img: './img/2.png' },
	{ id: 3, img: './img/3.png' },
	{ id: 4, img: './img/4.png' },
	{ id: 5, img: './img/5.png' },
	{ id: 6, img: './img/6.png' },
	{ id: 7, img: './img/7.png' },
	{ id: 8, img: './img/8.png' },
	{ id: 9, img: './img/9.png' },
	{ id: 10, img: './img/10.png' },
	{ id: 1, img: './img/1.png' },
	{ id: 2, img: './img/2.png' },
	{ id: 3, img: './img/3.png' },
	{ id: 4, img: './img/4.png' },
	{ id: 5, img: './img/5.png' },
	{ id: 6, img: './img/6.png' },
	{ id: 7, img: './img/7.png' },
	{ id: 8, img: './img/8.png' },
	{ id: 9, img: './img/9.png' },
	{ id: 10, img: './img/10.png' },
]