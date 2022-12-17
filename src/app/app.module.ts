import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormCustomComponent } from './dynamic-form-custom.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormCustomComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
