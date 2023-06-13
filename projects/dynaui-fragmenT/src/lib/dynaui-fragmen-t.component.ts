import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ja-dynaui-fragmenT',
  template: `
    <div class="main-container">
      <ng-content></ng-content>
    </div>
`,
  styleUrls: ['./styles.css'],
})
export class DynauiFragmenTComponent{

}
