import { async, TestBed } from '@angular/core/testing';
import { FuzzalyticsComponent } from './fuzzalytics.component';
describe('FuzzalyticsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FuzzalyticsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FuzzalyticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fuzzalytics.component.spec.js.map