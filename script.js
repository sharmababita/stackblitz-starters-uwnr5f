/*

Oppgave

1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc
2. console.log de forskjellige elementene i arrayet
3. lag et <p> element og legg til en av elementene fra array i <p>


Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet

Fontenehuset Bærum
Industriveien 2, 1337 Sandvika
https://www.fontenehuset-baerum.no/ 

4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Trondheim


*/

let tvShows = [
  'Umbrella Academy',
  'The wire',
  'Sopranos',
  'Game of thrones',
  'Silo',
];

/*let paragraf = document.createElement('p');
paragraf.textContent = tvShows[2];
document.body.appendChild(paragraf); */

let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let liste = document.querySelector('#liste');

let handleListe = ['melk', 'brød', 'egg', 'mel'];

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.querySelector('#input').value;
  handleListe.push(input);
  liste.textContent = handleListe;
});

removeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handleListe.pop();
  liste.textContent = handleListe;
});

let person = {
  name: 'Frank',
  city: 'New York',
  age: 54,
  isMarried: false,
};

console.log(person.name);

const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
  },
];

let aTag = document.createElement('a');
aTag.textContent = 'Fontenehuset Trondheim';
aTag.href = fontenehus[2].nettside;
document.body.appendChild(aTag);
