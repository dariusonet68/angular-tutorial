import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alarms',
  templateUrl: './product-alarms.component.html',
  styleUrls: ['./product-alarms.component.css']
})
export class ProductAlarmsComponent {
@Input() product!: Product;
}
