const params = new URLSearchParams(window.location.search);
let lang = params.get("lang") || "en";

// Popup change language

const popup = document.querySelector(".popup")
const elems = document.querySelectorAll(".popup-lang")
const showPopupButton = document.querySelector(".showPopupButton");
const popupText = document.querySelector(".popup-text");

for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener("click", () => {

        if(localStorage.getItem("lang")){
            localStorage.removeItem("lang");
        }

         localStorage.setItem("lang",elems[i].dataset.lang)
         localStorage.removeItem("popupShow")
         window.location = `index.html?lang=${elems[i].dataset.lang}`
    })
}


showPopupButton.addEventListener("click", () => {
    popup.style.display = "block"
    document.body.classList.add("stop-scrolling")
    localStorage.setItem("popupShow","true")
    localStorage.removeItem("lang")
})

// setShowButtonText


switch (lang) {
    case "en":
        showPopupButton.children[0].innerText = "English";
        popupText.innerText = "Choose language"
        break;
    case "ru":
        showPopupButton.children[0].innerText = "Русский";
        popupText.innerText = "Выберите язык"
        break;
    case "am":
        showPopupButton.children[0].innerText = "Հայերեն";
        popupText.innerText = "Ընտրեք լեզուն"
        break;
}

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
    script.src = 'lang/' + lang + '.js';
    document.head.appendChild(script);

}



changeLanguage()

if(localStorage.getItem("lang") || (params.get("lang") && !localStorage.getItem("popupShow"))){
    popup.style.display = "none"
} else {
    popup.style.display = "block"
    document.body.classList.add("stop-scrolling")
}

