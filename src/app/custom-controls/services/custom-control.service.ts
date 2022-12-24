import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { CustomBase } from "../interfaces/custom-base";

@Injectable()
export class CustomControlService {
  toFormGroup(customControls: CustomBase<string>[]) {
    const group: any = {};

    customControls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || "", Validators.required)
        : new FormControl(control.value || "");
    });
    return new FormGroup(group);
  }
}
