import { Component, OnInit } from '@angular/core';
import { ProductTotal } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: ProductTotal[] = [];
  grandTotal: number = 0;
  displayedColumns: string[] = ['title', 'image', 'description', 'price', 'quantity', 'total', 'action'];
  dataSource!: MatTableDataSource<ProductTotal>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: ProductTotal[]) => {
        this.products = res;
        this.dataSource = new MatTableDataSource(res);
        this.grandTotal = this.cartService.getTotalPrice();
      });
  }

  removeItem(item: ProductTotal): void {
    this.cartService.removeCartItem(item);
  }

  emptyCart(): void {
    this.cartService.removeAllCart();
  }

}
