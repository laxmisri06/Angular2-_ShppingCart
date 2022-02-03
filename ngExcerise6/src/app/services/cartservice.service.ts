import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/apiurl';
// import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

//   constructor(private http : HttpClient) { }



//   getCartItem() : Observable<CartItem[]>
//   {
//     return this.http.get<CartItem[]>(cartUrl).pipe(
//       map((result:any[]) =>
//       {
// // console.log(result);
// // return result;

// let cartItem : CartItem[] =[];

// for(let item of result )
// {
//   let IsproductExists=false;

//   for(let i in cartItem)
//   {
//     if(cartItem[i].productid === item.product.id)
//     {
//     cartItem[i].qty++;
//     IsproductExists =true;
//     break;
//   }
//   }
//   if(!IsproductExists)
//   {
//     cartItem.push(new CartItem(item.id,item.product));
     
    
// }



// }



// return cartItem;
//       })
//     );

//   }

//   addProductToCartItem(product : Product) :Observable<any>
//   {
// return this.http.post(cartUrl , { product });
//   }



}
