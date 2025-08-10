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

// angular:jit:template:src/app/footer/footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src/app/footer/footer.html"() {
    footer_default = '<footer class="shell-footer">\n  <span>&copy; 2025 Ita\xFA Unibanco | Microfrontends Demo</span>\n</footer>\n';
  }
});

// angular:jit:style:src/app/footer/footer.scss
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src/app/footer/footer.scss"() {
    footer_default2 = '/* src/app/footer/footer.scss */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  background: #f7f6f4;\n  color: #212121;\n  margin: 0;\n  padding: 0;\n}\n.shell-footer {\n  width: 100%;\n  background: #ffffff;\n  border-top: 2px solid #ff6200;\n  padding: 24px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  color: #212121;\n  font-weight: 400;\n  letter-spacing: 0.05em;\n  box-shadow: 0 -2px 8px rgba(255, 98, 0, 0.05);\n}\n@media (max-width: 700px) {\n  .shell-footer {\n    padding: 12px 0;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n';
  }
});

// src/app/footer/footer.component.ts
var FooterComponent;
var init_footer_component = __esm({
  "src/app/footer/footer.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    FooterComponent = class FooterComponent2 {
    };
    FooterComponent = __decorate([
      Component({
        selector: "itau-footer",
        template: footer_default,
        standalone: false,
        styles: [footer_default2]
      })
    ], FooterComponent);
  }
});

// src/app/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer_component();
    describe("FooterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FooterComponent]
          // Declare the component
        }).compileComponents();
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should render the footer content", () => {
        const footerElement = fixture.debugElement.nativeElement;
        expect(footerElement).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-app-footer-footer.spec.js.map
