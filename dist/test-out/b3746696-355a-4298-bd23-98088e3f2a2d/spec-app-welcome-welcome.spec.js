import {
  __decorate,
  init_tslib_es6
} from "./chunk-XHKCCJWD.js";
import {
  Component,
  TestBed,
  init_core,
  init_testing
} from "./chunk-22VREDBA.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/welcome/welcome.html
var welcome_default;
var init_welcome = __esm({
  "angular:jit:template:src/app/welcome/welcome.html"() {
    welcome_default = '<div class="ds-welcome-hero">\n  <div class="ds-welcome-hero__left">\n    <div class="ds-welcome-icon">\n      <p class="ds-welcome-smile">:)</p>\n    </div>\n    <ds-typography\n      text="Com Ita\xFA, t\xE1 feito"\n      tag="h1"\n      weight="bold"\n      size="xl"\n      color="primary"\n    />\n    <ds-typography\n      text="Conte com o app Ita\xFA para facilitar o seu dia."\n      size="lg"\n    />\n    <br />\n    <ds-typography text="Crie sua conta digial em poucos cliques." size="lg" />\n  </div>\n  <div class="ds-welcome-hero__right">\n    <ds-button\n      text="Cadastrar"\n      href="/cadastro"\n      tag="a"\n      size="large"\n      variant="special"\n    />\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/welcome/welcome.scss
var welcome_default2;
var init_welcome2 = __esm({
  "angular:jit:style:src/app/welcome/welcome.scss"() {
    welcome_default2 = '/* src/app/welcome/welcome.scss */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n  color: #212121;\n  margin: 0;\n  padding: 0;\n}\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n}\n.ds-welcome-hero {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  background:\n    linear-gradient(\n      90deg,\n      #ffffff 70%,\n      #ff6200 120%);\n  border-radius: 32px;\n  box-shadow: 0 8px 32px rgba(33, 33, 33, 0.09), 0 2px 6px rgba(255, 98, 0, 0.1);\n  width: 100%;\n  max-width: 960px;\n  min-height: 340px;\n  overflow: hidden;\n}\n.ds-welcome-hero__left {\n  flex: 1 1 0;\n  padding: 32px 32px 32px 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 320px;\n}\n.ds-welcome-logo {\n  margin-bottom: 24px;\n  filter: drop-shadow(0 3px 12px rgba(255, 98, 0, 0.21));\n}\n.ds-welcome-slogan {\n  color: #ff6200;\n  font-size: 32px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  line-height: 1.1;\n  letter-spacing: 0.5px;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  text-shadow: 0 1px 10px rgba(255, 98, 0, 0.07);\n}\n.ds-welcome-desc {\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  margin-bottom: 0;\n  line-height: 1.5;\n  text-shadow: 0 1px 6px rgba(236, 236, 236, 0.11);\n}\n.ds-welcome-hero__right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ff6200;\n  flex: 0 0 320px;\n  min-width: 220px;\n  position: relative;\n}\n.ds-welcome-feito {\n  color: #ffffff;\n  font-size: 5.5rem;\n  font-weight: 700;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  letter-spacing: 3px;\n  text-shadow: 0 6px 32px rgba(33, 33, 33, 0.2), 0 2px 8px rgba(255, 255, 255, 0.13);\n  margin-right: -24px;\n  margin-left: 24px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 900px) {\n  .ds-welcome-hero {\n    flex-direction: column;\n    min-height: 0;\n    max-width: 98vw;\n  }\n  .ds-welcome-hero__right {\n    min-width: 0;\n    flex: none;\n    width: 100%;\n    justify-content: flex-end;\n    padding: 24px;\n    background:\n      linear-gradient(\n        90deg,\n        #ff6200 70%,\n        #ffffff 100%);\n  }\n  .ds-welcome-feito {\n    font-size: 3.5rem;\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .ds-welcome-hero__left {\n    padding: 32px 24px 24px 32px;\n    min-width: 0;\n  }\n}\n@media (max-width: 500px) {\n  .ds-welcome-hero__left {\n    padding: 24px;\n  }\n  .ds-welcome-feito {\n    font-size: 2.2rem;\n  }\n}\n.ds-welcome-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ececec;\n  border-radius: 32px;\n  width: 180px;\n  height: 180px;\n  margin: 40px auto;\n}\n.ds-welcome-smile {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  font-size: 80px;\n  font-weight: 700;\n  color: #ff6200;\n  margin: 0;\n  line-height: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=welcome.css.map */\n';
  }
});

// src/app/welcome/welcome.component.ts
var WelcomeComponent;
var init_welcome_component = __esm({
  "src/app/welcome/welcome.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_welcome();
    init_welcome2();
    init_core();
    WelcomeComponent = class WelcomeComponent2 {
    };
    WelcomeComponent = __decorate([
      Component({
        selector: "app-welcome",
        template: welcome_default,
        standalone: false,
        styles: [welcome_default2]
      })
    ], WelcomeComponent);
  }
});

// src/app/welcome/welcome.spec.ts
var require_welcome_spec = __commonJS({
  "src/app/welcome/welcome.spec.ts"(exports) {
    init_testing();
    init_welcome_component();
    describe("Welcome", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WelcomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_welcome_spec();
//# sourceMappingURL=spec-app-welcome-welcome.spec.js.map
