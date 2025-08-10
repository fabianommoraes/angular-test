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

// angular:jit:template:src/app/dashboard/dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src/app/dashboard/dashboard.html"() {
    dashboard_default = "<h2>Welcome to the Shell Dashboard!</h2>\n";
  }
});

// angular:jit:style:src/app/dashboard/dashboard.scss
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src/app/dashboard/dashboard.scss"() {
    dashboard_default2 = "/* src/app/dashboard/dashboard.scss */\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/dashboard/dashboard.component.ts
var DashboardComponent;
var init_dashboard_component = __esm({
  "src/app/dashboard/dashboard.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    DashboardComponent = class DashboardComponent2 {
    };
    DashboardComponent = __decorate([
      Component({
        selector: "app-dashboard",
        standalone: false,
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], DashboardComponent);
  }
});

// src/app/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard_component();
    describe("DashboardComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DashboardComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-app-dashboard-dashboard.spec.js.map
