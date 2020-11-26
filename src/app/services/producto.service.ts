import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Models/producto';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json',
                                               'Access-Control-Allow-Origin':'*',
                                               'Access-Control-Allow-Methods': 'POST'})};
const root_url = "https://search-it-api.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  // getProducts(){
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=6');
  // }

  getProductsByComputacion(){
    return this.http.get<any[]>(root_url + '/products/computacion')
  }

  getProductsByElectrodomestico(){
    return this.http.get<any[]>(root_url + '/products/electrodomestico')
  }

  getProductsByElectronico(){
    return this.http.get<any[]>(root_url + '/products/electronicos')
  }

  addProduct(product: Producto){
    let postProduct = root_url + '/products/'
    return this.http.post<Producto>(postProduct, product, httpOptions)
  }

  getProductsAll(){
    return this.http.get<any[]>(root_url + "/products/")
  }

  getProductSearched(buscado:string){
    console.log(buscado)
    return this.http.get<any[]>(root_url + '/productsOrdered/'.concat(buscado)) 
  }

  // http://127.0.0.1:5000/products

}
