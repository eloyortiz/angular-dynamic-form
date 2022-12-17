import { Injectable } from '@angular/core';

import { DropdownCustom } from './custom-dropdown';
import { CustomBase } from './custom-base';
import { TextboxCustom } from './custom-textbox';
import { of } from 'rxjs';

@Injectable()
export class CustomService {
  // TODO: get from a remote source of custom metadata
  getCustomControls() {
    const controls: CustomBase<string>[] = [
      new DropdownCustom({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextboxCustom({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxCustom({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
