import { Component } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {Cart} from "../model/cart.model";

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {

  public defaultPage: number = 1;

  public selectedCategory: string | undefined = undefined;
  public productsPerPage = 4;
  public selectedPage = this.defaultPage;

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  constructor(private repository: ProductRepository, private cart: Cart) {
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): (string | undefined)[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory: string | undefined): void {
    this.selectedCategory = newCategory;
    this.selectedPage = this.defaultPage;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(event: Event) {
    const selectElement = event.target as HTMLSelectElement;  // Явно указываем тип
    const pageSize = Number(selectElement.value);  // Преобразуем value в число
    this.productsPerPage = pageSize;
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  //  this.Router.navigateByUrl('/cart');
  }
}


