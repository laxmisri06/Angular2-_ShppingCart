import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductservicesService } from 'src/app/services/productservices.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  productlist : Product[]=[];
  
  constructor(private productservice : ProductservicesService) { }

  ngOnInit(): void 
  {
    this.productlist=this.productservice.getproduct();
    // console.log(this.productservice.getproduct());

  }

}