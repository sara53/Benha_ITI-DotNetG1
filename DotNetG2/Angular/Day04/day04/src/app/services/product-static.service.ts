import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productsList } from '../models/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  products: Iproduct[] = [];
  constructor() {
    this.products = productsList;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(id: any) {
    return this.products.find((product) => product.id == id);
  }

  addNewProduct(product: any) {
    return this.products.push(product);
  }

  deleteProduct(id: any) {
    this.products = this.products.filter((product) => product.id != id);
    return this.products;
  }
  // edit
}
