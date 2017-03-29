import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'filter'})

export class FilterPipe implements PipeTransform{
  transform(tasks: any, term: any): any {
    //Check if search is undefined
    if(term === undefined) return tasks;
    // Else return updated array
    return tasks.filter(function(task:any){
      return task.name.toLowerCase().includes(term.toLowerCase());
    })
  }
}
