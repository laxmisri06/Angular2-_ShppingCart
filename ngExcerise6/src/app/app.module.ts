import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FilterComponent } from './components/shoppingcart/filter/filter.component';

import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { ProductlistComponent } from './components/shoppingcart/productlist/productlist.component';
import { ProductitemComponent } from './components/shoppingcart/productlist/productitem/productitem.component';
import { CartitemComponent } from './components/shoppingcart/cart/cartitem/cartitem.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { ApproutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingmenuComponent } from './components/shoppingmenu/shoppingmenu.component';
import { ShoppinglistComponent } from './components/shoppingmenu/shoppinglist/shoppinglist.component';
import { ShoppingitemComponent } from './components/shoppingmenu/shoppinglist/shoppingitem/shoppingitem.component';
import { ShoppingdetailComponent } from './components/shoppingmenu/shoppingdetail/shoppingdetail.component';
import { ShoppingStartComponent } from './components/shoppingmenu/shopping-start/shopping-start.component';
import { ShoppingeditComponent } from './components/shoppingmenu/shoppingedit/shoppingedit.component';
import { shoppingMenuservice } from './components/shoppingmenu/shoppingmenu.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingcartComponent,
    FilterComponent,
    
    CartComponent,
    
    ProductlistComponent,
    
    ProductitemComponent,
    
    CartitemComponent,
    
    LoginComponent,
    
    RegisterComponent,
    
    PageNotfoundComponent,
    
    ShoppingmenuComponent,
    
    ShoppinglistComponent,
    
    ShoppingitemComponent,
    
    ShoppingdetailComponent,
    
    ShoppingStartComponent,
    
    ShoppingeditComponent,
    
    AuthComponent,
    
    LoadingspinnerComponent
   
   
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [shoppingMenuservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
