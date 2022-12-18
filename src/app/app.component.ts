import { Component } from "@angular/core";

import { Observable } from "rxjs";
import { CustomBase } from "./custom-controls/interfaces/custom-base";
import { CustomService } from "./custom-controls/services/custom.service";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form
        [customControls]="customControls$ | async"
      ></app-dynamic-form>
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
