import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { shoppingMenuservice } from '../shoppingmenu.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.scss']
})
export class ShoppingeditComponent implements OnInit {


  id:number;
  editMode =false;
  loginform: FormGroup;

  constructor(private route : ActivatedRoute,
    private shoppingmenu :shoppingMenuservice,
    private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : Params)=>
    {
this.id = +params['id'];
this.editMode=params['id'] != null;
this.initForm();
    })
  }
  onSubmit()
  {
    // console.log(this.loginform);
    if (this.editMode) {
      this.shoppingmenu.updateshoppingitem(this.id,this.loginform.value)
    } else {
      this.shoppingmenu.addshoppingitem(this.loginform.value);
    }
    this.oncancel();
  }

  oncancel()
  {
    this.router.navigate(['../'],{relativeTo: this.route})
  }
  private initForm() {
    let itemName = '';
    let itemImagepath = '';
    let itemDescription = '';
    // let itemtype = new FormArray([]);

    if (this.editMode) 
    {
      const item = this.shoppingmenu.getshoppings(this.id);
      itemName = item.name;
      itemImagepath = item.imagepath;
      itemDescription = item.description;
    
    }

    this.loginform = new FormGroup({
      'name': new FormControl(itemName, Validators.required),
      'imagepath': new FormControl(itemImagepath, Validators.required),
      'description': new FormControl(itemDescription, Validators.required),
      
    });
  }

 }
