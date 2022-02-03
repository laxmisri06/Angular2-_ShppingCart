import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerserviceService } from 'src/app/services/messengerservice.service';



@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

@Input() productarray: Product;


// addTowishlist :boolean = false;

  constructor( private messageservice : MessengerserviceService  ) { }

  ngOnInit(): void {

  }
handleaddtocart()
{
this.messageservice.sendMsg(this.productarray);
// console.log(this.messageservice.sendMsg(this.productarray));
}



}
