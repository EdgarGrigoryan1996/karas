// Popup change language
const popup = document.querySelector(".popup")
const elems = document.querySelectorAll(".popup-lang")
for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener("click", () => {
        // const refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + `?lang=${elems[i].dataset.lang}`;
        // window.history.pushState({ path: refresh }, '', refresh);
        localStorage.setItem("lang",lang)
         window.location = `index.html?lang=${elems[i].dataset.lang}`
    })
}
const showPopupButton = document.querySelector(".showPopupButton");
showPopupButton.addEventListener("click", showPopup)
function showPopup() {
    localStorage.removeItem("lang")
    location.reload()
}

// setShowButtonText
const params = new URLSearchParams(window.location.search);
let lang = params.get("lang") || "en";
switch (lang) {
    case "en":
        showPopupButton.innerText = "English";
        break;
    case "ru":
        showPopupButton.innerText = "Русский";
        break;
    case "am":
        showPopupButton.innerText = "Հայերեն";
        break;
}
console.log(lang)


// -------------
function changeLanguage(){
    const languages = ["en","am","ru"]
    const params = new URLSearchParams(window.location.search);
    let lang = params.get("lang") || "en";
    if(!languages.includes(lang)){
        lang = "en"
    }

    document.documentElement.lang = lang;
    const script = document.createElement('script');
    // script.type = "module"
    script.src = 'lang/' + lang + '.js';
    document.head.appendChild(script);

}
const select = document.getElementById('language-select');
console.log()
function changeLanguageWithSelect() {
    const lang = select.value;
    window.location = `index.html?lang=${lang}`
}


changeLanguage()

if(localStorage.getItem("lang")){
    popup.style.display = "none"
} else {
    popup.style.display = "block"
}

