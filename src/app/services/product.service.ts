import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviarProducto, Product, RespProducto } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private url:string =  'https://backend-crud-users-2.onrender.com/api/productos/'

  constructor( private http: HttpClient ) { }

  getProducts(  ):Observable<Product[]>{
    return this.http.get<Product[]>( this.url )
  }

  addProduct(form: Product):Observable<void>{
    return this.http.post<void>( (this.url ), form   )
  }

  deleteProduct( id:number ):Observable<void>{
    return this.http.delete<void>( (this.url + "/"+ id) )
  }

  getProduct( id:number ):Observable<RespProducto>{
    return this.http.get<RespProducto>(  this.url + "/" + id )
  }

  updateProduct( id:number,form:Product ):Observable<void>{
    return this.http.put<void>(  (this.url + "/"+ id), form )
  }

}
