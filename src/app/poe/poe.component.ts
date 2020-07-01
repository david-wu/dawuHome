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
    // this.parseJsonStr(jsonStr);
  }

  public onJsonChange(jsonStr: string) {
    this.parseJsonStr(jsonStr);
  }

  public parseJsonStr(jsonStr: string) {
    let json;
    try{
      json = JSON.parse(jsonStr);
    } catch(err) {
      this.jsonParseError = err;
      return;
    }
    console.log('json', json)
    const explicitModifiersByItemId = {};
    const itemNamesById = {};

    const modifierStrings = []


    json.items.forEach((item) => {
      const explicitMods = item.explicitMods || [];
      explicitModifiersByItemId[item.id] = explicitMods;
      itemNamesById[item.id] = item.name;

      explicitMods.forEach((mod: string) => {
        const splitMods = mod.split(' ');
        const firstMod = splitMods.shift();
        const remaining = splitMods.join(' ');
        modifierStrings.push(remaining);
      });
    });

    console.log('modifierStrings', modifierStrings)
  }
}



