import {
  __decorate,
  init_tslib_es6
} from "./chunk-XHKCCJWD.js";
import {
  Component,
  TestBed,
  init_core,
  init_testing,
  signal
} from "./chunk-F6CYY75P.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = '<div class="app-layout">\n  <itau-header></itau-header>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <itau-footer></itau-footer>\n</div>\n';
  }
});

// angular:jit:style:src/app/app.scss
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.scss"() {
    app_default2 = '/* src/app/app.scss */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n  color: #212121;\n  margin: 0;\n  padding: 0;\n}\n.app-layout {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #f7f6f4;\n}\n/*# sourceMappingURL=app.css.map */\n';
  }
});

// src/app/app.component.ts
var AppComponent;
var init_app_component = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    AppComponent = class AppComponent2 {
      title = signal("using-mod");
    };
    AppComponent = __decorate([
      Component({
        selector: "app-root",
        standalone: false,
        template: app_default,
        styles: [app_default2]
      })
    ], AppComponent);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app_component();
    describe("AppComponent", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AppComponent]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, shell-mod");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
