import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly pathsWithNoNav = new Set(['photos', 'image-sources']);
  public navVisible$: Observable<boolean>;

  constructor(
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.navVisible$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => !this.pathsWithNoNav.has((this.route.firstChild.url as any).value[0].path)),
    );
  }


}
