import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;

  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, Validators.required),
  });

  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getProductName.setValue('');
        this.getPrice.setValue(null);
        this.getQuantity.setValue(null);
      },
    });
    if (this.productId != 0) {
      this.productServices.getProductById(this.productId).subscribe({
        next: (data) => {
          this.product = data;
          this.getProductName.setValue(this.product.productName);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
        },
      });
    }
  }

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
  productHandler(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        // add
        this.productServices.addNewProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (error) => console.log(error),
        });
      } else {
        // edit
        this.productServices
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else {
      console.log('Fix Form Errors');
    }
  }
}
