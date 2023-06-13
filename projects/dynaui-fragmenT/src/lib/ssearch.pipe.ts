import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleSearch'
})
export class SimpleSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return null;


    args = args.toLowerCase();

    return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
