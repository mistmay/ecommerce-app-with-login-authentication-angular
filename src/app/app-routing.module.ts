import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { ProductsListPageComponent } from './views/products-list-page/products-list-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'products', component: ProductsListPageComponent, canActivate: [LoginGuard] },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
