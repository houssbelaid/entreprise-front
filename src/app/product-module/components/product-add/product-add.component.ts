import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  user: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
