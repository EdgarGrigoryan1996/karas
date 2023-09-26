const titlesText = [
	"Նախուտեստներ",
	"Միայն միս",
	"Խորոված",
	"Սենդվիչներ",
	"Ապուրներ",
	"Աղցաններ",
	"Խավարտներ",
	"Աղանդեր",
	"Ընտանեկան կոմբոներ",
	"Ըմպելիքներ",
]

const texts = {
	appetizers: [
		{
			title: "Հումմուս",
			description: "",
			price: "3,9"
		},
		{
			title: "Ձաձիկի",
			description: "",
			price: "3,9"
		},
		{
			title: "Աջիկա",
			description: "",
			price: "3,9"
		},
		{
			title: "Թթու",
			description: "",
			price: "8,9"
		},
		{
			title: "Թթու փոքր",
			description: "",
			price: "4,5"
		},
		{
			title: "Հաց",
			description: "",
			price: "2"
		},
	],

	onlyMeat: [
		{
			title: "Խոզի կողիկներ",
			description: "",
			price: "12,9"
		},
		{
			title: "Գառան մսի խորոված",
			description: "",
			price: "12,9"
		},
		{
			title: "Հավի մսի խորոված",
			description: "",
			price: "8,9"
		},
		{
			title: "Տավարի մսի խորոված",
			description: "",
			price: "13,9"
		},
		{
			title: "Գառան չալաղաջ",
			description: "",
			price: "18,5"
		},
		{
			title: "Տավարի քյաբաբ",
			description: "",
			price: "6,95"
		},
		{
			title: "Հավի քյաբաբ",
			description: "",
			price: "6,95"
		},

	],
	bbq: [
		{
			title: "Հավի մսի խորոված",
			description: "",
			price: "13,9"
		},
		{
			title: "Տավարի մսի խորոված",
			description: "",
			price: "18,9"
		},
		{
			title: "Գառան մսի խորոված",
			description: "",
			price: "17,9"
		},
		{
			title: "Գառան չալաղաջ",
			description: "",
			price: "24,5"
		},
		{
			title: "Խոզի կողիկներ",
			description: "",
			price: "17,9"
		},
		{
			title: "Հավի գրիլ կարտոֆիլ ֆրիով",
			description: "",
			price: "12,9"
		},
		{
			title: "Հավի քյաբաբ, խավարտ",
			description: "",
			price: "13,9"
		},
		{
			title: "Տավարի քյաբաբ, խավարտ",
			description: "",
			price: "14,5"
		},
	],
	sandwiches: [
		{
			title: "Հավի խորովածով բրդուճ",
			description: "",
			price: "9,9"
		},
		{
			title: "Խոզի խորովածով բրդուճ",
			description: "",
			price: "9,9"
		},
		{
			title: "Պանրային բրդուճ",
			description: "",
			price: "9,9"
		},
		{
			title: "Հավի քյաբաբով բրդուճ",
			description: "",
			price: "9,9"
		},
		{
			title: "Տավարի քյաբաբով բրդուճ",
			description: "",
			price: "9,9"
		},
		{
			title: "Հավի շաուրմա",
			description: "",
			price: "8,9"
		},

		{
			title: "Խոզի շաուրմա",
			description: "",
			price: "9,9"
		},
		{
			title: "Կարասի հատուկ կոմբո",
			description: "",
			price: "12,9"
		},
		{
			title: "Հավի մեգաշաուրմա",
			description: "",
			price: "14,5"
		},
		{
			title: "Խոզի մեգաշաուրմա",
			description: "",
			price: "15,5"
		},


	],

	soups: [
		{
			title: "Սպաս",
			description: "",
			price: "8,9"
		},
		{
			title: "Մսով բորշչ",
			description: "",
			price: "8,9"
		},
	],

	salads: [
		{
			title: "Կեսար աղցան ",
			description: "",
			price: "8,5"
		},
		{
			title: "Կեսար աղցան հավով",
			description: "",
			price: "10,5"
		},
		{
			title: "Կեսար աղցան հավով (փոքր)",
			description: "",
			price: "5,9"
		},
		{
			title: "Կեսար աղցան (փոքր)",
			description: "",
			price: "4,5"
		},
		{
			title: "Ամառային աղցան",
			description: "",
			price: "7,5"
		},
		{
			title: "Ամառային աղցան (փոքր)",
			description: "",
			price: "3,95"
		},
	],
	sides: [
		{
			title: "Կարտոֆիլ ֆրի",
			description: "",
			price: "3,9"
		},
		{
			title: "Խորոված կարտոֆիլ",
			description: "",
			price: "3,9"
		},
		{
			title: "Բրինձ",
			description: "",
			price: "3,9"
		},
	],

	deserts: [
		{
			title: "Փախլավա",
			description: "",
			price: "6,9"
		},
	],
	beverages: [
		{
			title: "Կոկա-Կոլա (մեքսիկական)",
			description: "",
			price: "3,9"
		},
		{
			title: "Կոկա-Կոլա",
			description: "",
			price: "1,9"
		},
		{
			title: "Լիմոնադ",
			description: "",
			price: "3,2"
		},
		{
			title: "Ջուր",
			description: "",
			price: "1,9"
		},
		{
			title: "Թան",
			description: "",
			price: "3,2"
		},
		{
			title: "Մածնաբրդոշ",
			description: "",
			price: "3,9"
		},
		{
			title: "Հանքային ջուր",
			description: "",
			price: "3,2"
		},
		{
			title: "Կոմպոտ",
			description: "",
			price: "6,9"
		},
		{
			title: "Թեյ",
			description: "",
			price: "1,9"
		},
		{
			title: "Սուրճ",
			description: "",
			price: "1,9"
		},
		// {
		// 	title: "Հանքային ջուր «Pellegrino»",
		// 	description: "",
		// 	price: "3,9"
		// },
		{
			title: "Հանքային ջուր «Evian»",
			description: "",
			price: "3,9"
		},
	]
}
const combos = {
	combo1: ["ԿՈՄԲՈ #1","Խոզի կողիկներ", "Գառան մսի խորոված", "Հավի կրծքամիս", "Տավարի մսի խորոված", "Տավարի քյաբաբ", "Հավի քյաբաբ", "Խորոված կարտոֆիլ", "Կանաչ պղպեղ", "Բրինձ", "Հումուս", "Աջիկա", "BBQ սոուս", "Լավաշ", "Սոխ","86,9$"],
	combo2: ["ԿՈՄԲՈ #2","Խոզի կողիկներ", "Գառան մսի խորոված", "Հավի կրծքամիս", "Տավարի մսի խորոված", "Խորոված կարտոֆիլ", "Կանաչ պղպեղ", "Բրինձ", "Հումուս", "Աջիկա", "BBQ սոուս", "Լավաշ", "Սոխ","63,9$"],
	combo3: ["ԿՈՄԲՈ #3","Ցանկացած սենդվիչ", "Կարտոֆիլ ֆրի", "Հումուս", "Աջիկա", "BBQ սոուս", "Սոխ","66$"],
	combo4: ["ԿՈՄԲՈ #4", "Հավի կրծքամիս", "Տավարի մսի խորոված", "Տավարի քյաբաբ", "Հավի քյաբաբ","Բրինձ", "Խորոված կարտոֆիլ", "Կանաչ պղպեղ", "Լոլիկ",  "Հումուս", "Աջիկա", "BBQ սոուս", "Լավաշ", "Սոխ","139,9$"],
	combo5: ["ԿՈՄԲՈ #5", "Խոզի կողիկներ", "Գառան մսի խորոված", "Հավի կրծքամիս", "Տավարի մսի խորոված", "Տավարի քյաբաբ", "Հավի քյաբաբ", "Խորոված կարտոֆիլ", "Կանաչ պղպեղ", "Լոլիկ", "Թթու", "Ամառային աղցան", "Բրինձ", "Հումուս", "Աջիկա", "BBQ սոուս", "Լավաշ", "Սոխ","199,9$"],
	expressCombo: ["Էքսպրես կոմբո","Տավարի քյաբաբ", "Հավի քյաբաբ", "Խորոված կարտոֆիլ", "Կանաչ պղպեղ", "Բրինձ", "Հումուս", "Աջիկա", "BBQ սոուս", "Լավաշ", "Սոխ","47,9$"],
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
// 	footer.children[0].innerHTML = footerText[0]
// }
//
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