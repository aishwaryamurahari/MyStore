import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  name: string = '';
  address: string = '';
  creditNumber!: number;

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  addOneItem(itemName: string) {
    this.cartService.addOneItem(itemName);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeOneItem(itemName: string) {
    this.cartService.removeOneItem(itemName);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  submitForm() {
    let user = {
      name: this.name,
      address: this.address,
      credit: this.creditNumber,
    };
    this.cartService.addUser(user);
    this.route.navigate(['confirmation']);
    this.cartService.clearCart();
  }
}
