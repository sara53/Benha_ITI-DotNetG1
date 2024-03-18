import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductFormComponent,
    ProductItemComponent,
    LoginComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
