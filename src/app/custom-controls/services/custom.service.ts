import { Injectable } from "@angular/core";

import { of } from "rxjs";
import { CustomBase } from "../interfaces/custom-base";
import { DropdownCustom } from "../interfaces/custom-dropdown";
import { TextboxCustom } from "../interfaces/custom-textbox";

@Injectable()
export class CustomService {
  // TODO: get from a remote source of custom metadata
  getCustomControls() {
    const controls: CustomBase<string>[] = [
      new DropdownCustom({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" },
        ],
        order: 3,
      }),

      new TextboxCustom({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1,
      }),

      new TextboxCustom({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2,
      }),
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
