export function changeLanguage(category,languageData){
    for(let i = 0;i < category.length; i++){
        category[i].children[0].innerHTML = texts[languageData][i].title
        category[i].children[1].innerHTML = texts[languageData][i].description
        category[i].children[2].innerHTML = texts[languageData][i].price
    }
}