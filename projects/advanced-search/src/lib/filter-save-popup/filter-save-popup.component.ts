import { ChangeDetectorRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgAsSearchTerm } from '../models';


@Component({
  selector: 'app-filter-save-popup',
  templateUrl: './filter-save-popup.component.html',
  styleUrls: ['./filter-save-popup.component.css']
})
export class FilterSavePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<FilterSavePopupComponent>) { }
  
  public get filters(): NgAsSearchTerm[] {
    return this.data['filters'];

  }
  public get filterNames() : string[] {
    return this.filters.map(term => term.name);
  }

  selected: string = null;
  selectedIsValid: boolean;
  newName: string;
  isDefault: boolean;

  ngOnInit() {
    this.selected = this.data['loadedfilter'];

    this.selectedIsValid = this.data['selectedIsValid'];
    this.newName = this.selectedIsValid ? this.selected : '';
    this.newNameChanged();
    this.isDefault = this.filters.find(f => f.name === this.selected)?.isDefault;
  }

  selectChanged() {
    const selectedFilter = this.filters.find(f => f.name === this.selected);
    this.newName = selectedFilter.name;
    this.isDefault = selectedFilter.isDefault;
  }

  load() {
    this.dialogRef.close({
      selected: this.selected
    });
  }

  save() {
    this.dialogRef.close({
      name: this.newName,
      isDefault: this.isDefault
    });
  }

  del() {
    this.dialogRef.close({
      deleted: this.selected
    });
  }

  newNameChanged() {
    const filter = this.filters.find(f => f.name === this.newName);
    if(filter !== undefined) {
      this.isDefault = filter.isDefault;
    } else {
      this.isDefault = false;
    }
  }

}