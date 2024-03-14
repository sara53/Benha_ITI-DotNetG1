import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOneWayBindingComponent } from './components/OneWayBinding/check-one-way-binding/check-one-way-binding.component';
import { CheckTwoWayBindingComponent } from './components/TwoWayBinding/check-two-way-binding/check-two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { CheckStructuralDirectivesComponent } from './components/Directives/StructuralDirectives/check-structural-directives/check-structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckOneWayBindingComponent,
    CheckTwoWayBindingComponent,
    CheckStructuralDirectivesComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
