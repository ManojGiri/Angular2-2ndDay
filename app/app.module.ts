import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ShoppingCartcomponent }  from './ShoppingCart.component';
import { Productcomponent }  from './Product.component';
import { FormsModule} from '@angular/forms';
import { QuantityPipe }  from './quantity.Pipe';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ShoppingCartcomponent,Productcomponent,QuantityPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
