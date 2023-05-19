const titlesText = [
    "MENU",
    "Appetizers",
    "Salads",
    "Karas Special Wood Fire BBQ",
    "Entrees",
    "Soups",
    "Wood Stone Oven",
    "Sandwiches / Burgers",
    "Sides",
    "Desserts",
    "Tea/Coffee"
]

const texts = {
    appetizers:[
        {
            title:"Blinchik with beef"  + `<span><span class='mr-2'> (2</span>PCS) </span>`,
            description:"",
            price:"12.90"
        },
        {
            title:"ARMENIAN CHEESE PLATE",
            description:"Feta Cheese And Herbs",
            price:"16.50"
        },
        {
            title:"PICKLED VEGETABLES",
            description:"Seasonal Vegetables",
            price:"13.90"
        },
        {
            title:"GRILLED VEGETABLE DIP",
            description:"",
            price:"12.50"
        },
        {
            title:"BREAD",
            description:"",
            price:"3.90"
        },
        {
            title:"THREE DIP PLATE",
            description:"Hummus, Tzatziki, Ajika",
            price:"15.90"
        },
        {
            title:"AJIKA",
            description:"",
            price:"7.90"
        },
        {
            title:"HUMMUS",
            description:"",
            price:"7.90"
        },
        {
            title:"TZATZIKI",
            description:"",
            price:"7.90"
        },
        {
            title:"MOZZARELLA STICKS",
            description:"",
            price:"14.90"
        },
        {
            title:"JALAPENO CHEDDAR BITES",
            description:"",
            price:"12.90"
        },
    ],
    salads:[
        {
            title:"CAPRESE SALAD",
            description:"Fresh mozzarella, tomato, balsamic glaze, pesto",
            price:"18.90"
        },
        {
            title:"SUMMER SALAD",
            description:"Tomato, cucumber, bell pepper, herbs",
            price:"13.90"
        },
        {
            title:"OLIVYE SALAD",
            description:"diced potatoes, carrots, pickles, boiled eggs, sweet peas, onions, herbs, and all tossed with a simple dressing with mayonnaise, salt, and pepper",
            price:"15.50"
        },
        {
            title:"*CAESAR SALAD",
            description:"Croutons, parmesan cheese, house dressing",
            price:"13.90",
            withTitle:"/with chicken/",
            extraPrice:"17.90"
        },
        {
            title:"GREEK SALAD",
            description:"Tomato, cucumber, olives, romaine lettuce, feta cheese, herbs",
            price:"15.90"
        },
        {
            title:"*GRAVLAX CAESAR SALAD",
            description:"Romaine lettuce, cherry tomato, shaved parmesan, black olives, coral tuile, gravlax salmon",
            price:"21.50"
        },
        {
            title:"BRUSSELS SPROUT SALAD",
            description:"Bacon, almond, parmesan cheese, balsamic glaze",
            price:"14.90"
        },
    ],
    sides:[
        {
            title:"FRENCH FRIES",
            description:"",
            price:"6.50"
        },
        {
            title:"WHITE RICE",
            description:"",
            price:"5.80"
        },
        {
            title:"TRUFFLE PARMESAN FRIES",
            description:"",
            price:"13.90"
        },
        {
            title:"FIRE ROASTED POTATOES",
            description:"",
            price:"6.20"
        },
        {
            title:"MASHED POTATOES",
            description:"",
            price:"6.20"
        },
        {
            title:"DOUBLE-BAKED POTATO",
            description:"Parmesan cheese, cheddar cheese",
            price:"10.50"
        }
    ],
    bbq:[
        {
            title:"*FAMILY COMBO #1",
            description:"Pork ribs, lamb chops, beef bbq, chicken bbq, beef lula, chicken lula, fire roasted pepper, fire roasted potatoes, rice,hummus, ajika, side salad",
            price:"139.00"
        },
        {
            title:"*FAMILY COMBO #2",
            description:"Pork ribs, lamb chops, beef bbq, chicken bbq, fire roasted pepper, fire roasted potatoes, rice, hummus, ajika, side salad",
            price:"105.00"
        },
        {
            title:"*PORK RIBS",
            description:"Fire roasted pepper, fire roasted potatoes,side salad",
            price:"29.70"
        },
        {
            title:"*LAMB CHOPS",
            description:"Fire roasted pepper, rice, side salad",
            price:"32.50"
        },
        {
            title:"*BEEF BBQ",
            description:"Fire roasted pepper, rice, side salad",
            price:"28.90"
        },
        {
            title:"*CHICKEN BREAST",
            description:"Fire roasted pepper, rice, side salad",
            price:"21.90"
        },
        {
            title:"*BEEF LULA",
            description:"Fire roasted pepper, rice, side salad",
            price:"19.50"
        },
        {
            title:"*CHICKEN LULA",
            description:"Fire roasted pepper, rice, side salad",
            price:"18.40"
        },
        {
            title:"*PORK (IQIBIR) KEBAB WRAP",
            description:"",
            price:"14.40"
        },
        {
            title:"*+LAMB CHOPS ",
            description:"",
            price:"25.50"
        },
        {
            title:"*+BEEF BBQ ",
            description:"",
            price:"23.50"
        },
        {
            title:"*+PORK RIBS ",
            description:"",
            price:"21.90"
        },
        {
            title:"*+BEEF LULA ",
            description:"",
            price:"12.30"
        },
        {
            title:"*+CHICKEN BREAST ",
            description:"",
            price:"15.50"
        },
        {
            title:"*+CHICKEN LULA ",
            description:"",
            price:"11.30"
        }
    ],
    entrees:[
        {
            title:"*PAN FRIED RAINBOW TROUT",
            description:"Yuzu-caper sauce, stimed asparagus, balsamic caviar, tomato caviar",
            price:"29.90"
        },
        {
            title:"*GRILLED SALMON",
            description:"Double-baked potato, yuzu capers sauce, balsamic caviar, tomato caviar",
            price:"33.50"
        },
        {
            title:"*ZHARKOE WITH PORK",
            description:"Pork tender, peewee potatoes, onions, herbs",
            price:"23.50"
        },
        {
            title:"*ARMENIAN SCRAMBLED EGGS",
            description:"Tomatoes, herbs",
            price:"15.50"
        },
        {
            title:"*DOLMA WITH GRAPE LEAVES",
            description:"Grape leaves stuffed with ground beef forcemeat, yogurt garlic sauce, sour cream",
            price:"19.50"
        },
        {
            title:"*DOLMA WITH CABBAGE",
            description:"Cabbage leaves stuffed with seasoned ground beef forcemeat",
            price:"17.90"
        },
        {
            title:"*KHURJIN WITH BEEF (ARMENIAN TRADITIONAL DISH)",
            description:"Crispy baked Lavash bread stuffed with beef stew",
            price:"24.90"
        },
        {
            title:"*ARMENIAN HARISSA",
            description:"Traditional wheat and chicken porridge",
            price:"13.90"
        },
        {
            title:"*ZAMBYUGH WITH CHICKEN",
            description:"A variety of vegetables and herbs in a creamy sauce",
            price:"21.50"
        }
    ],
    soups:[
        {
            title:"BORSCHT WITH MEAT",
            description:"",
            price:"12.50"
        },
        {
            title:"SPAS (YOGURT SOUP)",
            description:"",
            price:"12.50"
        }
    ],
    oven:[
        {
            title:"PEPPERONI PIZZA",
            description:"Tomato sauce, mozzarella, pepperoni",
            price:"21.50"
        },
        {
            title:"MARGHERITA PIZZA ",
            description:"Tomato sauce, mozzarella",
            price:"20.90"
        },
        {
            title:"CHEESE PIZZA ",
            description:"Tomato sauce, fresh mozzarella, Italian basil",
            price:"18.90"
        },
        {
            title:"*ADJARIAN KHACHAPURI",
            description:"Mozzarella, feta cheese, eggs",
            price:"17.50"
        },
        {
            title:"SCHIACCIATA BREAD",
            description:"Garlic, olive oil, rosemary",
            price:"9.90",
            each:"each/"
        },
        {
            title:"LAHMAJOUN",
            description:"",
            price:"4.20",
            each:"each/"
        }
    ],
    sandwiches:[
        {
            title:"*CHICKEN CIABATTA",
            description:"Arugula, tomatoes, pesto aioli, avocado",
            price:"18.90"
        },
        {
            title:"*CALIFORNIA BURGER",
            description:"Sour cream, lettuce, tomato, provolone cheese, onions, avocado",
            price:"18.90"
        }
    ],
    deserts:[
        {
            title:"BAKLAVA",
            description:"",
            price:"11.50"
        },
        {
            title:"CRÈME BRULEE",
            description:"",
            price:"8.50"
        },
        {
            title:"GATA",
            description:"",
            price:"7.50"
        }
    ],
    tea:[
        {
            title:"AMERICAN ESPRESSO",
            description:"",
            price:"3.90"
        },
        {
            title:"ARMENIAN ESPRESSO",
            description:"",
            price:"3.90"
        },
        {
            title:"LUNGO, CAPPUCCINO, LATTE MACCHIATO",
            description:"",
            price:"4.50"
        },
        {
            title:"BLACK TEA",
            description:"",
            price:"3.90"
        },
        {
            title:"MINT/THYME TEA",
            description:"",
            price:"3.90"
        },
    ]
}
const footerText = ["** Dear customer, if you have any allergies or dietary requirements, please let your server know.\n" +
"* Consuming raw or undercooked meat, poultry, seafood, shellfish or eggs might increase the risk of getting foodborne illnesses, especially in case of preexisting medical conditions.\n" +
"Thank you.\n" +
"Yours truly, Karas team."]
function changeLanguage(category,languageData){
    for(let i = 0;i < category.length; i++){
        if(texts[languageData][i].hasOwnProperty("extraPrice")){
            category[i].children[0].children[0].innerHTML = texts[languageData][i].title
            category[i].children[0].children[1].innerHTML = texts[languageData][i].description
            category[i].children[1].innerHTML = `<div>${texts[languageData][i].price}</div><div><span class="withTitle">${texts[languageData][i].withTitle}</span><span>${texts[languageData][i].extraPrice}</span></div>`
        } else if(texts[languageData][i].hasOwnProperty("each")){
            category[i].children[0].children[0].innerHTML = texts[languageData][i].title
            category[i].children[0].children[1].innerHTML = texts[languageData][i].description
            category[i].children[1].innerHTML = `<div><span class="withTitle">${texts[languageData][i].each}</span><span>${texts[languageData][i].price}</span></div>`
        } else {
            category[i].children[0].children[0].innerHTML = texts[languageData][i].title
            category[i].children[0].children[1].innerHTML = texts[languageData][i].description
            category[i].children[1].innerHTML = texts[languageData][i].price
        }

    }
}
function changeTitleLanguage(titles){
    for(let i = 0; i < titles.length;i++){
        titles[i].children[0].innerHTML = titlesText[i]
    }
}

function changeFooterLanguage(){
    const footer = document.querySelector("footer")
    footer.children[0].children[0].innerHTML = footerText[0]
}
changeFooterLanguage()


const titles = document.querySelectorAll('.title-lang');

changeTitleLanguage(titles)

const appetizers = document.querySelectorAll('.appetizers-lang');
const salads = document.querySelectorAll('.salads-lang')
const sides = document.querySelectorAll('.sides-lang');
const bbq = document.querySelectorAll('.bbq-lang');
const entrees = document.querySelectorAll('.entrees-lang');
const soups = document.querySelectorAll('.soups-lang');
const oven = document.querySelectorAll('.oven-lang');
const sandwiches = document.querySelectorAll('.sandwiches-lang');
const deserts = document.querySelectorAll('.deserts-lang');
const tea = document.querySelectorAll('.tea-lang');

changeLanguage(appetizers,"appetizers")
changeLanguage(salads,"salads")
changeLanguage(sides,"sides")
changeLanguage(bbq,"bbq")
changeLanguage(entrees,"entrees")
changeLanguage(soups,"soups")
changeLanguage(oven,"oven")
changeLanguage(sandwiches,"sandwiches")
changeLanguage(deserts,"deserts")
changeLanguage(tea,"tea")




