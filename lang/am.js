const titlesText = [
    "ՄԵՆՅՈՒ",
    "Նախուտեստներ",
    "Աղցաններ",
    "Խավարտ",
    "«Կարաս»-ի հատուկ փայտե վառարանում պատրաստված խորոված",
    "Տաք ուտեստներ",
    "Ապուրներ",
    "Փայտե վառարանում պատրաստված ուտեստներ",
    "Սենդվիչներ / Բուրգերներ",
    "Աղանդեր",
    "Թեյ / Սուրճ"
]

const texts = {
    appetizers:[
        {
            title:"Նրբաբլիթ տավարի մսով" + `<span><span class='mr-2'> (2</span>հատ) </span>`,
            description:"",
            price:"12.90"
        },
        {
            title:"Հայկական պանրի տեսականի",
            description:"Ֆետա Պանիր, Կանաչի",
            price:"16.50"
        },
        {
            title:"Թթու",
            description:"Սեզոնային բանջարեղեն",
            price:"13.90"
        },
        {
            title:"Խորոված բանջարեղեն",
            description:"",
            price:"12.50"
        },
        {
            title:"Հաց",
            description:"",
            price:"3.90"
        },
        {
            title:"Երեք սոուսների տեսականի",
            description:"Հումմուս, Ձաձիկի, Աջիկա",
            price:"15.90"
        },
        {
            title:"Աջիկա",
            description:"",
            price:"7.90"
        },
        {
            title:"Հումմուս",
            description:"",
            price:"7.90"
        },
        {
            title:"Ձաձիկի",
            description:"",
            price:"7.90"
        },
        {
            title:"Մոցարելլայի ձողիկներ",
            description:"",
            price:"14.90"
        },
        {
            title:"Հալապենյո պղպեղներ՝ լցոնած Չեդեր պանրով",
            description:"",
            price:"12.90"
        },
    ],
    salads:[
        {
            title:"Կապրեզե աղցան",
            description:"Թարմ Մոցարելլա պանիր, լոլիկ, բալզամիկ սոուս, պեստո սոուս",
            price:"18.90"
        },
        {
            title:"Ամառային աղցան",
            description:"Լոլիկ, վարունգ, բուլղարական պղպեղ, կանաչի",
            price:"13.90"
        },
        {
            title:"Աղցան Օլիվյե ",
            description:"Կտրատած կարտոֆիլ, գազար, թթու վարունգ, խաշած ձու, քաղցր ոլոռ, սոխ, կանաչի՝ համեմված մայոնեզով, աղով և պղպեղով",
            price:"15.50"
        },
        {
            title:"Կեսար աղցան",
            description:"Չորահաց, Պարմեզան պանիր, հազար, սոուս",
            price:"13.90",
            withTitle:"/հավով/",
            extraPrice:"17.90"
        },
        {
            title:"Հունական աղցան",
            description:"Լոլիկ, վարունգ, ձիթապտուղ, հազար, Ֆետա պանիր, կանաչի",
            price:"15.90"
        },
        {
            title:"Կեսար աղցան սաղմոնով",
            description:"Հազար, չերի լոլիկ, Պարմեզան պանիր, սև ձիթապտուղ, համեմված հացիկներ, սաղմոն",
            price:"21.50"
        },
        {
            title:"Բրյուսելյան կաղամբով աղցան",
            description:"Բեկոն, նուշ, Պարմեզան պանիր, բալզամիկ սոուս",
            price:"14.90"
        },
    ],
    sides:[
        {
            title:"Կարտոֆիլ ֆրի",
            description:"",
            price:"6.50"
        },
        {
            title:"Սպիտակ բրինձ",
            description:"",
            price:"5.80"
        },
        {
            title:"Կարտոֆիլ ֆրի՝  Պարմեզան պանրով և տրյուֆելով",
            description:"",
            price:"13.90"
        },
        {
            title:"Պլեճ կարտոֆիլ",
            description:"",
            price:"6.20"
        },
        {
            title:"Կարտոֆիլի խյուս",
            description:"",
            price:"6.20"
        },
        {
            title:"Կրկնակի տապակված կարտոֆիլ",
            description:"Պարմեզան և Չեդեր պանիրներ",
            price:"10.50"
        }
    ],
    bbq:[
        {
            title:"*Ընտանեկան փաթեթ #1",
            description:"Խոզի կողիկներ, գառան չալաղաջ, տավարի մսի խորոված, հավի մսի խորոված, տավարի քյաբաբ, հավի քյաբաբ, կրակին խորոված պղպեղ և պլեճ կարտոֆիլ, բրինձ, հումուս, աջիկա, աղցան",
            price:"139.00"
        },
        {
            title:"*Ընտանեկան փաթեթ #2",
            description:"Խոզի կողիկներ, գառան չալաղաջ, տավարի մսի խորոված, հավի մսի խորոված, կրակին խորոված պղպեղ և պլեճ կարտոֆիլ, բրինձ, հումուս, աջիկա, աղցան",
            price:"105.00"
        },
        {
            title:"*Խոզի կողիկներ",
            description:"Կրակին խորոված պղպեղ և պլեճ կարտոֆիլ, աղցան",
            price:"29.70"
        },
        {
            title:"*Գառան չալաղաջ",
            description:"Կրակին խորոված պղպեղ, բրինձ, աղցան",
            price:"32.50"
        },
        {
            title:"*Տավարի մսի խորոված",
            description:"Կրակին խորոված պղպեղ, բրինձ, աղցան",
            price:"28.90"
        },
        {
            title:"*Խորոված հավի կրծքամիս",
            description:"Կրակին խորոված պղպեղ, բրինձ, աղցան",
            price:"21.90"
        },
        {
            title:"*Տավարի քյաբաբ",
            description:"Կրակին խորոված պղպեղ, բրինձ, աղցան",
            price:"19.50"
        },
        {
            title:"* Խոզի (իքիբիր) քյաբաբով բրդուճ",
            description:"",
            price:"14.40"
        },
        {
            title:"*Հավի քյաբաբ",
            description:"Կրակին խորոված պղպեղ, բրինձ, աղցան",
            price:"18.40"
        },
        {
            title:"*+Գառան չալաղաջ",
            description:"",
            price:"25.50"
        },
        {
            title:"*+Տավարի մսով խորոված",
            description:"",
            price:"23.50"
        },
        {
            title:"*+Խոզի կողիկներ",
            description:"",
            price:"21.90"
        },
        {
            title:"*+Տավարի քյաբաբ",
            description:"",
            price:"12.30"
        },
        {
            title:"*+Խորոված հավի կրծքամիս",
            description:"",
            price:"15.50"
        },
        {
            title:"*+Հավի քյաբաբ",
            description:"",
            price:"11.30"
        }
    ],
    entrees:[
        {
            title:"*Տապակած ծիածանափայլ սաղմոն",
            description:"«Յուզու» սոուս կապերսով, շոգեխաշած ծնեբեկ, բալզամիկ սոուս, լոլիկի խավիար",
            price:"29.90"
        },
        {
            title:"*Խորոված սաղմոն",
            description:"Կրկնակի տապակված կարտոֆիլ, «Յուզու» սոուս կապերսով, բալզամիկ սոուս, լոլիկի խավիար",
            price:"33.50"
        },
        {
            title:"*Խոզի մսով տապակա",
            description:"Խոզի փափկամիս, նորածիլ կարտոֆիլ, սոխ, կանաչի",
            price:"23.50"
        },
        {
            title:"*Լոլիկով ձվածեղ",
            description:"Լոլիկ, կանաչի",
            price:"15.50"
        },
        {
            title:"*Խաղողի թփով տոլմա",
            description:"Խաղողի տերևներ՝ լցոնված տավարի աղացած մսով, մածուն՝ սխտորի սոուսով, թթվասեր",
            price:"19.50"
        },
        {
            title:"*Կաղամբով տոլմա",
            description:"Կաղամբի տերևներ՝ լցոնված տավարի աղացած և համեմված մսով",
            price:"17.90"
        },
        {
            title:"*Տավարի մսով խուրջին (հայկական ավանդական ուտեստ)",
            description:"Խրթխրթան լավաշ՝ լցոնված տավարի մսով",
            price:"24.90"
        },
        {
            title:"*Հայկական հարիսա",
            description:"Ցորենի հատիկներով և հավի մսով ավանդական շիլա",
            price:"13.90"
        },
        {
            title:"*Հավի մսով զամբյուղ",
            description:"Բանջարեղեն և կանաչի՝ սերուցքային սոուսում",
            price:"21.50"
        }
    ],
    soups:[
        {
            title:"Մսով բորշչ",
            description:"",
            price:"12.50"
        },
        {
            title:"Սպաս / թանապուր",
            description:"",
            price:"12.50"
        }
    ],
    oven:[
        {
            title:"Պիցցա «Պեպպերոնի»",
            description:"Տոմատի սոուս, Մոցարելլա պանիր, պեպպերոնի",
            price:"21.50"
        },
        {
            title:"Պիցցա «Մարգարիտա»",
            description:"Տոմատի սոուս, Մոցարելլա պանիր",
            price:"20.90"
        },
        {
            title:"Պանրային պիցցա",
            description:"Տոմատի սոուս, թարմ Մոցարելլա պանիր, իտալական ռեհան",
            price:"18.90"
        },
        {
            title:"Աջարական խաչապուրի",
            description:"Մոցարելլա պանիր, Ֆետա պանիր, ձու",
            price:"17.50"
        },
        {
            title:"Հաց «Սկիաչատտա»",
            description:"Սխտոր, ձիթապտղի յուղ, ռոզմարին",
            price:"9.90",
            each:"Յուրաքանչյուրը/"
        },
        {
            title:"Լահմաջո",
            description:"",
            price:"4.20",
            each:"Յուրաքանչյուրը/"
        }
    ],
    sandwiches:[
        {
            title:"*Հավի մսով չաբատտա",
            description:"Ռուկոլա, լոլիկ, պեստո սոուս՝ ձիթապտղի յուղով, ավոկադո",
            price:"18.90"
        },
        {
            title:"* Կալիֆորնիական բուրգեր",
            description:"Թթվասեր, հազար, լոլիկ, Պրովոլոնե պանիր, սոխ, ավոկադո",
            price:"18.90"
        }
    ],
    deserts:[
        {
            title:"Փախլավա",
            description:"",
            price:"11.50"
        },
        {
            title:"Կրեմ-բրյուլե",
            description:"",
            price:"8.50"
        },
        {
            title:"Գաթա",
            description:"",
            price:"7.50"
        }
    ],
    tea:[
        {
            title:"Ամերիկյան էսպրեսսո",
            description:"",
            price:"3.90"
        },
        {
            title:"Հայկական սուրճ",
            description:"",
            price:"3.90"
        },
        {
            title:"Լունգո, կապուչինո, լատտե մակիատո",
            description:"",
            price:"4.50"
        },
        {
            title:"Սև թեյ",
            description:"",
            price:"3.90"
        },
        {
            title:"Անանուխով/ուրցով թեյ",
            description:"",
            price:"3.90"
        },
    ]
}
const footerText = ["** Հարգելի՛ հաճախորդ, եթե ունեք ալերգիաներ կամ սննդակարգի հետ կապված այլ նկատառումներ, խնդրում ենք տեղյակ պահել մատուցողին:\n" +
"\n" +
"* Հում կամ թերեփ մսի, թռչնամսի, ծովամթերքի կամ ձվի օգտագործումը մեծացնում է սննդածին հիվանդություններով վարակվելու վտանգը, հատկապես այլ հիվանդությունների առկայության դեպքում:\n" +
"\n" +
"Շնորհակալություն,\n" +
"Հարգանքով՝ «Կարաս»-ի թիմ։"]

function changeLanguage(category,languageData){
    for(let i = 0;i < category.length; i++) {
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
    footer.children[0].innerHTML = footerText[0]
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