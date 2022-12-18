import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { CustomBase } from "./custom-controls/interfaces/custom-base";

@Component({
  selector: "app-custom",
  templateUrl: "./dynamic-form-custom.component.html",
})
export class DynamicFormCustomComponent {
  @Input() custom!: CustomBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.custom.key].valid;
  }
}
