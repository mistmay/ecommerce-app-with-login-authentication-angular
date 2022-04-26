import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductTotal } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: ProductTotal[] = [];
  productList = new BehaviorSubject<ProductTotal[]>([]);
  multipleItem: number = 0;

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: ProductTotal): void {
    let addNewItem: boolean = true;
    this.cartItemList.forEach((element: ProductTotal) => {
      if (element.id === product.id) {
        element.quantity++;
        this.multipleItem++;
        element.total += element.price;
        addNewItem = false;
      }
    });
    if (addNewItem) {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal: number = 0;
    this.cartItemList.map((item: ProductTotal) => {
      grandTotal += item.total;
    });
    return grandTotal;
  }

  removeCartItem(product: ProductTotal): void {
    this.cartItemList.map((item: ProductTotal, index: number) => {
      if (item.id === product.id) {
        this.cartItemList.splice(index, 1);
        this.multipleItem -= item.quantity - 1;
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart(): void {
    this.cartItemList = [];
    this.multipleItem = 0;
    this.productList.next(this.cartItemList);
  }

}
