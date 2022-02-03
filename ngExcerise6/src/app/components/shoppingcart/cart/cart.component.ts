import { Component, OnInit } from '@angular/core';


import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { MessengerserviceService } from 'src/app/services/messengerservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItem =[

    // {id:1,productid:1,productName:'Test1',qty:4,price:100},
    // {id:1,productid:1,productName:'Test1',qty:4,price:100},
    // {id:1,productid:1,productName:'Test1',qty:4,price:100},
    // {id:1,productid:1,productName:'Test1',qty:4,price:100},
    // {id:1,productid:1,productName:'Test1',qty:4,price:100}
  ];
 constructor(private messageservice:MessengerserviceService)
 {

 } 
  carttotal = 0;
  ngOnInit(): void {
this.messageservice.getMsg().subscribe( (product:Product)=>
{
// console.log(product);
this.addproductTocart(product);
})

}
addproductTocart(product : Product)
{

  let productExits =false;

for(let i in this.cartItem)
{
  if(this.cartItem[i].productid === product.id)
  {
this.cartItem[i].qty ++;
productExits=true;
break;
  }
}


  if(!productExits)
  {
    this.cartItem.push(
      {
        productid:product.id,
        productName:product.productName,
        price:product.price,
        qty:1
      }
    )
  }

  this.carttotal = 0
  this.cartItem.forEach((item) =>
  {
    this.carttotal += (item.qty * item.price);
  })
  
}
}

