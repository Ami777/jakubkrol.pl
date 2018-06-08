var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
define("antiSpamDecode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function doDecode(encodedDatas) {
        try {
            for (var encodedDatas_1 = __values(encodedDatas), encodedDatas_1_1 = encodedDatas_1.next(); !encodedDatas_1_1.done; encodedDatas_1_1 = encodedDatas_1.next()) {
                var data = encodedDatas_1_1.value;
                var decoded = data.encoded.map(function (num) { return String.fromCharCode(num - 15); }).join('');
                var href = data.hrefPrefix + decoded;
                var els = document.querySelectorAll('.enc-my-' + data.classPostfix);
                for (var i = 0; i < els.length; i++) {
                    var el = els[i];
                    el.innerText = decoded;
                    el.setAttribute('href', href);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (encodedDatas_1_1 && !encodedDatas_1_1.done && (_a = encodedDatas_1.return)) _a.call(encodedDatas_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    }
    function antiSpamDecode() {
        var encodedDatas = [
            {
                classPostfix: 'email',
                hrefPrefix: 'mailto:',
                encoded: [121, 61, 122, 79, 131, 61, 127, 123],
            },
            {
                classPostfix: 'tel',
                hrefPrefix: 'tel:',
                encoded: [58, 67, 71, 47, 71, 71, 64, 60, 72, 66, 64, 60, 64, 67, 67],
            },
        ];
        setTimeout(function () { return doDecode(encodedDatas); }, 100);
    }
    exports.default = antiSpamDecode;
});
define("lang", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LangMgr = (function () {
        function LangMgr() {
            this.langs = [];
            this.loadLang({ name: 'en', desc: 'Select English', title: 'Jakub Król | trainer, lecturer' });
            this.loadLang({ name: 'pl', desc: 'Wybierz język polski', title: 'Jakub Król | szkoleniowiec, wykładowca' });
            this.genIcons();
            this.setLang(location.hash ? location.hash.substr(1) : this.getFirstBrowserLanguage());
        }
        LangMgr.prototype.loadLang = function (lang) {
            this.langs.push(lang);
        };
        LangMgr.prototype.setLang = function (name) {
            if (name === void 0) { name = null; }
            var lang = this.langs.find(function (lang) { return lang.name === name; });
            if (!lang) {
                lang = this.langs[0];
                name = lang.name;
            }
            if (this.selLangName === name)
                return;
            this.selLangName = name;
            location.hash = name;
            document.querySelector('html').setAttribute('lang', name);
            document.querySelector('title').innerText = lang.title;
            var icoEls = document.querySelectorAll('[class*="l-"]');
            for (var i = 0; i < icoEls.length; i++) {
                var el = icoEls[i];
                if (el.classList.contains('sel-lang-' + name)) {
                    el.classList.add('selected');
                }
                else {
                    el.classList.remove('selected');
                }
            }
            this.applyLangToElements(document);
        };
        LangMgr.prototype.genIcons = function () {
            var _this = this;
            var ul = document.querySelector('#languages');
            var _loop_1 = function (lang) {
                var li = document.createElement('LI');
                var img = document.createElement('IMG');
                img.setAttribute('src', "./assets/images/flags/" + lang.name + ".png");
                img.setAttribute('alt', lang.desc);
                li.setAttribute('title', lang.desc);
                li.classList.add('sel-lang-' + lang.name);
                li.appendChild(img);
                li.addEventListener('click', function () { return _this.setLang(lang.name); });
                ul.appendChild(li);
            };
            try {
                for (var _a = __values(this.langs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var lang = _b.value;
                    _loop_1(lang);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var e_2, _c;
        };
        LangMgr.prototype.getFirstBrowserLanguage = function () {
            var nav = window.navigator;
            var browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
            var i;
            var language;
            if (Array.isArray(nav.languages)) {
                for (i = 0; i < nav.languages.length; i++) {
                    language = nav.languages[i];
                    if (language && language.length) {
                        return language.split('-')[0];
                    }
                }
            }
            for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                language = nav[browserLanguagePropertyKeys[i]];
                if (language && language.length) {
                    return language.split('-')[0];
                }
            }
            return null;
        };
        ;
        LangMgr.prototype.applyLangToElements = function (element) {
            var lngEls = element.querySelectorAll('[class^="l-"]');
            for (var i = 0; i < lngEls.length; i++) {
                var el = lngEls[i];
                if (el.classList.contains('l-' + this.selLangName)) {
                    el.style.display = 'initial';
                }
                else {
                    el.style.display = 'none';
                }
            }
        };
        return LangMgr;
    }());
    exports.default = LangMgr;
});
define("bgEffect", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function bgEffect() {
        var body = document.querySelector('body');
        var deg = 135;
        var dir = 1;
        body.addEventListener('mousemove', function (e) {
            deg += dir;
            if (deg >= 145 || deg <= 125) {
                dir *= -1;
            }
            var clientY = e.clientY, clientX = e.clientX;
            var clientHeight = body.clientHeight, clientWidth = body.clientWidth;
            var bgGradientStart = '#f5f5f5';
            var bgGradientEnd = '#fcfeff';
            var maxDist = Math.sqrt(Math.pow(clientHeight, 2) + Math.pow(clientWidth, 2));
            var dist = Math.sqrt(Math.pow(clientY, 2) + Math.pow(clientX, 2));
            var whereIsMouse = Math.max(1, Math.min(Math.round(dist / maxDist * 100), 98));
            body.style.background = "linear-gradient(" + deg + "deg, " + bgGradientStart + " 0%," + bgGradientEnd + " " + whereIsMouse + "%," + bgGradientEnd + " " + (whereIsMouse + 1) + "%," + bgGradientStart + " 100%)";
        });
    }
    exports.default = bgEffect;
});
define("contactForm", ["require", "exports", "app"], function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactForm = (function () {
        function ContactForm() {
            this.bindForm();
        }
        ContactForm.prototype.bindForm = function () {
            var _this = this;
            var form = document.querySelector('form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                var data = _this.getFormData(form);
                _this.sendData(form, data);
            });
        };
        ContactForm.prototype.getFormData = function (form) {
            return new FormData(form);
        };
        ContactForm.prototype.hideMessageUI = function () {
            var els = __spread(document.querySelectorAll('.message-ui'));
            try {
                for (var els_1 = __values(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                    var el = els_1_1.value;
                    el.style.display = 'none';
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var e_3, _a;
        };
        ContactForm.prototype.showMessageUI = function (className) {
            document.querySelector('.message-ui.' + className).style.display = 'block';
        };
        ContactForm.prototype.setAndShowAlert = function (html) {
            var alert = document.querySelector('.message-ui.alert');
            alert.innerHTML = html;
            app_1.langMgr.applyLangToElements(alert);
            this.hideMessageUI();
            this.showMessageUI('alert');
            this.showMessageUI('button');
        };
        ContactForm.prototype.sendData = function (form, data) {
            return __awaiter(this, void 0, void 0, function () {
                var r, html, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            this.hideMessageUI();
                            this.showMessageUI('loader');
                            return [4, fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                })];
                        case 1:
                            r = _a.sent();
                            return [4, r.text()];
                        case 2:
                            html = _a.sent();
                            this.setAndShowAlert(html);
                            return [3, 4];
                        case 3:
                            e_4 = _a.sent();
                            this.setAndShowAlert("<div class='alert error'><div class='l-en'>Ooops, something went wrong! Please try again later.</div><div class='l-pl'>Ups, co\u015B posz\u0142o nie tak! Prosz\u0119 spr\u00F3bowa\u0107 p\u00F3\u017Aniej.</div></div>");
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        };
        return ContactForm;
    }());
    exports.default = ContactForm;
});
define("app", ["require", "exports", "lang", "bgEffect", "antiSpamDecode", "contactForm"], function (require, exports, lang_1, bgEffect_1, antiSpamDecode_1, contactForm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.langMgr = new lang_1.default();
    bgEffect_1.default();
    antiSpamDecode_1.default();
    new contactForm_1.default();
});
