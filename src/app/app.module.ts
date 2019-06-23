import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-module/components/product-list/product-list.component';
import { ProductFilterPipe } from './product-module/pipes/product-filter.pipe';
import { StarComponent } from './shared/star/star.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './product-module/components/welcome/welcome.component';
import { ProductDetailComponent } from './product-module/components/product-detail/product-detail.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { NavbarComponent } from './product-module/components/navbar/navbar.component';
import { ProductAddComponent } from './product-module/components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PageNotfoundComponent,
    NavbarComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
