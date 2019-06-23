import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  constructor(private _route: ActivatedRoute , private _router: Router , private _service: ProductService) { }

  ngOnInit() {
// tslint:disable-next-line: no-string-literal
    this._service.getProduct(this._route.snapshot.params['id']).subscribe(result => this.product = result);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
