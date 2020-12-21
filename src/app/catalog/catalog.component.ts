import { Component, OnDestroy, OnInit } from '@angular/core';

import { HttpService } from '../shared/http/http.service'; 

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: any[];

  categoryFilter: string = '';
  sortParam: string = '';
  onlyInStock: boolean = false;

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    await this.getProducts();
  }

  console(text){console.log(text)}


  async getProducts(){
    await this.http.getProducts()
      .then( ( w: any[] ) => {
        this.products = w;
        console.log(this.products)
      })
      .catch( e => console.log(e));
  }


  async onChangeStock(isPlus, id){
    let targetProduct = this.products.filter( ell =>
      ell.id == id 
    )[0]
    targetProduct.count = isPlus ? Number(targetProduct.count)+1 : Number(targetProduct.count) - 1;
    
    await this.http.putProduct( targetProduct, id )
      .then(() => this.getProducts())
      .catch( e => console.log(e) )
  }


}
