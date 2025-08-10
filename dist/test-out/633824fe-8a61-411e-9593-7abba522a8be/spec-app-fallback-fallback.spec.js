import {
  __decorate,
  init_tslib_es6
} from "./chunk-XHKCCJWD.js";
import {
  Component,
  TestBed,
  init_core,
  init_testing
} from "./chunk-F6CYY75P.js";
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
    init_testing();
    init_fallback_component();
    describe("FallbackComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [FallbackComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FallbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_fallback_spec();
//# sourceMappingURL=spec-app-fallback-fallback.spec.js.map
