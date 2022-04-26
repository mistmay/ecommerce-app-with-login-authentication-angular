import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/api/products-api.service';
import { Product, ProductTotal, Category } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchKey: string = '';
  productList: ProductTotal[] = [];
  filterCategory: ProductTotal[] = [];

  constructor(private api: ProductsApiService, private cartService: CartService, private searchService: SearchService) {
    this.searchService.clickedCategory.subscribe((category: Category | '') => {
      this.filter(category);
    });
  }

  ngOnInit(): void {
    this.api.getProducts()
      .subscribe((res: Product[]) => {
        res.forEach((element: Product) => {
          if (element.category === "men's clothing" || element.category === "women's clothing") {
            element.category = 'fashion';
          }
          const item: ProductTotal = { ...element, quantity: 1, total: element.price };
          this.productList.push(item);
          this.filterCategory.push(item);
        });
      });
    this.searchService.search.subscribe((val: string) => {
      this.searchKey = val;
    });
  }

  addToCart(item: ProductTotal): void {
    this.cartService.addToCart(item);
  }

  filter(category: Category | ''): ProductTotal | void {
    this.filterCategory = this.productList
      .filter((element: ProductTotal) => element.category === category || category === '');
  }

}
