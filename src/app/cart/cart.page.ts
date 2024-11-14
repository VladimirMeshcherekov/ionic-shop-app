import { Component } from "@angular/core";
import {Cart} from '../model/cart.model';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {TabsPage} from "../tabs/tabs.page";

@Component({
  templateUrl: "cart.page.html"

})
export class CartDetailComponent {
  constructor(public cart: Cart, private router: Router) {
  }

  public GetCart(): Cart{
    return this.cart;
  }

  validateInput(event: any) {
    var inputElement =(event.target as HTMLSelectElement)
    var quantity = Number(inputElement.value);
    if(quantity < 0){
      inputElement.value = "0";
    }

  }
}
