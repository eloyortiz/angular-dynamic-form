import { Component } from '@angular/core';

import { CustomService } from './custom.service';
import { CustomBase } from './custom-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [customControls]="customControls$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [CustomService],
})
export class AppComponent {
  customControls$: Observable<CustomBase<any>[]>;

  constructor(service: CustomService) {
    this.customControls$ = service.getCustomControls();
  }
}
