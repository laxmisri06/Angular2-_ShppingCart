import { Component, OnInit } from '@angular/core';
import { shoppingMenu } from './shoppingmenu.model';
import { shoppingMenuservice } from './shoppingmenu.service';

@Component({
  selector: 'app-shoppingmenu',
  templateUrl: './shoppingmenu.component.html',
  styleUrls: ['./shoppingmenu.component.scss']  
})
export class ShoppingmenuComponent implements OnInit {


  selectedshopping : shoppingMenu
  constructor(private shoppingservice :shoppingMenuservice) { }

  ngOnInit(): void {
    this.shoppingservice.shoppingselected.subscribe((shopping : shoppingMenu) =>
    {
this.selectedshopping = shopping;
    })
  }

}
