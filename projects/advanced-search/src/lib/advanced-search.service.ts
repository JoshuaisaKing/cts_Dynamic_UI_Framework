import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService {

  runSearch(criteria:any){
    console.log("Criteria for Search:",criteria);
  }
}
