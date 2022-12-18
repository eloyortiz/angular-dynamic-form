import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { CustomBase } from "./custom-controls/interfaces/custom-base";
import { CustomControlService } from "./custom-controls/services/custom-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  providers: [CustomControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() customControls: CustomBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = "";

  constructor(private ccs: CustomControlService) {}

  ngOnInit() {
    this.form = this.ccs.toFormGroup(
      this.customControls as CustomBase<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
