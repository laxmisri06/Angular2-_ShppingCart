import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shoppingMenu } from "../shoppingmenu/shoppingmenu.model";
import { shoppingMenuservice } from "../shoppingmenu/shoppingmenu.service";


@Injectable({'providedIn':'root'})
export class datastorageService
{
constructor(private http :HttpClient,
private shoppingservice : shoppingMenuservice)
{

}

storeShopping()
{
const shopping =this.shoppingservice.getshopping();
this.http.put('https://ngecommerce-app6-default-rtdb.firebaseio.com/shopping.json',shopping).
subscribe((response)=>
{
console.log(response);
})


;
}
fetchshoppingitem()
{
    this.http.get<shoppingMenu[]>('https://ngecommerce-app6-default-rtdb.firebaseio.com/shopping.json')
    .subscribe((shopping)=>
    {
// console.log(shopping);
this.shoppingservice.setshopping(shopping);
    })
}

}