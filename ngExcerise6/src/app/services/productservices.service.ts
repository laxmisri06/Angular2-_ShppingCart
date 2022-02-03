import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { productsUrl} from 'src/app/config/apiurl'



// const apiURL ='http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(private http : HttpClient) 
  
  { }

  
 productItem : Product[] = [
  
  //this static data will be replaced by api
  new Product(1,'Product 1','This is the product one description.The product is really kool!!',
    1000),
    new Product(2,'Product 2','This is the product two description.The product is really kool!!',
    1500),
    new Product(3,'Product 3','This is the product three description.The product is really kool!!',
    2000),
    new Product(4,'Product 4','This is the product four description.The product is really kool!!',
    3000),
    new Product(5,'Product 5','This is the product five description.The product is really kool!!',
    4500),
    new Product(6,'Product 6','This is the product six description.The product is really kool!!',
    6666),
    new Product(7,'Product 6','This is the product seven description.The product is really kool!!',
    6500),
    new Product(8,'Product 6','This is the product eight description.The product is really kool!!',
    8000),
    new Product(9,'Product 6','This is the product nine description.The product is really kool!!',
    9000)
]


//normal code
getproduct() : Product[]
{
  //TODO : Populate products from an API and return an observable
  return this.productItem
}


}
