import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorePage } from './store.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {ModelModule} from "../model/model.module";
import {CounterDirective} from "./counter.directive";
import {CartDetailComponent} from "../cart/cart.page";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ModelModule
  ],
  declarations: [StorePage, CounterDirective, CartDetailComponent],
})
export class Tab1PageModule {}
