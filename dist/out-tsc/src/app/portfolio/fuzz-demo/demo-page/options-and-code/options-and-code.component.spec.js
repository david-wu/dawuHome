import { async, TestBed } from '@angular/core/testing';
import { OptionsAndCodeComponent } from './options-and-code.component';
describe('OptionsAndCodeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OptionsAndCodeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OptionsAndCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=options-and-code.component.spec.js.map