import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CustomBase } from './custom-base';
import { CustomControlService } from './custom-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [CustomControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() customControls: CustomBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: CustomControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(
      this.customControls as CustomBase<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
