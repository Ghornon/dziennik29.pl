let currentPage = 0;

const check = () => {
	const v = document.getElementById('answer').value.trim().toLowerCase();
	const resultBox = document.getElementById('result');

	if (!v) {
		resultBox.innerHTML = '';
		return;
	}

	const answer = data[currentPage].answer.toLowerCase().split('').reverse().join('');
	const key = data[currentPage].key;

	if (v === answer) {
		resultBox.style.color = '#0b642a';
		resultBox.innerHTML = `<b>Poprawnie! Klucz: ${key}</b>`;
	} else {
		resultBox.style.color = '#8b1111';
		resultBox.innerHTML = '<b>Błędna odpowiedź.</b>';
	}
};

function setCurrentPage(page) {
	currentPage = Math.max(0, Math.min(page, data.length - 1));
	updatePagination();
	updateContent();
	const resultBox = document.getElementById('result');
	resultBox.textContent = '';
	const answerInput = document.getElementById('answer');
	answerInput.value = '';
	answerInput.focus();
}

function updatePagination() {
	const paginationDiv = document.getElementById('pagination');
	paginationDiv.innerHTML = '';

	const total = data.length;
	const maxPages = 7;
	let start = Math.max(0, currentPage - Math.floor(maxPages / 2));
	let end = start + maxPages;

	if (end > total) {
		end = total;
		start = Math.max(0, end - maxPages);
	}

	// Previous button
	const prevBtn = document.createElement('a');
	prevBtn.href = `#${Math.max(0, currentPage - 1)}`;
	prevBtn.textContent = '«';
	prevBtn.className = 'pagination-prev';
	prevBtn.tabIndex = 0;
	if (currentPage === 0) {
		prevBtn.setAttribute('aria-disabled', 'true');
		prevBtn.style.pointerEvents = 'none';
		prevBtn.style.opacity = '0.5';
	}
	prevBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (currentPage > 0) setCurrentPage(currentPage - 1);
	});
	paginationDiv.appendChild(prevBtn);

	// Page buttons
	for (let i = start; i < end; i++) {
		const button = document.createElement('a');
		button.href = `#${i}`;
		button.textContent = i;
		button.tabIndex = 0;
		button.setAttribute('aria-label', `Strona ${i}`);
		button.addEventListener('click', (e) => {
			e.preventDefault();
			setCurrentPage(i);
		});
		if (i === currentPage) {
			button.classList.add('active');
			button.setAttribute('aria-current', 'page');
		}
		paginationDiv.appendChild(button);
	}
	// Next button
	const nextBtn = document.createElement('a');
	nextBtn.href = `#${Math.min(total - 1, currentPage + 1)}`;
	nextBtn.textContent = '»';
	nextBtn.className = 'pagination-next';
	nextBtn.tabIndex = 0;
	if (currentPage >= total - 1) {
		nextBtn.setAttribute('aria-disabled', 'true');
		nextBtn.style.pointerEvents = 'none';
		nextBtn.style.opacity = '0.5';
	}
	nextBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (currentPage < total - 1) setCurrentPage(currentPage + 1);
	});
	paginationDiv.appendChild(nextBtn);
}

function updateContent() {
	const title = document.querySelector('title');
	if (title) {
		title.textContent = `Dziennik 29 — Zagadka ${currentPage}`;
	}

	const titleElement = document.getElementById('title');
	if (titleElement) {
		titleElement.innerHTML = `Odpowiedź do zagadki ${currentPage}`;
	}
}

class Modal {
	constructor() {
		this.modal = document.getElementById('modal');
		this.btn = document.getElementById('tipBtn');

		window.onclick = (event) => {
			if (event.target === this.modal) {
				this.close();
			}
		};
	}
	buildModalHTML(title) {
		let modal = document.getElementById('modal');

		if (!modal) {
			modal = document.createElement('div');
			document.body.appendChild(modal);
		}

		modal.id = 'modal';
		modal.className = 'modal';
		modal.innerHTML = `
            <div class="modal-content">
                <div id="modalTitle" class="modal-title">
                    ${title}
                </div>
                <div id="modalBody" class="modal-body">
                    <div class="form-wrap">
                        <button class="button" id="yesBtn" aria-label="Tak">Tak</button>
                        <button class="button" id="noBtn" aria-label="Nie">Nie</button>
                    </div>
                </div>
            </div>`;
	}

	open() {
		this.modal.style.display = 'block';
	}

	close() {
		this.modal.style.display = 'none';
	}
}

window.addEventListener('DOMContentLoaded', () => {
	updatePagination();
	const hash = window.location.hash.replace('#', '');
	setCurrentPage(Number(hash) || 0);
	updateContent();

	document.getElementById('goBtn').addEventListener('click', check);
	document.getElementById('answer').addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			check();
		}
	});

	const modal = new Modal();

	document.getElementById('tipBtn').addEventListener('click', () => {
		const currentData = data[currentPage];
		modal.buildModalHTML('Czy na pewno chcesz skorzystać z podpowiedzi?');
		modal.open();
		document.getElementById('yesBtn').addEventListener('click', () => {
			const resultBox = document.getElementById('result');
			resultBox.style.color = '#0f1316';
			resultBox.textContent = currentData.tip || 'Brak podpowiedzi.';
			modal.close();
		});
		document.getElementById('noBtn').addEventListener('click', () => {
			modal.close();
		});
	});

	document.getElementById('answerBtn').addEventListener('click', () => {
		const currentData = data[currentPage];
		modal.buildModalHTML('Czy na pewno chcesz zobaczyć rozwiązanie?');
		modal.open();
		document.getElementById('yesBtn').addEventListener('click', () => {
			const resultBox = document.getElementById('result');
			resultBox.style.color = '#0f1316';
			resultBox.innerHTML = `<b>Odpowiedź: ${currentData.answer
				.split('')
				.reverse()
				.join('')}</b><br />${currentData.answerDescription}`;
			modal.close();
		});
		document.getElementById('noBtn').addEventListener('click', () => {
			modal.close();
		});
	});

	const gotoInput = document.getElementById('goToPageInput');

	const gotoBtn = document.getElementById('goToPageButton');

	gotoBtn.addEventListener('click', () => {
		let val = parseInt(gotoInput.value, 10);
		if (!isNaN(val)) {
			val = Math.max(0, Math.min(data.length - 1, val));
			setCurrentPage(val);
		}
	});

	gotoInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			let val = parseInt(gotoInput.value, 10);
			if (!isNaN(val)) {
				val = Math.max(0, Math.min(data.length - 1, val));
				setCurrentPage(val);
			}
		}
	});

	document.getElementById('answer').focus();
});
