import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { shoppingMenu } from '../shoppingmenu.model';
import { shoppingMenuservice } from '../shoppingmenu.service';

@Component({
  selector: 'app-shoppingdetail',
  templateUrl: './shoppingdetail.component.html',
  styleUrls: ['./shoppingdetail.component.scss']
})
export class ShoppingdetailComponent implements OnInit {

shoppingVal:shoppingMenu
 ;
  constructor(private shoppingservice: shoppingMenuservice,
    private routes :ActivatedRoute,
    private router : Router) { }
id:number;
  ngOnInit(): void {
    this.routes.params.subscribe(
      (params : Params) =>
      {
        this.id=+params['id'];
        this.shoppingVal=this.shoppingservice.getshoppings(this.id);
      }
    )
  }
  onEdititem()
  {
this.router.navigate(['edit'],{relativeTo:this.routes})
  }
  ondeleteitem()
  {
    this.shoppingservice.deletetheitem(this.id);
    this.router.navigate(['/shoppingmenu'])
  }
}
