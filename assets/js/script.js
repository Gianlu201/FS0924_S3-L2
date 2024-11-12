/* ESERCIZIO 1
  Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const title = document.querySelector('h1');

const changeTitle = function () {
  title.innerText = 'Titolo cambiato';
};

changeTitle();

/* ESERCIZIO 2
  Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  title.classList = 'myHeading';
};

addClassToTitle();

/* ESERCIZIO 3
  Scrivi una funzione per che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  const pCollection = document.querySelectorAll('div p');
  pCollection.forEach((element) => {
    element.innerText = 'Il testo del paragrafo è stato modificato via JS';
  });
};

changePcontent();

/* ESERCIZIO 4
  Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  const aCollection = document.querySelectorAll('a:not(footer a)');
  aCollection.forEach((element) => {
    element.setAttribute('href', 'https://www.google.com');
  });
};

changeUrls();

/* ESERCIZIO 5
  Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const secondUl = document.getElementById('secondList');
  const newLi = document.createElement('li');
  newLi.innerText = 'Nuovo elemento della lista';
  secondUl.appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
  Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {
  const myDiv = document.getElementById('addParagraph');
  const newP = document.createElement('p');
  newP.innerText = `Questo paragrafo è stato creato per l'esercizio 6`;
  myDiv.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
  Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  const firstUl = document.getElementById('firstList');
  firstUl.classList.add('hidden');
};

hideFirstUl();

/* ESERCIZIO 8 
  Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  const myUlList = document.querySelectorAll('ul');
  myUlList.forEach((element) => {
    element.classList.add('bkg-green');
  });
};

paintItGreen();

/* ESERCIZIO 9
  Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
// gestire quando le lettere nel titolo finiscono
const makeItClickable = function () {
  if (title.innerText.length > 0) {
    title.innerText = title.innerText.slice(0, -1);
  }
};

title.addEventListener('click', function (e) {
  makeItClickable();
});

/* ESERCIZIO 10
  Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function (aNode) {
  alert(aNode.getAttribute('href'));
};

const footer = document.querySelector('footer');

footer.addEventListener('click', function () {
  const footerA = document.querySelector('footer a');
  revealFooterLink(footerA);
});

/* ESERCIZIO 11
  Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
  La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

// La tabella fa pena e deve essere corretta graficamente e anche il codice generalizzato!!

const items = [
  {
    img: 'assets/img/img1.png',
    productName: 'penna',
    quantity: 3,
    price: 10,
  },
  {
    img: 'assets/img/img2.png',
    productName: 'gomma',
    quantity: 1,
    price: 3,
  },
  {
    img: 'assets/img/img3.png',
    productName: 'forbice',
    quantity: 1,
    price: 5,
  },
  {
    img: 'assets/img/img4.png',
    productName: 'righello',
    quantity: 2,
    price: 20,
  },
  {
    img: 'assets/img/img5.png',
    productName: 'colla',
    quantity: 2,
    price: 30,
  },
];

const intitolation = ['Immagine', 'Nome prodotto', 'Quantità', 'Prezzo'];

const generateTable = function () {
  const myDiv = document.getElementById('tableArea');
  const myTable = document.createElement('table');

  const newThead = document.createElement('thead');
  newThead.innerHTML = `
  <tr>
      <th>Immagine</th>
      <th>Nome prodotto</th>
      <th>Quantità</th>
      <th>Prezzo</th>
    </tr>
  `;
  myTable.appendChild(newThead);

  const newTbody = document.createElement('tbody');

  items.forEach((element) => {
    newTbody.innerHTML += `
    <tr>
      <td><img src='${element.img}'></td>
      <td>${element.productName}</td>
      <td>${element.quantity}</td>
      <td>${element.price}</td>
    </tr>
    `;
  });

  myTable.appendChild(newTbody);
  myDiv.appendChild(myTable);
};

generateTable();

/* ESERCIZIO 12
  Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const newItem = [
  {
    img: 'assets/img/img6.png',
    productName: 'matita',
    quantity: 5,
    price: 2,
  },
];

const addRow = function () {
  const myTbody = document.querySelector('#tableArea table tbody');

  const newTr = document.createElement('tr');
  newTr.innerHTML += `
    <td><img src='${newItem.img}'></td>
    <td>${newItem.productName}</td>
    <td>${newItem.quantity}</td>
    <td>${newItem.price}</td>
  `;

  myTbody.appendChild(newTr);
};

addRow();

/* ESERCIZIO 14
  Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {
  const imgList = document.querySelectorAll('#tableArea table img');
  imgList.forEach((element) => {
    element.classList.add('hidden');
  });
};

// hideAllImages();

/* EXTRA ESERCIZIO 15
  Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
  Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {};
