import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessorComponent } from './components/processor/processor.component';
import { GraphicCardComponent } from './components/graphic-card/graphic-card.component';
import { RamComponent } from './components/ram/ram.component';
import { HddComponent } from './components/hdd/hdd.component';
import { SsdComponent } from './components/ssd/ssd.component';
import { CoolerComponent } from './components/cooler/cooler.component';
import { FanComponent } from './components/fan/fan.component';
import { PowerSupplyComponent } from './components/power-supply/power-supply.component';
import { CaseComponent } from './components/case/case.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProcessorComponent,
    GraphicCardComponent,
    RamComponent,
    HddComponent,
    SsdComponent,
    CoolerComponent,
    FanComponent,
    PowerSupplyComponent,
    CaseComponent,
    MotherboardComponent,
    CategoryComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent,
    NavbarComponent,
    SearchComponent,
    CheckoutComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
