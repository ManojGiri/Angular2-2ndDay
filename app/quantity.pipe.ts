import { Pipe,PipeTransform } from '@angular/core';
@Pipe({

    name:'qty';
})
export class QuantityPipe implements PipeTransform{
    transform(inputValue:number,args:string)
    {
        return inputValue+" "+args;
    }
}