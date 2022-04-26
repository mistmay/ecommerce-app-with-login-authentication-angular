import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductTotal } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  totalItem: number = 0;

  constructor(private cartService: CartService, private searchService: SearchService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: ProductTotal[]) => {
        this.totalItem = res.length + this.cartService.multipleItem;
      });
  }

  search(event: Event) {
    this.searchService.search.next(this.searchTerm);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getLoggedStatus(): boolean {
    return this.loginService.isLoggedIn();
  }

}
