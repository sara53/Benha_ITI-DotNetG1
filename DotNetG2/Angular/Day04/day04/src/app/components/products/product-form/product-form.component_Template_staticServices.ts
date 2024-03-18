import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;

  productData: { name: string; price: string; quantity: string } = {
    name: '',
    price: '',
    quantity: '',
  };
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductStaticService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  productHandler(e: any) {
    e.preventDefault();
    if (this.productId == 0) {
      // add
      let newId = this.productServices.products.length + 1;
      this.productServices.addNewProduct({
        id: newId,
        ...this.productData,
      });
      this.router.navigate(['/products']);
    } else {
      // edit
    }
  }
}
