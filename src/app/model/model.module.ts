import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {CartDetailComponent} from "../cart/cart.page";


@NgModule({
  providers: [ProductRepository, StaticDataSource, CartDetailComponent]
})
export class ModelModule {
}
