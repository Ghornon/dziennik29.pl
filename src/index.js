const data = [
	{
		answer: '92',
		key: 'brawo',
		tip: 'To powinno być proste, matematyczne zadanie.',
		answerDescription: 'Dodanie dwóch liczb da rozwiązanie.',
	},
	{
		answer: 'awak',
		key: 'torbiel',
		tip: 'Co mogło stać w tym miejscu?',
		answerDescription: 'Ślad w książce wygląda, jakby postawiono na niej kubek z kawą.',
	},
	{
		answer: 'bolg',
		key: 'szyny',
		tip: 'Spójrz na to z innej strony.',
		answerDescription: 'Po obróceniu książki do góry nogami cyfry można odczytać jako litery.',
	},
	{
		answer: 'anerfehC adimariP',
		key: 'czerwień',
		tip: 'To gdzieś w Afryce...',
		answerDescription:
			'Podane liczby to współrzędne GPS wskazujące położenie piramidy Chefrena.',
		error: 'Answer mismatch',
	},
	{
		answer: 'żór',
		key: 'wataha',
		tip: 'Myśl synonimami, a potem barwami.',
		answerDescription:
			'Po odjęciu od słowa torbiel cząstki tor- (której synonim to: szyny) uzyskuje się słowo biel. Biel dodana do czerwieni daje róż.',
		error: 'Answer mismatch',
	},
	{
		answer: '9521648',
		key: 'żelazo',
		tip: 'Podążaj ścieżką liczb.',
		answerDescription:
			'Czytając litery spiralnie (od zewnątrz do środka), można odczytać kolejne liczby.',
	},
	{
		answer: '2653589',
		key: 'cynk',
		tip: 'To bardzo specjalna liczba.',
		answerDescription:
			'Wypisane cyfry to kolejne cyfry liczby pi. Niektóre z nich są błędne – odpowiedzią są zaś poprawne wartości.',
		error: 'Answer mismatch',
	},
	{
		answer: '06936',
		key: 'iluzja',
		tip: 'Poproś Mendelejewa o pomoc.',
		answerDescription:
			'W układzie okresowym każdy pierwiastek chemiczny ma swój numer. Wymnażając te przypisane numery, uzyskuje się odpowiedź.',
	},
	{
		answer: 'naidysbo',
		key: 'nie',
		tip: 'Tylko jedna trasa prowadzi do środka.',
		answerDescription:
			'Podążając jedyną możliwą trasą do środka labiryntu, odczytuje się kolejne litery hasła.',
	},
	{
		answer: 'OCFTI93',
		key: 'pyta',
		tip: 'Telefon, internet, lotnisko.',
		answerDescription:
			'Oba opisy utworzone są według wzoru: telefoniczny numer kierunkowy, dwuliterowa nazwa krajowej domeny internetowej, kod IATA lotniska w mieście. Koloseum wskazuje, że chodzi o włoskie miasto Rzym.',
	},
	{
		answer: 'eraepsekahS',
		key: 'strach',
		tip: 'Kto to napisał?',
		answerDescription:
			'„Oto jest pytanie” to cytat ze sztuki „Hamlet” autorstwa Williama Szekspira. Hasłem jest nazwisko autora.',
		error: 'Answer mismatch',
	},
	{
		answer: 'einatswop',
		key: 'odwar',
		tip: 'Klawiatury wyglądają wszędzie tak samo.',
		answerDescription:
			'Symbole na obrazku przestawione są w takim samym układzie jak ten, który stosowany jest w klawiaturze komputerowej. Wskazuje to na przypisanie liter do znaków. Kolejne znaki w pierwszym wierszu to QWERTY...',
	},
	{
		answer: 'atulaw',
		key: 'bomba',
		tip: 'Sudoku wskazuje konkretne litery.',
		answerDescription:
			'Rozwiązanie sudoku 6x6 pozwala odczytać symbole (a przez to – liczby) odpowiadające poszczególnym kluczom. Każdemu kluczowi przypisane są dwie liczby – wskazują one, które litery z klucza należy przeczytać, aby uzyskać rozwiązanie.',
	},
	{
		answer: 'einawodrabmob',
		key: 'gaz',
		tip: 'Jeden klucz nie jest w odpowiedniej kolejności.',
		answerDescription:
			'Zmieniając kolejność liter w środkowym kluczu w taki sam sposób jak w środkowym napisie, uzyskuje się rozwiązanie.',
	},
	{
		answer: 'obein',
		key: 'motyka',
		tip: 'Można to czytać nie widząc.',
		answerDescription: "Rozwiązanie jest zapisane przy użyciu znaków alfabetu Braille'a.",
	},
	{
		answer: 'zsym',
		key: 'syrena',
		tip: 'Taki wielki a przeszkadza mu taka mała.',
		answerDescription:
			'Po połączeniu kropek widać słonia. Według popularnej teorii słonie najbardziej boją się myszy.',
	},
	{
		answer: 'atemok',
		key: 'lot',
		tip: 'Mastermind!',
		answerDescription:
			'Jest to gra typu mastermind, tylko z literami zamiast klasycznych kolorów. Istnieje kilka dróg prowadzących do rozwiązania: można zacząć od porównania księgi z ostatnią linijką, następnie księgi i egoizmu, a później – klucza 14 z egoizmem.',
	},
	{
		answer: 'sraM',
		key: 'dopalacz',
		tip: 'W tym układzie jesteśmy na trzeciej planecie.',
		answerDescription:
			'Rysunek przedstawia schemat planet Układu Słonecznego – z zaznaczoną czwartą planetą.',
		error: 'Answer mismatch',
	},
	{
		answer: 'raimzeb',
		key: 'molekuła',
		tip: 'oko i zbliż do nosa.\n\nZamknij',
		answerDescription:
			'Rozwiązanie zostało zapisane w dużym rozciągnięciu, tak że da się je odczytać jedynie po zbliżeniu książki do nosa i nachyleniu jej pod dużym kątem.',
		error: 'Answer mismatch',
	},
	{
		answer: '81',
		key: 'lustro',
		tip: 'Litery mogą być daleko od siebie.\nA jak daleko mogą być słowa?',
		answerDescription:
			'Przypisując literom kolejne liczby, można obliczyć odległość pomiędzy literami – czyli różnicę przypisanych im liczb. Po zsumowaniu wszystkich różnic otrzymuje się rozwiązanie.',
	},
	{
		answer: '865924553',
		key: 'port',
		tip: 'Klawiatura telefoniczna ma zarówno litery jak i cyfry.',
		answerDescription:
			'Klawiatura telefonu przypisuje każdej cyfrze kilka liter. Przypisując literom i kluczom odpowiadające im cyfry i ciągi liczbowe, uzyskuje się numer telefonu stanowiący hasło.',
	},
	{
		answer: 'azdeiw',
		key: 'stos',
		tip: 'Każda litera wiersza ma swój adres.',
		answerDescription:
			'Trójki liczb pod tekstem wskazują, które litery należy przeczytać. Kolejne liczby w trójce opisują: wiersz, słowo i literę.',
	},
	{
		answer: '772',
		key: 'pionki',
		tip: 'Połącz litery a zobaczysz cyfry.',
		answerDescription:
			'W słowach – wypisanych jedno nad drugim – występują pary liter: pierwsza litera pierwszego słowa łączy się z pierwszą literą drugiego słowa itd. Po połączeniu kropek na obrazku, zgodnie z parami wskazanymi przez słowa, otrzymuje się rozwiązanie.',
	},
	{
		answer: '425893',
		key: 'deficyt',
		tip: 'Tylko na jeden sposób ten koń może dotrzeć do celu.',
		answerDescription:
			'Koń szachowy, narysowany w prawym dolnym rogu, porusza się w stronę celu znajdującego się w lewym górnym rogu. Skacząc po cyfrach zgodnie z zasadami szachowymi, koń wskazuje rozwiązanie.',
	},
	{
		answer: 'tamotua',
		key: 'jedwab',
		tip: 'Połowy liter nie widać.',
		answerDescription:
			'Na stronie narysowane są połowy liter. Po przyłożeniu prawej krawędzi książki do lustra można odczytać rozwiązanie.',
	},
	{
		answer: '461,01',
		key: 'siedem',
		tip: 'Nie zaokrąglaj żadnej z tych trzech liczb.',
		answerDescription:
			'Gdy klucze zostaną wpisane w pola, zaznaczone pola wskażą nazwy trzech liczb: stałej matematycznej, stosunku podziału oraz zwykłej liczby. Po wpisaniu tych liczb w pola na dole i obliczeniu ich iloczynu uzyskuje się rozwiązanie.',
	},
	{
		answer: 'regnidorhcS',
		key: 'dwa',
		tip: 'Właściciel tego kota zawsze trzymał go w pojemniku.',
		answerDescription:
			'W obrazku kota są umieszczone napisy: martwy i żywy. Jest to nawiązanie do eksperymentu myślowego opublikowanego przez Erwina Schrödingera.',
		error: 'Answer mismatch',
	},
	{
		answer: '936131',
		key: 'pięć',
		tip: 'Każdy sektor to trzy pary liczb opisujących go.',
		answerDescription:
			'Każdej części ciała przypisana jest liczba. Każdy sektor to opis rysunku według schematu. Schematem są trzy pary liczb: liczba wystąpień części ciała i liczba oznaczająca tę część. Rozwiązaniem jest analogiczny opis dolnego sektora.',
	},
	{
		answer: '853',
		key: 'tlen',
		tip: 'Wygląda jak wyświetlacz LED.',
		answerDescription:
			'Należy potraktować rysunek, jakby był schematem wyświetlacza LED. Zapisując nań kolejne cyfry wskazane przez klucze, otrzymuje się zbiór liczb, które należy zsumować, aby poznać rozwiązanie.',
	},
	{
		answer: '82188',
		key: 'PROM',
		tip: 'Każda rzecz rzuca cień, gdy na nią poświecić.',
		answerDescription:
			'Należy przyłożyć ołówek we wskazanym miejscu. Światło (na przykład z latarki w komórce) świecące ze wskazanych miejsc spowoduje, że ołówek rzuci cień na kolejne liczby.',
	},
	{
		answer: '67891',
		key: 'etap',
		tip: 'Brakujący trójkąt jest kilka stron dalej.',
		answerDescription:
			'Należy złożyć narożniki dwóch kolejnych stron książki – tak, aby uzupełnić dziurę w rysunku. Złożone obrazki utworzą liczbę będącą hasłem.',
	},
	{
		answer: 'awon',
		key: 'grzbiet',
		tip: 'Niektóre symbole są do góry nogami.',
		answerDescription:
			'Klucze wskazują, którym symbolom należy przypisać które litery. W rozwiązaniu użyty jest symbol oznaczający literę M, ale umieszczony do góry nogami. Należy potraktować go zatem jako W.',
	},
	{
		answer: 'gdn',
		key: 'rozpad',
		tip: 'To są ciągi prostych rzeczy, których uczysz się już jako dziecko.',
		answerDescription:
			'Każdy ciąg składa się z pierwszych liter znanych ciągów słów. Są to kolejno: dni tygodnia (poniedziałek, wtorek...), liczby (jeden, dwa...) oraz miesiące (styczeń, luty...).',
	},
	{
		answer: '123894',
		key: 'lina',
		tip: 'Liczą się tylko nowe linie.',
		answerDescription:
			'Na końcu książki, w rozdziale: „Notatki”, są do wycięcia takie same kształty. Gdy zostaną ułożone we wskazanych miejscach, dodatkowe linie utworzą liczby stanowiące hasło.',
	},
	{
		answer: 'zculk',
		key: 'długopis',
		tip: 'Jaki kształt obrysowuje świecący punkt?',
		answerDescription:
			'Pod wskazanym adresem znajduje się film, na którym jasny punkt obrysowuje kształt klucza.',
	},
	{
		answer: 'comop',
		key: 'dzień',
		tip: 'Szkoda, że dziennik nie jest prowadzony na przezroczystym papierze...',
		answerDescription:
			'Patrząc pod światło przez jasne okienka lub wycinając je, widać litery na następnej stronie. Litery te – czytane kolejno – utworzą rozwiązanie.',
	},
	{
		answer: 'tknup',
		key: 'on',
		tip: 'Książka też ma grzbiet.',
		answerDescription:
			"Na grzbiecie książki umieszczony jest napis zapisany alfabetem Morse'a. Po transkrypcji uzyskuje się rozwiązanie.",
	},
	{
		answer: 'nogatnep',
		key: 'ostatni',
		tip: 'Kluczem jest też język.',
		answerDescription:
			'Klucze należy przetłumaczyć na odpowiednie języki (angielski, niemiecki, polski). Łącznie dają rozwiązanie.',
	},
	{
		answer: '0542331',
		key: 'płaz',
		tip: 'Trzeba szukać od początku do końca.',
		answerDescription:
			'Trzeba odneleźć zagadki, w których występują pokazane na tej stronie symbole (symbole te pojawiają się we wcześniejszych i późniejszych zagadkach). Po wymnożeniu numerów zagadek, w których pojawiły się symbole, uzyskuje się rozwiązanie.',
	},
	{
		answer: 'snes',
		key: 'akr',
		tip: 'Poskładaj wzór na górze w całość.',
		answerDescription:
			'Po zagięciu strony – tak, aby wzór na górze dopełnił obrazek – z symboli poniżej powstaną litery stanowiące rozwiązanie.',
	},
	{
		answer: 'zrakłap',
		key: 'parzyste',
		tip: 'Co robią zęby kół zębatych?',
		answerDescription:
			'Należy przeczytać litery kluczy naprzemiennie – tak, jakby słowa zazębiały się.',
	},
	{
		answer: '28619',
		key: 'lipa',
		tip: 'Tylko fragmenty linii są pogrubione.',
		answerDescription:
			'Aby odczytać pięć cyfr tworzących rozwiązanie, należy przypatrzeć się kolejnym fragmentom rysunku. Pogrubione fragmenty linii wskazują istotne fragmenty rysunku.',
	},
	{
		answer: 'ipzc',
		key: 'liść',
		tip: 'Symbole były na stronie 11, ale kalendarz musisz mieć swój...',
		answerDescription:
			'Symbole (do ich transkrypcji należy wykorzystać opis z zagadki 11) wskazują dwuliterowe skróty nazw dni tygodnia przypisane do dat. Należy sprawdzić, w które dni tygodnia wypadły pozostałe dwie daty.',
	},
	{
		answer: '60901',
		key: 'odwrotnie',
		tip: 'Policz litery i litery.',
		answerDescription:
			'Każda liczba składa się z dwóch części opisujących łącznie oba przypisane słowa. Pogrubiona część to całkowita liczba liter; dalsza część wskazuje liczbę wystąpień litery I (i). Wymnożenie tych wartości daje rozwiązanie.',
	},
	{
		answer: 'gpdg',
		key: 'uskok',
		tip: 'Te symbole chcą coś pokazać.',
		answerDescription:
			'Symbole są strzałkami kierunkowymi: l – lewo, g – góra, p – prawo, d – dół. Litery na dole to opis kolejnych strzałek (czytając od góry).',
	},
	{
		answer: '021882',
		key: 'obłok',
		tip: 'Kręć 2. i 4. w przeciwną stronę.',
		answerDescription:
			'Dla każdego układu ustala się, co pokaże wskazówka, i wymnaża wskazane liczby. Kierunek obrotu koła pokazuje strzałka, ale – zgodnie z informacją z kluczy – kołami o numerach parzystych należy kręcić w przeciwną stronę.',
	},
	{
		answer: '9258292941',
		key: 'światła',
		tip: 'Ważne są tylko pierwsze litery.',
		answerDescription:
			'Cyfry są przyporządkowane do pierwszych liter słów. Gdy – analogicznie – zostaną przypisane do kluczy, utworzą rozwiązanie.',
	},
	{
		answer: 'somsok',
		key: 'wiek',
		tip: 'Znajdź trzy różnice.',
		answerDescription:
			'Obrazki górny i dolny różnią się w trzech miejscach. Współrzędne tych miejsc, czytane kolejno, utworzą rozwiązanie.',
	},
	{
		answer: '621293',
		key: 'eon',
		tip: 'Arystoteles powiedział jak rozumieć znaki na lewej krawędzi filara.',
		answerDescription:
			'Przytoczony fragment pochodzi z tekstu o czasie. To podpowiedź, aby czarne kreski przy lewej krawędzi słupa potraktować jako wskazówki zegarów.',
	},
	{
		answer: '257679',
		key: 'chód',
		tip: 'Litery już umiesz rozkodować, teraz pora na cyfry.',
		answerDescription:
			'Symbole (do ich transkrypcji należy użyć opisu z zagadki 11) przypisują liczby literom. Rozwiązaniem są liczby przypisane wskazanym kluczom.',
		error: 'Answer mismatch',
	},
	{
		answer: '9701',
		key: 'zwierzę',
		tip: 'Przesuwaj, aż zobaczysz 5 liczb w systemie rzymskim.',
		answerDescription:
			'Kolejne pary wierszy są połowami zapisów liczbowych w systemie rzymskim. Po zsunięciu wierszy – tak, aby utworzyły pełne liczby – należy zsumować wszystkie zapisy.',
	},
	{
		answer: '6383',
		key: 'słońce',
		tip: 'Porównaj obraz dźwięków z zapisem z dziennika.',
		answerDescription:
			'Pod podanym adresem internetowym znajduje się nagranie liczb wraz z wizualizacją ich fal dźwiękowych. Na tej podstawie obrazowi z zagadki przypisuje się kolejne cyfry tworzące rozwiązanie.',
	},
	{
		answer: '9691',
		key: 'głos',
		tip: 'Kiedy wydarzyło się to, co zostało opisane przeciwieństwami?',
		answerDescription:
			'Każdemu z kluczy należy przypisać słowo o przeciwnym znaczeniu. W ten sposób powstaje pytanie o pierwszego człowieka na księżycu. Napis na dole wskazuje, że chodzi o datę roczną lądowania.',
	},
	{
		answer: 'ceinog',
		key: 'lód',
		tip: 'Zamalowane kratki wygladają jak z szachownicy.',
		answerDescription:
			'Po zamalowaniu kratek – według wskazanych współrzędnych – powstaje obrazek wieży szachowej. Rozwiązaniem jest bierka oddalona od niej o 2 pionki.',
	},
	{
		answer: '624',
		key: 'ciepło',
		tip: 'Szukaj dna na górze i uniknij śmierci.',
		answerDescription:
			'Należy przejść od jednego obrazka reprezentującego czas do drugiego obrazka reprezentującego czas, ale po drodze skręcić w stronę obrazka DNA, aby uniknąć przejścia przez obrazek symbolizujący śmierć. Rozwiązaniem są numery tych obrazków.',
	},
	{
		answer: '808902',
		key: 'wodór',
		tip: 'Niektóre słowa ukryte są pionowo.',
		answerDescription:
			'Na tablicy należy odnaleźć słowa, których opisy uzyskamy po wstawieniu kluczy z poprzednich zagadek. Obok każdego z tych słów (to: mrok, bieg, echo) znajduje się liczba dwucyfrowa. Liczby te po wymnożeniu dają rozwiązanie.',
	},
	{
		answer: 'nelt',
		key: 'oni nas widzą',
		tip: 'Najpierw fizyka, potem chemia.',
		answerDescription:
			'Pod wpływem ciepła lód roztapia się, tworząc wodę. Gdy z wody zostanie usunięty wodór, otrzymuje się tlen.',
	},
	{
		answer: 'sutkak',
		key: 'znak',
		tip: 'To jest przepis na rysunek.',
		answerDescription:
			'Rysując zgodnie z opisem, jakby były to kroki po kratkach kartki zeszytu, wraz z długościami kresek otrzymuje się rysunek rozwiązania.',
	},
	{
		answer: 'hcud',
		key: 'jard',
		tip: 'Zamaluj kropki.',
		answerDescription:
			'Po zamalowaniu pól z kropką widoczny będzie obrazek ducha z gry „Pacman”.',
	},
	{
		answer: 'dzajan',
		key: 'rok',
		tip: 'Pod niektórymi literami jest bezdenna przepaść...',
		answerDescription:
			'Po wpisaniu kluczy w odpowiednie miejsca należy przesunąć każdą literę na dno zawierającej ją dziury – zgodnie z podpowiedzią o grawitacji. Niektóre litery wypadną poza kartkę, pozostałe zaś, czytane kolejno (wersami), dadzą rozwiązanie.',
	},
	{
		answer: '541',
		key: 'wenus',
		tip: 'Kineograf wskazuje interesujące liczby.',
		answerDescription:
			'Należy przewertować książkę od początku, patrząc na lewy dolny róg lewych stron. Utworzy ona wówczas kineograf (ang. flipbook), który wskaże kształt litery W. Po zsumowaniu liczb z miejsc, które leżą na linii wskazanego kształtu, otrzymuje się rozwiązanie.',
	},
	{
		answer: 'agawonwór',
		key: 'monolit',
		tip: 'Połóż tu coś, co trwa dokładnie 74 minuty.',
		answerDescription:
			'Długość ścieżki dźwiękowej zapisanej na płycie CD wynosi do 74 minut. Położywszy płytę w wyznaczonym miejscu, wzdłuż jej krawędzi można odczytać rozwiązanie.',
	},
	{
		answer: '7,422',
		key: 'myśl',
		tip: 'Ile trwa dni?',
		answerDescription:
			'Rozwiązaniem jest okres obiegu Wenus wokół słońca, czyli rok na Wenus, wyrażony w ziemskich dniach.',
		error: 'Answer mismatch',
	},
	{
		answer: 'ym ot ino',
		key: '',
		tip: 'Tylko niektóre litery warto czytać.',
		answerDescription:
			'Po wypisaniu kluczy oznaczone ciemnymi symbolami litery utworzą rozwiązanie.',
	},
];

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
		resultBox.innerHTML = '<b>Poprawnie! Klucz: ' + key + '</b>';
	} else {
		resultBox.style.color = '#8b1111';
		resultBox.innerHTML = '<b>Błędna odpowiedź.</b>';
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
	prevBtn.addEventListener('click', (e) => {
		if (currentPage > 0) setCurrentPage(currentPage - 1);
	});
	paginationDiv.appendChild(prevBtn);

	// Page buttons
	for (let i = start; i < end; i++) {
		const button = document.createElement('a');
		button.href = `#${i}`;
		button.textContent = i;
		button.addEventListener('click', (e) => {
			setCurrentPage(i);
		});
		if (i === currentPage) {
			button.classList.add('active');
		}
		paginationDiv.appendChild(button);
	}

	// Next button
	const nextBtn = document.createElement('a');
	nextBtn.href = `#${Math.min(total - 1, currentPage + 1)}`;
	nextBtn.textContent = '»';
	nextBtn.className = 'pagination-next';
	nextBtn.addEventListener('click', (e) => {
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
	const answerInput = document.getElementById('answer');
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
	setCurrentPage(hash | 0);
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

	document.getElementById('answer').focus();
});
