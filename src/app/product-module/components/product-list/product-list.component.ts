import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle   = 'Product List';
  imageWidht  = 50;
  products: IProduct[] = [];
  show: boolean;
  filterBy = '';

// tslint:disable-next-line: variable-name
  constructor(private _service: ProductService ) {
    this.show = false;
  }

  ngOnInit() {
    this.initProducts();
  }

  toggleImage(): void {
    this.show = !this.show;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List : ' + message;
  }

  initProducts(): void {
     this._service.getProducts().subscribe(result => {
      this.products = result;
    }, err => {
      console.log(err);
    });
  }

}
