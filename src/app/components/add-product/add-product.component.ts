import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { EnviarProducto, Product } from '../../interface/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDividerModule, MatIconModule, ReactiveFormsModule
    
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {

  form: FormGroup
  producto: Product = { name: "", description:"",price:0, stock:0 };
  title: string = "Agregar"
  id: number;

  constructor( private productService: ProductService, 
    private fb:FormBuilder,
    private aRoute: ActivatedRoute,
    private router: Router
  ){
    this.form = this.fb.group({
      name: [ "", [Validators.required, Validators.minLength(3)] ],
      description:[  "", [Validators.required, Validators.minLength(3) ] ],
      price:[  "", [Validators.required, Validators.min(1)] ],
      stock:[  "", [Validators.required, Validators.min(1)] ],
    })
    
    this.id =  Number(aRoute.snapshot.paramMap.get('id'))
    if (this.id === 0) {
      console.log(this.id)

    } else {
      this.title = "Editar"
      this.productService.getProduct(this.id).subscribe((data)=>{


        this.form.setValue({
          name: data.msg.name,
          description: data.msg.description,
          price: data.msg.price,                                               
          stock: data.msg.stock
        }) 
      })    
    }

  }
  
  enviar(){
    
    this.producto.name = this.form.value.name
    this.producto.description = this.form.value.description
    this.producto.price = this.form.value.price
    this.producto.stock = this.form.value.stock


    if (this.id === 0) {
      this.productService.addProduct( this.producto ).subscribe(()=>{
        console.log("producto agregado")
        this.router.navigate([''])
      })  
      
    } else {
      console.log(this.producto)
      console.log(this.id)
      this.productService.updateProduct( this.id, this.producto ).subscribe(()=>{
        console.log("producto updateado")
        this.router.navigate([''])
      }) 
    }


}


}
