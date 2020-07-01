import { Component } from '@angular/core';

import { PoeService } from '@src/app/poe/services/poe.service';

@Component({
  selector: 'poe',
  templateUrl: './poe.component.html',
  styleUrls: ['./poe.component.scss']
})
export class PoeComponent {

  public jsonParseError: string;

  constructor(public poeService: PoeService) {}

  public ngOnInit() {
    // this.poeService.getPublicStashes('dawu').subscribe((poeResponse) => {
    //   console.log('poeResponse', poeResponse)
    // });
  }

  public onJsonChange(jsonStr: string) {
    let json;
    try{
      json = JSON.parse(jsonStr);
    } catch(err) {
      this.jsonParseError = err;
      return;
    }
    console.log('json', json)
  }
}
