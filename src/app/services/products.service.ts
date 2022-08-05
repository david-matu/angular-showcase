import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

let products : Array<ProductInterface> = [];
let service = "http://127.0.0.1:12345/batigen";

export interface ProductInterface {
	productId: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
	regDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  
  get() {
	  return products.slice();
  }
  
  add(product: ProductInterface) {
	  products.push(product);
  }
  
  remove(product: ProductInterface) {
	  products.splice(products.indexOf(product), 1);
  }
  
  load() {
	  return this.http.get<Array<ProductInterface>>(service + '/product');
  }
}
