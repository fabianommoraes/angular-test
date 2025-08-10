import {
  By,
  __decorate,
  init_platform_browser,
  init_tslib_es6
} from "./chunk-DUCIQZPN.js";
import {
  Component,
  TestBed,
  init_core,
  init_testing
} from "./chunk-4MSUZCNS.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/fallback/fallback.html
var fallback_default;
var init_fallback = __esm({
  "angular:jit:template:src/app/fallback/fallback.html"() {
    fallback_default = "<app-notfound />\n";
  }
});

// angular:jit:style:src/app/fallback/fallback.scss
var fallback_default2;
var init_fallback2 = __esm({
  "angular:jit:style:src/app/fallback/fallback.scss"() {
    fallback_default2 = "/* src/app/fallback/fallback.scss */\n/*# sourceMappingURL=fallback.css.map */\n";
  }
});

// src/app/fallback/fallback.component.ts
var FallbackComponent;
var init_fallback_component = __esm({
  "src/app/fallback/fallback.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_fallback();
    init_fallback2();
    init_core();
    FallbackComponent = class FallbackComponent2 {
    };
    FallbackComponent = __decorate([
      Component({
        selector: "app-fallback",
        template: fallback_default,
        standalone: false,
        styles: [fallback_default2]
      })
    ], FallbackComponent);
  }
});

// angular:jit:template:src/app/notfound/notfound.html
var notfound_default;
var init_notfound = __esm({
  "angular:jit:template:src/app/notfound/notfound.html"() {
    notfound_default = '<div class="ds-not-found">\n  <div class="ds-not-found__icon" aria-hidden="true">\n    <ds-typography\n      text="404"\n      tag="h1"\n      weight="bold"\n      size="xl"\n      color="primary"\n    />\n  </div>\n  <ds-typography\n    text="P\xE1gina n\xE3o encontrada"\n    tag="h2"\n    weight="bold"\n    size="xl"\n  />\n  <div>\n    <ds-typography\n      text="Desculpe, n\xE3o conseguimos encontrar o que voc\xEA procura."\n    />\n\n    <ds-typography\n      text="Verifique se o endere\xE7o est\xE1 correto ou volte para a p\xE1gina inicial."\n    />\n  </div>\n  <ds-button text="Voltar" tag="a" href="/" size="large" />\n</div>\n';
  }
});

// angular:jit:style:src/app/notfound/notfound.scss
var notfound_default2;
var init_notfound2 = __esm({
  "angular:jit:style:src/app/notfound/notfound.scss"() {
    notfound_default2 = '/* src/app/notfound/notfound.scss */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n  color: #212121;\n  margin: 0;\n  padding: 0;\n}\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n}\n.ds-not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 24px;\n  box-shadow: 0 2px 8px rgba(33, 33, 33, 0.04);\n  padding: 32px 24px;\n  max-width: 600px;\n  width: 100%;\n  text-align: center;\n  gap: 32px;\n}\n.ds-not-found__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ececec;\n  border-radius: 50%;\n  width: 100px;\n  height: 90px;\n}\n/*# sourceMappingURL=notfound.css.map */\n';
  }
});

// src/app/notfound/notfound.component.ts
var NotFoundComponent;
var init_notfound_component = __esm({
  "src/app/notfound/notfound.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_notfound();
    init_notfound2();
    init_core();
    NotFoundComponent = class NotFoundComponent2 {
    };
    NotFoundComponent = __decorate([
      Component({
        selector: "app-notfound",
        template: notfound_default,
        standalone: false,
        styles: [notfound_default2]
      })
    ], NotFoundComponent);
  }
});

// src/app/fallback/fallback.spec.ts
var require_fallback_spec = __commonJS({
  "src/app/fallback/fallback.spec.ts"(exports) {
    init_testing();
    init_fallback_component();
    init_notfound_component();
    init_platform_browser();
    describe("FallbackComponent Template", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FallbackComponent, NotFoundComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FallbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should render the <app-notfound> component", () => {
        const notFoundElement = fixture.debugElement.query(By.css("app-notfound"));
        expect(notFoundElement).toBeTruthy();
      });
      it("should not have any unexpected elements", () => {
        const unexpectedElement = fixture.debugElement.query(By.css(".unexpected-class"));
        expect(unexpectedElement).toBeNull();
      });
    });
  }
});
export default require_fallback_spec();
//# sourceMappingURL=spec-app-fallback-fallback.spec.js.map
