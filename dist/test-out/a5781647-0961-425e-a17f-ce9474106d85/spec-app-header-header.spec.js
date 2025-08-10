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

// angular:jit:template:src/app/header/header.html
var header_default;
var init_header = __esm({
  "angular:jit:template:src/app/header/header.html"() {
    header_default = '<header class="itau-header">\n  <a routerLink="/" class="logo-area">\n    <img src="logo.png" alt="Ita\xFA" width="40" height="40" />\n    <span class="brand-title">Ita\xFA Shell App</span>\n  </a>\n</header>\n';
  }
});

// angular:jit:style:src/app/header/header.scss
var header_default2;
var init_header2 = __esm({
  "angular:jit:style:src/app/header/header.scss"() {
    header_default2 = '/* src/app/header/header.scss */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n  color: #212121;\n  margin: 0;\n  padding: 0;\n}\n.itau-header {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  padding: 0 32px;\n  background: #ff6200;\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(33, 33, 33, 0.06);\n  text-decoration: none;\n}\n.logo-area {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n}\n.brand-title {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  text-decoration: none;\n}\na,\na:active,\na:visited,\na:focus,\na:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=header.css.map */\n';
  }
});

// src/app/header/header.component.ts
var HeaderComponent;
var init_header_component = __esm({
  "src/app/header/header.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_header();
    init_header2();
    init_core();
    HeaderComponent = class HeaderComponent2 {
    };
    HeaderComponent = __decorate([
      Component({
        selector: "itau-header",
        standalone: false,
        template: header_default,
        styles: [header_default2]
      })
    ], HeaderComponent);
  }
});

// src/app/header/header.spec.ts
var require_header_spec = __commonJS({
  "src/app/header/header.spec.ts"(exports) {
    init_testing();
    init_header_component();
    describe("HeaderComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [HeaderComponent]
          // Declare the component
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should render the header content", () => {
        const headerElement = fixture.debugElement.nativeElement;
        expect(headerElement).toBeTruthy();
      });
    });
  }
});
export default require_header_spec();
//# sourceMappingURL=spec-app-header-header.spec.js.map
