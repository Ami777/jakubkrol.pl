interface Lang{
    name : string,
    desc : string,
    title: string,
}

export default class LangMgr{
    private langs : Lang[] = [];
    private selLangName : string;

    constructor(){
        this.loadLang({name : 'en', desc : 'Select English', title : 'Jakub Król | trainer, lecturer'});
        this.loadLang({name : 'pl', desc : 'Wybierz język polski', title : 'Jakub Król | szkoleniowiec, wykładowca'});

        this.genIcons();

        this.setLang(location.hash ? location.hash.substr(1) : this.getFirstBrowserLanguage()); //Set default language
    }

    public loadLang(lang : Lang){
        this.langs.push(lang);
    }

    private setLang(name : string = null){
        let lang = this.langs.find(lang => lang.name === name);
        if (!lang){
            lang = this.langs[0]; //Set default language if one is not found
            name = lang.name;
        }

        if (this.selLangName === name) return;

        //Sys:
        this.selLangName = name;
        location.hash = name;

        //Document lang attr:
        document.querySelector('html').setAttribute('lang', name);

        //Title:
        document.querySelector('title').innerText = lang.title;

        //Lang icons:
        const icoEls = document.querySelectorAll('[class*="l-"]');
        for(let i = 0; i < icoEls.length; i++){
            const el = <HTMLElement>icoEls[i];
            if (el.classList.contains('sel-lang-' + name)){
                el.classList.add('selected');
            } else {
                el.classList.remove('selected');
            }
        }

        //Elements:
        this.applyLangToElements(document);
    }

    private genIcons(){
        const ul = <HTMLElement>document.querySelector('#languages');
        for(let lang of this.langs){
            const li = document.createElement('LI');
            const img = document.createElement('IMG');
            img.setAttribute('src', `./assets/images/flags/${lang.name}.png`);
            img.setAttribute('alt', lang.desc);
            li.setAttribute('title', lang.desc);
            li.classList.add('sel-lang-' + lang.name);
            li.appendChild(img);
            li.addEventListener('click', () => this.setLang(lang.name));
            ul.appendChild(li);
        }
    }

    //By <https://stackoverflow.com/a/29106129/675323>
    getFirstBrowserLanguage() {
        const nav = window.navigator;
        const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        let i;
        let language;

        // support for HTML 5.1 "navigator.languages"
        if (Array.isArray(nav.languages)) {
            for (i = 0; i < nav.languages.length; i++) {
                language = nav.languages[i];
                if (language && language.length) {
                    return language.split('-')[0];
                }
            }
        }

        // support for other well known properties in browsers
        for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
            language = nav[browserLanguagePropertyKeys[i]];
            if (language && language.length) {
                return language.split('-')[0];
            }
        }

        return null;
    };

    public applyLangToElements(element: Document|HTMLElement) {
        const lngEls = element.querySelectorAll('[class^="l-"]');
        for(let i = 0; i < lngEls.length; i++){
            const el = <HTMLElement>lngEls[i];
            if (el.classList.contains('l-' + this.selLangName)){
                el.style.display = 'initial';
            } else {
                el.style.display = 'none';
            }
        }
    }
}