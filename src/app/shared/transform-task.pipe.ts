import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: string, args: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}
