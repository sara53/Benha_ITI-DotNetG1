import { Component, OnInit } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(public x: ProductStaticService) {}
  ngOnInit(): void {
    this.products = this.x.getAllProducts();
    console.log(this.products);
  }

  deleteProductHandler(id: any) {
    this.products = this.x.deleteProduct(id);
  }
}
