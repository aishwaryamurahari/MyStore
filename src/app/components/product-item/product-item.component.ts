import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, quantities } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {};
  @Output() addedProduct = new EventEmitter();

  quantities: number[] = quantities;
  quantity: number = quantities[0];

  constructor() {}
  ngOnInit(): void {}

  addItem(name: string, price: number, quantity: number, url: string) {
    let cartItem = { name, price, quantity, url };
    this.addedProduct.emit(cartItem);
  }
  onChange(quantity: number) {
    this.quantity = quantity;
  }
}
