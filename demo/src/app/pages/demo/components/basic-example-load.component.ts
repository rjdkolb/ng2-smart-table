import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES, LocalDataSource } from '../../../../../../ng2-smart-table.ts';
import { BasicExampleLoadService } from './basic-example-load.service';

@Component({
  selector: 'basic-example-load',
  styles: [],
  providers: [BasicExampleLoadService],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleLoadComponent {

  source: LocalDataSource;
  
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();
    
    this.service.getData().then((data) => {
      this.source.load(data);
    })
  }
}
