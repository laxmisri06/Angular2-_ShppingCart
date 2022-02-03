import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotfoundComponent } from "./components/page-notfound/page-notfound.component";
import { RegisterComponent } from "./components/register/register.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";
import { ShoppingStartComponent } from "./components/shoppingmenu/shopping-start/shopping-start.component";
import { ShoppingdetailComponent } from "./components/shoppingmenu/shoppingdetail/shoppingdetail.component";
import { ShoppingeditComponent } from "./components/shoppingmenu/shoppingedit/shoppingedit.component";

import { ShoppingmenuComponent } from "./components/shoppingmenu/shoppingmenu.component";


const routes :Routes =[
  {path :'' ,redirectTo:'/shopping' ,pathMatch : 'full'},
  // { path : 'auth' , component : AuthComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  { path : 'shopping' , component : ShoppingcartComponent},
  {path:'auth', component:AuthComponent},
  {path : 'shoppingmenu' , component:ShoppingmenuComponent,
  

  children:[
    {path: '', component:ShoppingStartComponent},
    {path:'new', component:ShoppingeditComponent},
    {path:':id' , component:ShoppingdetailComponent},
    
    {path:':id/edit' , component:ShoppingeditComponent}
  ]


},

  {path : '**' , component : PageNotfoundComponent}
  
];


@NgModule(
  {
    imports:[
      RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
  }
)
export class ApproutingModule
{

}