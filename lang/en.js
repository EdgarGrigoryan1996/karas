const titlesText = [
	// "MENU",
	"Appetizers",
	"Only Meat",
	"Barbecue",
	"Sandwiches",
	"Soups",
	"Salads",
	"Sides",
	"Dessert",
	"Family Combos",
	"Beverages",
	// "«Կարաս»-ի հատուկ փայտե վառարանում պատրաստված խորոված",
	// "Տաք ուտեստներ",

	// "Փայտե վառարանում պատրաստված ուտեստներ",
	// "Սենդվիչներ / Բուրգերներ",

	// "Թեյ / Սուրճ"
]














const texts = {
	appetizers: [
		{
			title: "Hummus",
			description: "",
			price: "3,9"
		},
		{
			title: "Tzatziki",
			description: "",
			price: "3,9"
		},
		{
			title: "Ajika",
			description: "",
			price: "3,9"
		},
		{
			title: "Pickled vegetables",
			description: "",
			price: "8,9"
		},
		{
			title: "Pickled veg. small",
			description: "",
			price: "4,5"
		},
		{
			title: "Bread",
			description: "",
			price: "2"
		},
	],

	onlyMeat: [
		{
			title: "Pork Ribs",
			description: "",
			price: "12,9"
		},
		{
			title: "Lamb BBQ",
			description: "",
			price: "12,9"
		},
		{
			title: "Chicken BBQ",
			description: "",
			price: "8,9"
		},
		{
			title: "Beef BBQ",
			description: "",
			price: "13,9"
		},
		{
			title: "Lamb Chops",
			description: "",
			price: "18,5"
		},
		{
			title: "Beef Lula",
			description: "",
			price: "6,95"
		},
		{
			title: "Chicken Lula",
			description: "",
			price: "6,95"
		},

	],
	bbq: [
		{
			title: "Chicken BBQ",
			description: "",
			price: "13,9"
		},
		{
			title: "Beef bbq",
			description: "",
			price: "18,90"
		},
		{
			title: "Lamb BBQ",
			description: "",
			price: "17,9"
		},
		{
			title: "Lamb Chops",
			description: "",
			price: "24,5"
		},
		{
			title: "Pork ribs",
			description: "",
			price: "17,9"
		},
		{
			title: "Rotisserie Chicken with French Fries",
			description: "",
			price: "12,9"
		},
		{
			title: "Chicken lula plate",
			description: "",
			price: "13,9"
		},
		{
			title: "Beef lula plate",
			description: "",
			price: "14,5"
		},


	],
	sandwiches: [
		{
			title: "Chicken bbq wrap",
			description: "",
			price: "9,9"
		},
		{
			title: "Pork bbq wrap",
			description: "",
			price: "9,9"
		},
		{
			title: "Cheezy Wrap",
			description: "",
			price: "9,9"
		},
		{
			title: "Chicken lula wrap",
			description: "",
			price: "9,9"
		},
		{
			title: "Beef lula wrap",
			description: "",
			price: "9,9"
		},
		{
			title: "Chicken Shawarma",
			description: "",
			price: "8,9"
		},

		{
			title: "Pork Shawarma",
			description: "",
			price: "9,9"
		},
		{
			title: "Special Karas Combo",
			description: "",
			price: "12,9"
		},
		{
			title: "Mega Chicken Shawarma",
			description: "",
			price: "14,5"
		},
		{
			title: "Mega Pork Shawarma",
			description: "",
			price: "15,5"
		},


	],

	soups: [
		{
			title: "Spas",
			description: "",
			price: "8,9"
		},
		{
			title: "Borscht with meat",
			description: "",
			price: "8,9"
		},
	],

	salads: [
		{
			title: "Caesar salad",
			description: "",
			price: "8,5"
		},
		{
			title: "Caesar salad with chicken",
			description: "",
			price: "10,5"
		},
		{
			title: "Caesar salad with chicken small",
			description: "",
			price: "5,9"
		},
		{
			title: "Caesar  salad small",
			description: "",
			price: "4,5"
		},
		{
			title: "Summer salad",
			description: "",
			price: "7,5"
		},
		{
			title: "Summer salad small",
			description: "",
			price: "3,95"
		},
	],
	sides: [
		{
			title: "French fries",
			description: "",
			price: "3,9"
		},
		{
			title: "Roasted potatoes",
			description: "",
			price: "3,9"
		},
		{
			title: "Rice",
			description: "",
			price: "3,9"
		},
	],

	deserts: [
		{
			title: "Baklava",
			description: "",
			price: "6,9"
		},
	],
	beverages: [
		{
			title: "Coca Cola Mexican",
			description: "",
			price: "3,9"
		},
		{
			title: "Coca Cola Can",
			description: "",
			price: "1,9"
		},
		{
			title: "Lemonade",
			description: "",
			price: "3,2"
		},
		{
			title: "Crystal Water",
			description: "",
			price: "1,9"
		},
		{
			title: "Tan",
			description: "",
			price: "3,2"
		},
		{
			title: "Okroshka",
			description: "",
			price: "3,9"
		},
		{
			title: "Sparkling water",
			description: "",
			price: "3,2"
		},
		{
			title: "Compote",
			description: "",
			price: "6,9"
		},
		{
			title: "Tea",
			description: "",
			price: "1,9"
		},
		{
			title: "Coffee",
			description: "",
			price: "1,9"
		},
		// {
		// 	title: "Pellegrino",
		// 	description: "",
		// 	price: "3,9"
		// },
		{
			title: "Evian Water",
			description: "",
			price: "3,9"
		},
	]
}
const combos = {
	combo1: ["COMBO #1","Pork Ribs","Lamb BBQ","Chicken breast","Beef BBQ","Beef Lula","Chicken Lula","Roasted Potatoes","Green Pepper","Rice","Hummus","Ajika","BBQ sauce", "Lavash","Onion","86,9$"],
	combo2: ["COMBO #2","Pork Ribs", "Lamb BBQ", "Chikcen breast" ,"Beef BBQ", "Roasted Potatoes",  "Green Pepper" ,"Rice", "Hummus", "Ajika", "BBQ sauce", "Lavash", "Onion","63,9$"],
	combo3: ["COMBO #3","Any wrap", "French Fries", "Hummus", "Ajika", "BBQ sauce", "Onion","66$"],
	combo4: ["COMBO #4", "Chicken breast", "Beef BBQ", "Beef Lula", "Chicken Lula","Rice", "Roasted Potatoes", "Green Pepper", "Tomato", "Hummus", "Ajika", "BBQ sauce", "Lavash", "Onion","139,9$"],
	combo5: ["COMBO #5", "Pork Ribs", "Lamb BBQ", "Chicken breast", "Beef BBQ", "Beef Lula", "Chicken Lula", "Roasted Potatoes", "Green Pepper", "Tomato", "Pickled Vegetables", "Summer salad", "Rice", "Hummus", "Ajika", "BBQ sauce", "Lavash", "Onion","199,9$"],
	expressCombo: ["EXPRESS COMBO","Beef Lula", "Chicken Lula", "Roasted Potatoes", "Green Pepper","Rice", "Hummus", "Ajika", "BBQ sauce", "Lavash", "Onion","47,9$"]
}

function changeLanguage(category, languageData) {
	for (let i = 0; i < category.length; i++) {
		category[i].children[0].children[0].innerHTML = texts[languageData][i].title
		category[i].children[0].children[1].innerHTML = texts[languageData][i].description
		category[i].children[1].innerHTML = texts[languageData][i].price + "$"
	}
}
function  changeComboLang(combo,data){
	for(let i = 0; i < combo.length; i++){
		combo[i].innerHTML = combos[data][i]
	}
}
function changeTitleLanguage(titles) {
	for (let i = 0; i < titles.length; i++) {
		titles[i].children[0].innerHTML = titlesText[i]
	}
}

// function changeFooterLanguage() {
// 	const footer = document.querySelector("footer")
// 	footer.children[0].children[0].innerHTML = footerText[0]
// }
// changeFooterLanguage()


const titles = document.querySelectorAll('.title-lang');

changeTitleLanguage(titles)

const appetizers = document.querySelectorAll('.appetizers-lang');
const onlyMeat = document.querySelectorAll('.onlyMeat-lang');
const bbq = document.querySelectorAll('.bbq-lang');
const sandwiches = document.querySelectorAll('.sandwiches-lang');
const soups = document.querySelectorAll('.soups-lang');
const salads = document.querySelectorAll('.salads-lang');
const sides = document.querySelectorAll('.sides-lang');
const deserts = document.querySelectorAll('.deserts-lang');
const beverages = document.querySelectorAll('.beverages-lang');


changeLanguage(appetizers, "appetizers")
changeLanguage(onlyMeat, "onlyMeat")
changeLanguage(bbq, "bbq")
changeLanguage(sandwiches, "sandwiches")
changeLanguage(soups, "soups")
changeLanguage(salads, "salads")
changeLanguage(sides, "sides")
changeLanguage(deserts, "deserts")
changeLanguage(beverages, "beverages")

const combo1 = document.querySelectorAll(".combo1-lang")
const combo2 = document.querySelectorAll(".combo2-lang")
const combo3 = document.querySelectorAll(".combo3-lang")
const combo4 = document.querySelectorAll(".combo4-lang")
const combo5 = document.querySelectorAll(".combo5-lang")
const expressCombo = document.querySelectorAll(".expressCombo-lang")


changeComboLang(combo1, "combo1")
changeComboLang(combo2, "combo2")
changeComboLang(combo3, "combo3")
changeComboLang(combo4, "combo4")
changeComboLang(combo5, "combo5")
changeComboLang(expressCombo, "expressCombo")




