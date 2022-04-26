import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProductsListPageComponent } from './views/products-list-page/products-list-page.component';
import { DashboardComponent } from './views/products-list-page/components/dashboard/dashboard.component';
import { ProductListComponent } from './views/products-list-page/components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './views/cart/cart.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupFormComponent } from './shared/login-signup-form/login-signup-form.component';
import { LoginComponent } from './shared/login-signup-form/components/login/login.component';
import { SignupComponent } from './shared/login-signup-form/components/signup/signup.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListPageComponent,
    DashboardComponent,
    ProductListComponent,
    CartComponent,
    FilterPipe,
    LoginSignupFormComponent,
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
