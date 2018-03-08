import { Component,Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div class="ProductStyle">
  <h2>{{prodDetails.name | uppercase }}</h2>
  <img [src]="prodDetails.imageUrl" height="200px" width="200px"/> <br/>
   
     <b> quanity:</b>{{prodDetails.quantity | qty:'pcs'}}<br/>
  <b> Rating:</b>{{prodDetails.rating}}<br/>
  is it Free <input type="checkbox" [(ngModel)]="prodDetails.isFree">
   <div *ngIf="!prodDetails.isFree">
   <b> Price:</b>{{prodDetails.price | currency:'INR':true}}<br/>
 <b> Raw:</b>{{prodDetails|json}}<br/>
</div>
  </div>
  `,
 styles:[`.ProductStyle{
      border: 2px solid blue;
      border-radius: 20px;
      margin:10px;
      padding:10px;}
      `],
})
export class Productcomponent  { 
   @Input() prodDetails:any={}
    }
