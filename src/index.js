const data = [
	{ answer: '92', key: 'brawo' },
	{ answer: 'awak', key: 'torbiel' },
	{ answer: 'bolg', key: 'szyny' },
	{ answer: 'adimarip', key: 'czerwień' },
	{ answer: 'ywożór', key: 'wataha' },
	{ answer: '9521648', key: 'żelazo' },
	{ answer: '9862', key: 'cynk' },
	{ answer: '06936', key: 'iluzja' },
	{ answer: 'naidysbo', key: 'nie' },
	{ answer: 'OCFTI93', key: 'pyta' },
	{ answer: 'ripskezs mailliw', key: 'strach' },
	{ answer: 'einatswop', key: 'odwar' },
	{ answer: 'atulaw', key: 'bomba' },
	{ answer: 'einawodrabmob', key: 'gaz' },
	{ answer: 'obein', key: 'motyka' },
	{ answer: 'zsym', key: 'syrena' },
	{ answer: 'atemok', key: 'lot' },
	{ answer: 'sram', key: 'dopalacz' },
	{ answer: 'bezmiar', key: 'molekuła' },
	{ answer: '81', key: 'lustro' },
	{ answer: '865924553', key: 'port' },
	{ answer: 'azdeiw', key: 'stos' },
	{ answer: '772', key: 'pionki' },
	{ answer: '425893', key: 'deficyt' },
	{ answer: 'tamotua', key: 'jedwab' },
	{ answer: '461,01', key: 'siedem' },
	{ answer: 'regnidorhcs', key: 'dwa' },
	{ answer: '936131', key: 'pięć' },
	{ answer: '853', key: 'tlen' },
	{ answer: '82188', key: 'PROM' },
	{ answer: '67891', key: 'etap' },
	{ answer: 'awon', key: 'grzbiet' },
	{ answer: 'gdn', key: 'rozpad' },
	{ answer: '123894', key: 'lina' },
	{ answer: 'zculk', key: 'długopis' },
	{ answer: 'comop', key: 'dzień' },
	{ answer: 'tknup', key: 'on' },
	{ answer: 'nogatnep', key: 'ostatni' },
	{ answer: '0542331', key: 'płaz' },
	{ answer: 'snes', key: 'akr' },
	{ answer: 'zrakłap', key: 'parzyste' },
	{ answer: '28619', key: 'lipa' },
	{ answer: 'ipzc', key: 'liść' },
	{ answer: '60901', key: 'odwrotnie' },
	{ answer: 'gpdg', key: 'uskok' },
	{ answer: '021882', key: 'obłok' },
	{ answer: '9258292941', key: 'światła' },
	{ answer: 'somsok', key: 'wiek' },
	{ answer: '621293', key: 'eon' },
	{ answer: '2576790', key: 'chód' },
	{ answer: '9701', key: 'zwierzę' },
	{ answer: '6383', key: 'słońce' },
	{ answer: '9691', key: 'głos' },
	{ answer: 'ceinog', key: 'lód' },
	{ answer: '624', key: 'ciepło' },
	{ answer: '808902', key: 'wodór' },
	{ answer: 'nelt', key: 'oni nas widzą' },
	{ answer: 'sutkak', key: 'znak' },
	{ answer: 'hcud', key: 'jard' },
	{ answer: 'dzajan', key: 'rok' },
	{ answer: '541', key: 'wenus' },
	{ answer: 'agawonwór', key: 'monolit' },
	{ answer: '6,422', key: 'myśl' },
	{ answer: 'ym ot ino', key: '' },
];

let currentPage = 0;

const check = () => {
	const v = document.getElementById('answer').value.trim().toLowerCase();
	const resultBox = document.getElementById('result');

	if (!v) {
		resultBox.textContent = '';
		return;
	}

	const answer = data[currentPage].answer.toLowerCase().split('').reverse().join('');
	const key = data[currentPage].key;

	if (v === answer) {
		resultBox.style.color = '#0b642a';
		resultBox.textContent = 'Poprawnie! Klucz: ' + key;
	} else {
		resultBox.style.color = '#8b1111';
		resultBox.textContent = 'Błędna odpowiedź.';
	}
};

function setCurrentPage(page) {
	currentPage = page;
	console.log('Current page:', currentPage);
	updatePagination();
	updateContent();
	const resultBox = document.getElementById('result');
	resultBox.textContent = '';
	const answareInput = document.getElementById('answer');
	answareInput.value = '';
}

function updatePagination() {
	const paginationDiv = document.getElementById('pagination');
	paginationDiv.innerHTML = '';

	data.forEach((item, index) => {
		const button = document.createElement('a');
		button.href = `#${index}`;
		button.textContent = index;
		button.addEventListener('click', (e) => {
			setCurrentPage(index);
		});
		if (index === currentPage) {
			button.classList.add('active');
		}
		paginationDiv.appendChild(button);
	});
}

function updateContent() {
	const title = document.querySelector('title');
	if (title) {
		title.textContent = `Dziennik 29 — Zagadka ${currentPage}`;
	}

	const titleElement = document.getElementById('title');
	if (titleElement) {
		titleElement.textContent = `Odpowiedź do zagadki ${currentPage}`;
	}
	const answerInput = document.getElementById('answer');
}

window.addEventListener('DOMContentLoaded', () => {
	updatePagination();
	const hash = window.location.hash.replace('#', '');
	setCurrentPage(hash | 0);
	updateContent();

	document.getElementById('goBtn').addEventListener('click', check);
	document.getElementById('answer').addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			check();
		}
	});

	document.getElementById('answer').focus();
});
