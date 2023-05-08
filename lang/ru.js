const titlesText = [
    "МЕНЮ",
    "Закуски",
    "Салаты",
    "Гарниры",
    "Шашлык, приготовленные в специальной дровяной печи \"Карас\"",
    "Горячие блюда",
    "Супы",
    "Блюда, приготовленные в дровяной печи",
    "Сэндвичи / бургеры ",
    "Десерты",
    "Чай/кофе"
]

const texts = {
    appetizers:[
        {
            title:"Блинчики с говядиной (2 шт.)",
            description:"",
            price:"12.90"
        },
        {
            title:"Ассортимент армянских сыров",
            description:"Cыр фета и зелень",
            price:"16.50"
        },
        {
            title:"Ассорти из трех соусов",
            description:"Хумус, дзадзики, аджика",
            price:"15.90"
        },
        {
            title:"Соленье",
            description:"Сезонные овощи",
            price:"13.90"
        },
        {
            title:"Овощное Барбекю",
            description:"",
            price:"12.50"
        },
        {
            title:"Хлеб",
            description:"",
            price:"3.90"
        },
        {
            title:"Аджика",
            description:"",
            price:"7.90"
        },
        {
            title:"Хумус",
            description:"",
            price:"7.90"
        },
        {
            title:"Дзадзики",
            description:"",
            price:"7.90"
        },
        {
            title:"Палочки из моцареллы",
            description:"",
            price:"14.90"
        },
        {
            title:"Перец халапеньо, фаршированный чеддером",
            description:"",
            price:"12.90"
        },
    ],
    salads:[
        {
            title:"Салат \"Капрезе\"",
            description:"Свежая моцарелла, помидор, бальзамическая глазурь, песто",
            price:"18.90"
        },
        {
            title:"Летний салат",
            description:"Помидор, огурец, болгарский перец, зелень",
            price:"13.90"
        },
        {
            title:"Салат \"Оливье\"",
            description:"нарезанный картофель, морковь, соленые огурцы, вареные яйца, душистый горошек, лук, зелень, заправленная майонезом, солью и перцем",
            price:"15.50"
        },
        {
            title:"*Cалат \"Цезарь\"" + "/ с курицей",
            description:"Гренки, сыр пармезан, домашняя заправка",
            price:"13.90/17.90"
        },
        {
            title:"Греческий салат",
            description:"Помидор, огурец, оливки, салат, сыр фета, зелень",
            price:"15.90"
        },
        {
            title:"Салат \"Цезарь\" с лососем",
            description:"Салат, помидоры черри, тертый пармезан, маслины, коралловый тюль, лосось ",
            price:"21.50"
        },
        {
            title:"Салат из брюссельской капусты",
            description:"Бекон, миндаль, сыр пармезан, бальзамическая глазурь",
            price:"14.90"
        },
    ],
    sides:[
        {
            title:"Картофель фри ",
            description:"",
            price:"6.50"
        },
        {
            title:"Белый рис",
            description:"",
            price:"5.80"
        },
        {
            title:"Картофель фри с пармезаном и трюфелем",
            description:"",
            price:"13.90"
        },
        {
            title:"Картофель на огне",
            description:"",
            price:"6.20"
        },
        {
            title:"Картофельное пюре",
            description:"",
            price:"6.20"
        },
        {
            title:"Картофель двойной прожарки ",
            description:"Cыры пармезан и чеддер",
            price:"10.50"
        }
    ],
    bbq:[
        {
            title:"* Семейнoe комбо #1",
            description:"Свиные ребрышки, бараньи отбивные, шашлык из говядины и курицы, говяжий и куриный кебаб, перец и картофель на гриле, белый рис, хумус, аджика, дополнительный салат ",
            price:"139.00"
        },
        {
            title:"* Семейнoe комбо #2",
            description:"Свиные ребрышки, бараньи отбивные, шашлык из говядины и курицы, перец и картофель на гриле, белый рис, хумус, аджика, дополнительный салат",
            price:"105.00"
        },
        {
            title:"* Свиные ребрышки",
            description:"Перец и картофель на гриле, дополнительный салат",
            price:"29.70"
        },
        {
            title:"* Бараньи отбивные",
            description:"Перец на гриле, белый рис, дополнительный салат",
            price:"32.50"
        },
        {
            title:"* Шашлык из говядины",
            description:"Перец на гриле, белый рис, дополнительный салат",
            price:"28.90"
        },
        {
            title:"* Шашлык из грудки курицы",
            description:"Перец на гриле, белый рис, дополнительный салат",
            price:"21.90"
        },
        {
            title:"* Говяжий кебаб",
            description:"Перец на гриле, белый рис, дополнительный салат",
            price:"19.50"
        },
        {
            title:"* Рап с шашлыком из свинины (икибир)",
            description:"",
            price:"14.40"
        },
        {
            title:"* Куриный кебаб",
            description:"Перец на гриле, белый рис, дополнительный салат",
            price:"18.40"
        },
        {
            title:"*+Бараньи отбивные",
            description:"",
            price:"25.50"
        },
        {
            title:"*+Свиные ребрышки",
            description:"",
            price:"21.90"
        },
        {
            title:"*+Шашлык из говядины",
            description:"",
            price:"23.50"
        },
        {
            title:"*+Говяжий кебаб",
            description:"",
            price:"12.30"
        },
        {
            title:"*+Шашлык из грудки курицы",
            description:"",
            price:"15.50"
        },
        {
            title:"*+Куриный кебаб",
            description:"",
            price:"11.30"
        },

    ],
    entrees:[
        {
            title:"* Жареный радужный лосось",
            description:"Соус \"Юдзу\" с каперсами, спаржа на пару, бальзамическая глазурь, томатная икра",
            price:"29.90"
        },
        {
            title:"* Лосось на гриле ",
            description:"Картофель двойной прожарки, Соус \"Юдзу\" с каперсами, бальзамическая глазурь, томатная икра",
            price:"33.50"
        },
        {
            title:"* Жаркое со свининой ",
            description:"Свиная вырезка, молодой картофель, лук, зелень",
            price:"23.50"
        },
        {
            title:"* Омлет с помидорами ",
            description:"Помидоры, зелень",
            price:"15.50"
        },
        {
            title:"* Долма из виноградных листьев",
            description:"Виноградные листья, фаршированные говяжьим фаршем, йогуртный-чесночный соус, сметана",
            price:"19.50"
        },
        {
            title:"* Долма с капустой",
            description:"Голубцы с начинкой из фарша и приправленной говядины",
            price:"17.90"
        },
        {
            title:"* Хурджин с говядиной (традиционное армянское блюдо)",
            description:"Хрустящий лаваш с начинкой из говяжьего супа",
            price:"24.90"
        },
        {
            title:"* Aрмянская харисса",
            description:"Традиционная каша с пшеничными зернами и курицей",
            price:"13.90"
        },
        {
            title:" * Корзина с курицей ",
            description:"Овощи и зелень в сливочном соусе",
            price:"21.50"
        }
    ],
    soups:[
        {
            title:"Мясной борщ",
            description:"",
            price:"12.50"
        },
        {
            title:"Спас / Йогуртовый суп",
            description:"",
            price:"12.50"
        }
    ],
    oven:[
        {
            title:"Пицца \"Пепперони\"",
            description:"Томатный соус, сыр моцарелла, пепперони",
            price:"21.00"
        },
        {
            title:"Пицца \"Маргарита\" ",
            description:"Томатный соус, сыр моцарелла",
            price:"18.90"
        },
        {
            title:"Пицца с сыром",
            description:"Томатный соус, свежий сыр моцарелла, итальянский базилик",
            price:"19.90"
        },
        {
            title:"Хачапури по-аджарски ",
            description:"Сыр сыр моцарелла, сыр Фета, яйцa",
            price:"16.50"
        },
        {
            title:"Хлеб cкьяччата",
            description:"Чеснок, оливковое масло, розмарин",
            price:"each/9.95"
        },
        {
            title:"Лахмаджо",
            description:"",
            price:"each/4.20"
        }
    ],
    sandwiches:[
        {
            title:"* Чабатта с курицей ",
            description:"Аругула, помидор, соус \"Песто\" с маслом, авокадо",
            price:"18.90"
        },
        {
            title:"* Калифорнийский бургер",
            description:"Сметана, листья салата, помидоры, сыр проволоне, лук, авокадо",
            price:"18.90"
        }
    ],
    deserts:[
        {
            title:"Пахлава",
            description:"",
            price:"11.50"
        },
        {
            title:"Крем-брюле",
            description:"",
            price:"8.50"
        },
        {
            title:"Гата ",
            description:"",
            price:"7.50"
        }
    ],
    tea:[
        {
            title:"Американский эспрессо",
            description:"",
            price:"3.90"
        },
        {
            title:"Армянский кофе",
            description:"",
            price:"3.90"
        },
        {
            title:"Лунго, капучино, латте маккиато",
            description:"",
            price:"4.50"
        },
        {
            title:"Черный чай",
            description:"",
            price:"3.90"
        },
        {
            title:"Чай с мятой/тимьяном",
            description:"",
            price:"3.90"
        },
    ]
}
const footerText = ["** Уважаемый клиент, если у вас есть аллергия или другие диетические ограничения, сообщите об этом официанту.\n" +
"\n" +
"* Употребление в пищу сырого или недоваренного мяса, птицы, морепродуктов или яиц увеличивает риск болезней пищевого происхождения, особенно при наличии других заболеваний.\n" +
"\n" +
"Спасибо,\n" +
"С уважением, команда \"Карас\"․"]
function changeLanguage(category,languageData){
    for(let i = 0;i < category.length; i++){
        category[i].children[0].children[0].innerHTML = texts[languageData][i].title
        category[i].children[0].children[1].innerHTML = texts[languageData][i].description
        category[i].children[1].innerHTML = texts[languageData][i].price
    }
}

function changeTitleLanguage(titles){
    for(let i = 0; i < titles.length;i++){
        titles[i].children[0].innerHTML = titlesText[i]
    }
}

function changeFooterLanguage(){
    const footer = document.querySelector("footer")
    footer.children[0].innerHTML = footerText[0]
}
changeFooterLanguage()

const titles = document.querySelectorAll('.title-lang');

changeTitleLanguage(titles)

const appetizers = document.querySelectorAll('.appetizers-lang');
const salads = document.querySelectorAll('.salads-lang');
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