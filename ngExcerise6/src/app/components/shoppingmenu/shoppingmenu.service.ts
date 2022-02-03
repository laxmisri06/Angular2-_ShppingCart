import { EventEmitter, Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { Subject } from "rxjs";
import { shoppingMenu } from "./shoppingmenu.model";



@Injectable({'providedIn':'root'})
export class shoppingMenuservice
{

    shoppingselected = new EventEmitter<shoppingMenu>();
    itemchanged = new Subject<shoppingMenu[]>();
    // shopping : shoppingMenu[] =[

    //     new shoppingMenu('TestA','hello welcome','assets/rapunzellove.jpg'),
    //     new shoppingMenu('TestB','hello world','assets/rapunzellove.jpg'),
    //     new shoppingMenu('hello','hello welcome','assets/rapunzellove.jpg')
    //   ];

    shopping : shoppingMenu[]=[];
    
setshopping(shopping : shoppingMenu[])
{
this.shopping= shopping;
this.itemchanged.next(this.shopping.slice());
}
      getshopping()
      {
         return this.shopping.slice();
      }

      getshoppings(index:number)
      {
return this.shopping[index];
      }
      addshoppingitem(shoppingmenu: shoppingMenu)
      {
this.shopping.push(shoppingmenu);
this.itemchanged.next(this.shopping.slice());
      }

      updateshoppingitem(index:number ,newitem : shoppingMenu)
      {
this.shopping[index] = newitem;
this.itemchanged.next(this.shopping.slice());
      }

      deletetheitem(index:number)
      {
        this.shopping.splice(index,1);
        this.itemchanged.next(this.shopping.slice())  ;
      }
}