const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(icons)

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
const container = document.getElementById(`container-main`)

for (let i = 0; i < icons.length; i++) {
	const element = icons[i];
	const templateDiv = `
	<div class="icon-container">
		<div class="icon"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
		<div class="icon-title">${element.name}</div>
	</div>
	`
	container.innerHTML += templateDiv
}

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
const filter = document.getElementById(`filter`);
console.log(filter)

// Creo array vuoti dove mettere gli elementi che mi interessano divisi per categorie (animals, vegetables, users)
const animals = [];
const vegetables = [];
const users = [];

// Riempio gli array vuoti appena creati
icons.forEach(icon => {
	switch (icon.type) {
		case 'animal':
			animals.push(icon);
			break;
		case 'vegetable':
			vegetables.push(icon);
			break;
		case 'user':
			users.push(icon);
			break;
	}
});

console.log(animals);
console.log(users);
console.log(vegetables);

// Attraverso un addEventListener faccio in modo che, a seconda della selezione, venga stampata in pagina l'intera lista di icone o solo una parte (stampo solo uno degli array precedentemente creati)
filter.addEventListener(`change`, function(){
	console.log(filter.value)
	switch (filter.value) {
		case `all`:
			container.innerHTML = ``
			icons.forEach(element => {
				container.innerHTML += `
			<div class="icon-container">
				<div class="icon"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
				<div class="icon-title">${element.name}</div>
			</div>
			`
			})
			break;
		case `animals`:
			const colorAnimals = Math.floor(Math.random()*16777215).toString(16)
			container.innerHTML = ``
			animals.forEach(element => {
				container.innerHTML += `
			<div class="icon-container">
				<div class="icon"><i class="${element.family} ${element.prefix}${element.name}" style="color: #${colorAnimals}"></i></div>
				<div class="icon-title">${element.name}</div>
			</div>
			`
			})
			break;
		case `vegetables`:
			const colorVegetables = Math.floor(Math.random()*16777215).toString(16)
			container.innerHTML = ``
			vegetables.forEach(element => {
				container.innerHTML += `
			<div class="icon-container">
				<div class="icon"><i class="${element.family} ${element.prefix}${element.name}" style="color: #${colorVegetables}"></i></div>
				<div class="icon-title">${element.name}</div>
			</div>
			`
			})
			break;
		case `users`:
			const colorUsers = Math.floor(Math.random()*16777215).toString(16)
			container.innerHTML = ``
			users.forEach(element => {
				container.innerHTML += `
			<div class="icon-container">
				<div class="icon"><i class="${element.family} ${element.prefix}${element.name}" style="color: #${colorUsers}"></i></div>
				<div class="icon-title">${element.name}</div>
			</div>
			`
			})
			break;
		
	
		default:
			break;
	}
})

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.