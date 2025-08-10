import {
  By,
  init_platform_browser
} from "./chunk-F7XBRLUU.js";
import {
  __decorate,
  init_tslib_es6
} from "./chunk-XHKCCJWD.js";
import "./chunk-QRYRBS2N.js";
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

// src/app/fallback/fallback.spec.ts
var require_fallback_spec = __commonJS({
  "src/app/fallback/fallback.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_fallback_component();
    init_core();
    init_platform_browser();
    var MockNotFoundComponent = class MockNotFoundComponent {
    };
    MockNotFoundComponent = __decorate([
      Component({
        selector: "app-notfound",
        standalone: false,
        template: "<div>Mock NotFound Component</div>"
      })
    ], MockNotFoundComponent);
    describe("FallbackComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FallbackComponent, MockNotFoundComponent]
          // Declare the component and mock child
        }).compileComponents();
        fixture = TestBed.createComponent(FallbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should render the app-notfound component", () => {
        const notFoundElement = fixture.debugElement.query(By.css("app-notfound"));
        expect(notFoundElement).toBeTruthy();
        expect(notFoundElement.nativeElement.textContent).toContain("Mock NotFound Component");
      });
    });
  }
});
export default require_fallback_spec();
//# sourceMappingURL=spec-app-fallback-fallback.spec.js.map
