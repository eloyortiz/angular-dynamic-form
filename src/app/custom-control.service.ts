import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomBase } from './custom-base';

@Injectable()
export class CustomControlService {
  toFormGroup(customControls: CustomBase<string>[]) {
    const group: any = {};

    customControls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
