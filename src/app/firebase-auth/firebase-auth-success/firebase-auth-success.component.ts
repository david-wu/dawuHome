import {
  Component,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// declare global {
//   interface Window {
//     firebase: any;
//     firebaseui: any;
//   }
// }

@Component({
  selector: 'dwu-firebase-auth-success',
  templateUrl: './firebase-auth-success.component.html',
  styleUrls: ['./firebase-auth-success.component.scss']
})
export class FirebaseAuthSuccessComponent {

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    console.log('route', this.route);
  }
}
