import { Component, Input, OnInit } from '@angular/core';
import { ProductservicesService } from 'src/app/services/productservices.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {

  @Input() cartItem1 :any
   
  constructor(private productservice: ProductservicesService) { }

  ngOnInit(): void {
  }
//   onDeleteproduct(index :number )
//   {
// this.cartItem1.get('product').removeAt(index);
//   }
}
