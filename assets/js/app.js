const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = e => {
	const text = e.target.value.tolowerCase() //przechwytuje treść z inputa

	li.forEach(el => {
		if (el.textContent.tolowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'nones'
		}
	})
}

search.addEventListener('keyup', searchEngine)
