import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { shoppingMenu } from '../shoppingmenu.model';
import { shoppingMenuservice } from '../shoppingmenu.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit,OnDestroy {

// @Output() shoppingitemwasselected = new EventEmitter<shoppingMenu>();
  shopping : shoppingMenu[] =[

   
  ];
  subscription : Subscription;
  constructor(private shoppingservice :shoppingMenuservice,
    private router :Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
this.subscription=this.shoppingservice.itemchanged.
subscribe((item :shoppingMenu[]) =>
{
  this.shopping=item;
}
)

  
    this.shopping=this.shoppingservice.getshopping();
  }
  onNewitem()
  {
this.router.navigate(['new'],{relativeTo : this.route});
  }



  // onshoppingitemselecded(shopping : shoppingMenu)
  // {
  //   this.shoppingitemwasselected.emit(shopping);
  // }

  ngOnDestroy()
  {
    this.subscription.unsubscribe;
  }
}
