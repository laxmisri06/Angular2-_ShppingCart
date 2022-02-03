import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { datastorageService } from "../components/shared/data-storage.service";
import { shoppingMenu } from "../components/shoppingmenu/shoppingmenu.model";

@Injectable({providedIn:'root'})
export class shoppingitemResolverservice implements Resolve<shoppingMenu[]>
{
constructor(private datastorage : datastorageService)
{

}
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
{
    return this.datastorage.fetchshoppingitem();
}
}