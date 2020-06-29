
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import {
  combineLatest,
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { share } from 'rxjs/operators';
import { TooltipViewComponent } from '@common/tooltip/tooltip-view.component';

@Injectable()
export class TooltipService {

  public rootElement = document && document.body;
  public hoverComponentRef: any;

  public hoverEl$: BehaviorSubject<HTMLElement> = new BehaviorSubject(undefined);
  public templatesByEl$: BehaviorSubject<Map<HTMLElement, TemplateRef<any>>> = new BehaviorSubject(new Map());

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.appendComponentToDocBody(TooltipViewComponent);

    combineLatest(
      this.hoverEl$,
      this.templatesByEl$,
    )
      .subscribe(([hoverEl, templatesByEl]: [HTMLElement, Map<HTMLElement, TemplateRef<any>>]) => {
        const hoverComponent = this.hoverComponentRef.instance;
        if (!hoverEl) {
          hoverComponent.template = undefined;
          return;
        }
        const template = templatesByEl.get(hoverEl);
        const boundingRect = hoverEl.getBoundingClientRect();

        hoverComponent.top = `${boundingRect.top}px`;
        hoverComponent.left = `${boundingRect.left}px`;
        hoverComponent.template = template;

        console.log('boundingRect', boundingRect)

        hoverComponent.transform = `translate(0, -100%)`;
      });
  }

  public ngOnDestroy() {
    this.appRef.detachView(this.hoverComponentRef.hostView);
    this.hoverComponentRef.destroy();
  }

  public registerTooltip(tooltipEl: HTMLElement, tooltipTemplate: TemplateRef<any>) {
    const nextTemplatesByEl = new Map(this.templatesByEl$.value);
    nextTemplatesByEl.set(tooltipEl, tooltipTemplate);
    this.templatesByEl$.next(nextTemplatesByEl);

    const enterHandler = () => {
      this.hoverEl$.next(tooltipEl);
    };
    const leaveHandler = () => {
      this.hoverEl$.next(undefined);
    };
    tooltipEl.addEventListener('mouseenter', enterHandler);
    tooltipEl.addEventListener('focus', enterHandler);
    tooltipEl.addEventListener('mouseleave', leaveHandler);
    tooltipEl.addEventListener('blur', leaveHandler);
  }

  public appendComponentToDocBody(component: any) {
    this.hoverComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // Attach component to appRef for change detection
    this.appRef.attachView(this.hoverComponentRef.hostView);

    const domElem = (this.hoverComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

}