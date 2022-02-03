import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth-service';
import { datastorageService } from '../data-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,
OnDestroy {
  isAuthenticated = false;
private usersub:Subscription;
  constructor(private datastorage : datastorageService,
    private authservice:AuthService) { }

  ngOnInit(): void {
    this.usersub=this.authservice.user.subscribe(

      user =>
      {
this.isAuthenticated = !user ? false : true
      }
    );
  }
  onsaveshoppingitem()
  {
this.datastorage.storeShopping();
  }
  onFetchshoppingitem()
  {
    this.datastorage.fetchshoppingitem();
  }

  onlogout()
  {
    this.authservice.logout();
  }
  ngOnDestroy()
  {
    this.usersub.unsubscribe();
  }
}
