import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/Product.model';
import { CartItem } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  cartItems: CartItem[] = [];
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addedProduct(event: CartItem) {
    this.cartService.addItem(event);
  }
}
