import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { shoppingMenu } from '../../shoppingmenu.model';
import { shoppingMenuservice } from '../../shoppingmenu.service';

@Component({
  selector: 'app-shoppingitem',
  templateUrl: './shoppingitem.component.html',
  styleUrls: ['./shoppingitem.component.scss']
})
export class ShoppingitemComponent implements OnInit {

  @Input() shoppingVal : shoppingMenu
  @Input() index:number;

// @Output() shoppingevent = new EventEmitter<void>();



  constructor(private shoppingservice :shoppingMenuservice) { }

  ngOnInit(): void {
  }
  onselected()
  {
this.shoppingservice.shoppingselected.emit(this.shoppingVal);
  }
}
