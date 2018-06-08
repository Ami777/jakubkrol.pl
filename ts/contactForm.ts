import {langMgr} from "./app";

export default class ContactForm{
    constructor(){
        this.bindForm();
    }

    private bindForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const data = this.getFormData(form);
            this.sendData(form, data);
        });
    }

    private getFormData(form: HTMLFormElement) {
        return new FormData(form);
    }

    private hideMessageUI(){
        const els = [...document.querySelectorAll('.message-ui')];
        for(let el of els){
            (el as HTMLElement).style.display = 'none';
        }
    }

    private showMessageUI(className){
        (document.querySelector('.message-ui.'+className) as HTMLElement).style.display = 'block';
    }

    private setAndShowAlert(html){
        const alert = document.querySelector('.message-ui.alert') as HTMLElement;
        alert.innerHTML = html;
        langMgr.applyLangToElements(alert);
        this.hideMessageUI();
        this.showMessageUI('alert');
        this.showMessageUI('button');
    }

    private async sendData(form: HTMLFormElement, data: FormData) {
        try {
            this.hideMessageUI();
            this.showMessageUI('loader');
            const r = await fetch(form.action, {
                method: 'POST',
                body: data,
            });
            const html = await r.text();
            this.setAndShowAlert(html);
        }catch(e){
            this.setAndShowAlert(`<div class='alert error'><div class='l-en'>Ooops, something went wrong! Please try again later.</div><div class='l-pl'>Ups, coś poszło nie tak! Proszę spróbować później.</div></div>`);
        }
    }
}