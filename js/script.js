
function changeLanguage(){
    const languages = ["en","am","ru"]
    const params = new URLSearchParams(window.location.search);
    let lang = params.get("lang") || "en";
    if(!languages.includes(lang)){
        alert("test")
        lang = "en"
    }

    document.documentElement.lang = lang;
    const script = document.createElement('script');
    script.type = "module"
    script.src = 'lang/' + lang + '.js';
    document.head.appendChild(script);

}

changeLanguage()

