import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA , NgModule } from '@angular/core';
import { NgAdvancedSearchComponent } from './advanced-search.component';
import { FilterSavePopupComponent } from './filter-save-popup/filter-save-popup.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    NgAdvancedSearchComponent,
    FilterSavePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRippleModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [NgAdvancedSearchComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class NgAdvancedSearchModule { }