import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;

  product: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productServices.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => console.log(error),
    });
  }

  backToProducts() {
    this.router.navigate(['/products']);
  }
}
