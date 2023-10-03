import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  cartItems: CartItem[] = [];
  name: string = '';
  totalPrice!: number;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    let { name, totalPrice } = this.cartService.getConfirmation();
    this.name = name || '';
    this.totalPrice = totalPrice;
  }
}
