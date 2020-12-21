import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { NewProductDataComponent } from './new-product-data/new-product-data.component';
import { SortPipe } from './shared/sort/sort.pipe';
import { FilterPipe } from './shared/filter/filter.pipe';
import { InStockPipe } from './shared/inStock/in-stock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CatalogComponent,
    NewProductDataComponent,
    SortPipe,
    FilterPipe,
    InStockPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
