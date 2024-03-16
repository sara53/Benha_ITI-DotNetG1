import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckAttDirComponent } from './components/Directives/check-att-dir/check-att-dir.component';
import { ContentComponent } from './components/componentsInteractions/content/content.component';
import { LoginComponent } from './components/componentsInteractions/login/login.component';
import { ProductsComponent } from './components/componentsInteractions/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckAttDirComponent,
    ContentComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
