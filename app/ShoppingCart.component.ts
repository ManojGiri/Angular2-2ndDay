import { Component } from '@angular/core';

@Component({
  selector: 'cart',
  /*template: `
  <div *ngFor="let p of products">
  <product [prodDetails]="p"></product>
  </div>
  `,*/
  templateUrl:'./app/cart.template.html',
})
export class ShoppingCartcomponent  { 
  heading:string="Shopping Cart";
  classToBeApplied:string="Highlight";
  ApplyStyle:boolean=true;
   products:any[]=[
     {name:'Laptop',isFree:true,price:50000,quantity:10,imageUrl:'http://pngimg.com/uploads/laptop/laptop_PNG5930.png',rating:1},
          {name:'Tab',isFree:false,price:20000,quantity:5,imageUrl:'http://pngimg.com/uploads/laptop/laptop_PNG5920.png',rating:5},
               {name:'Mobile',isFree:true,price:5000,quantity:6,imageUrl:'http://pngimg.com/uploads/laptop/laptop_PNG5930.png',rating:2},
                    {name:'TV',isFree:true,price:25000,quantity:100,imageUrl:'http://pngimg.com/uploads/laptop/laptop_PNG5930.png',rating:8}
   ];

   changeHeading()
   {
     this.heading ="FlipKart";
   }
   changeHeadingT(evt:any)
   {
     console.log(evt.target);
     this.heading=evt.target.value;
   }
    }
