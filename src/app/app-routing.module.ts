import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-module/components/product-list/product-list.component';
import { ProductDetailComponent } from './product-module/components/product-detail/product-detail.component';
import { WelcomeComponent } from './product-module/components/welcome/welcome.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { ProductGuard } from './product-module/guards/product.guard';
import { ProductAddComponent } from './product-module/components/product-add/product-add.component';

const routes: Routes = [
  { path: 'products' , component: ProductListComponent },
  { path: 'product/:id' , component: ProductDetailComponent , canActivate: [ProductGuard] },
  { path: 'welcome' , component: WelcomeComponent },
  { path: 'productAdd' , component: ProductAddComponent },
  { path: '' , redirectTo: 'welcome' , pathMatch: 'full' },
  { path: '**' , component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
