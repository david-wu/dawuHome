import { async, TestBed } from '@angular/core/testing';
import { FuzzItemListViewerComponent } from './fuzz-item-list-viewer.component';
describe('FuzzItemListViewerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FuzzItemListViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FuzzItemListViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fuzz-item-list-viewer.component.spec.js.map