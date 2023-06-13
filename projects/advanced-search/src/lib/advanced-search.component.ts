import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jms-advanced-search',
  templateUrl:'./advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'
  ]
})
export class AdvancedSearchComponent {
  @Output() search: EventEmitter<any>  = new EventEmitter<any>;

  criteria: any = {
    keyword: '',
    category: ''
  };
  
  runSearch(){
    this.search.emit(this.criteria);
  }
}
