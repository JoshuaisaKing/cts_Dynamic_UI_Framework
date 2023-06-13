import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdvancedSearchComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AdvancedSearchComponent
  ]
})
export class AdvancedSearchModule { }
