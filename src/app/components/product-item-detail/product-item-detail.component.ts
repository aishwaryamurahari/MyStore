import { Component, OnInit } from '@angular/core';
import { Product, quantities } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {};
  quantities: number[] = quantities;
  quantity: number = quantities[0];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let products: Product[] = [];
    this.productService.getProducts().subscribe((data: Product[]) => {
      products = data;
      let id = parseInt(this.route.snapshot.params['id']);
      this.product = products.find((p) => {
        return p.id === id;
      })!;
    });
  }
  addItem(name: string, price: number, quantity: number, url: string) {
    let cartItem = { name, price, quantity, url };
    this.cartService.addItem(cartItem);
  }
  onChange(quantity: number) {
    this.quantity = quantity;
  }
}
