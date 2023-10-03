import { Injectable } from '@angular/core';
import { CartItem } from '../models/Cart.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];
  totalPrice: number = 0;
  user: User = {};
  constructor() {}

  addItem(item: CartItem) {
    if (this.cart.some((cartItem) => cartItem.name === item.name)) {
      let index = this.cart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      this.cart[index].quantity = this.cart[index].quantity! + item.quantity!;
    } else {
      this.cart.push(item);
      alert(`Added ${item.name} to cart`);
    }
  }

  addOneItem(itemName: string) {
    let index = this.cart.findIndex((cartItem) => cartItem.name === itemName);
    this.cart[index].quantity!++;
  }

  removeOneItem(itemName: string) {
    let index = this.cart.findIndex((cartItem) => cartItem.name === itemName);
    if (this.cart[index].quantity === 1) {
      this.cart.splice(index, 1);
      alert(`${itemName} has been removed`);
    } else {
      this.cart[index].quantity!--;
    }
  }

  getAllItems() {
    return this.cart;
  }

  getTotalPrice() {
    let price = this.cart.reduce((sum, cur) => {
      return sum + cur.price! * cur.quantity!;
    }, 0);
    this.totalPrice = Number(price.toFixed(2));
    return this.totalPrice;
  }

  getConfirmation() {
    return {
      name: this.user.name,
      totalPrice: this.totalPrice,
    };
  }

  addUser(user: Object) {
    this.user = user;
  }

  clearCart() {
    this.cart = [];
  }
}
