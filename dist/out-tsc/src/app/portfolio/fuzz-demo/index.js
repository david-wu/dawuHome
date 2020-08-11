import { __read, __spread } from "tslib";
import { DEMO_PAGE_COMPONENTS } from './demo-page/index';
import { DemoPageWrapperComponent } from './demo-page-wrapper/demo-page-wrapper.component';
import { AppComponent } from './app.component';
export var COMPONENTS = __spread(DEMO_PAGE_COMPONENTS, [
    DemoPageWrapperComponent,
    AppComponent,
]);
export * from './demo-page/index';
export * from './demo-page-wrapper/demo-page-wrapper.component';
export * from './app.component';
//# sourceMappingURL=index.js.map