import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../shared/http/http.service';

@Component({
  selector: 'app-new-product-data',
  templateUrl: './new-product-data.component.html',
  styleUrls: ['./new-product-data.component.css']
})
export class NewProductDataComponent implements OnInit {
  id;
  product: any;

  productForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
    })
  }


  async ngOnInit() {
    if ( this.id )
      await this.getProduct();
    this.generateForm()
  }

  async getProduct(){
    await this.http.getProductById(this.id)
      .then( w => this.product = w )
      .catch( e => console.log(e) );
  }

  generateForm(){
    this.productForm = new FormGroup({
      name: new FormControl( { value: this.product ? this.product.name : '', disabled: false }, [ Validators.required, Validators.pattern('[a-zA-Z0-9]*') ] ),
      weight: new FormControl( { value: this.product ? this.product.weight : '', disabled: false }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      count: new FormControl( { value: this.product ? this.product.count : '', disabled: false }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      price: new FormControl( { value: this.product ? this.product.price : '', disabled: false }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      category: new FormControl( { value: this.product ? this.product.category : 'books', disabled: false }, [ Validators.required ] ),
      article: new FormControl( { value: this.product ? this.product.manufacturer : '', disabled: false }, [ Validators.required ] ),
      manufacturer: new FormControl( { value: this.product ? this.product.manufacturer : '', disabled: false } ),
    })
  }


  onSubmit(){
    this.id ? this.editProduct() : this.addProduct();
  }

  async editProduct(){
    await this.http.putProduct( this.productForm.value, this.id )
    .then( w => this.router.navigate( ['/catalog'] ) )
    .catch( e => console.log(e) )
  }

  async addProduct(){
    await this.http.postProduct( this.productForm.value )
      .then( () => this.router.navigate( ['/catalog'] ) )
      .catch( e => console.log(e) );
  }

  async onDeleteProduct(){
    await this.http.deleteProduct( this.id )
      .then( () => this.router.navigate( ['/catalog'] ) )
      .catch( e => console.log(e) );
  }


}
