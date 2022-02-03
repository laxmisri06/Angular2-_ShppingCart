import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerserviceService {

 subject = new Subject;
 productchanged = new Subject<CartItem[]>();

 cartitem : CartItem[];
  sendMsg(product)
  {
    console.log(product);
this.subject.next(product);
  }


  getMsg()
  {
return this.subject.asObservable();
  }
  constructor() { }
  deletecartitem(index:number)
  {
// {
//   this.productItem.splice(index,1);
//   this.productchanged.next(this.productItem.slice())

this.cartitem.splice(index,1);
this.productchanged.next(this.cartitem.slice());
}
}
