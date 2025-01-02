import {Component,AfterViewInit,ViewChild, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-product-list',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTableModule, MatPaginatorModule,
    RouterLink, MatProgressSpinnerModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit,AfterViewInit  {


  dataTable: Product[] = []

  constructor( private producService: ProductService ){}

  displayedColumns: string[] = ['name', 'description', 'price', 'stock', 'delete', 'edit'];
  dataSource = new MatTableDataSource<Product>([]);
  loader: boolean = true

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource<Product>(this.dataTable);
    this.dataSource.paginator = this.paginator;
    this.getProducts()
  }

  ngOnInit(): void {
    this.getProducts()
    this.loader = true;

    this.producService.getProducts().subscribe((data)=>{
      this.dataTable = data
      this.loader= false

    })
    console.log(this.dataTable)
  }

  getProducts() {

    this.loader = true;

    this.producService.getProducts().subscribe((data) => {
      this.dataSource.data = data; 
      this.loader= false
    });
  }

  delete( id:number ){

    this.loader = true;

    this.producService.deleteProduct(id).subscribe(()=>{
      this.getProducts()
      this.loader= false
    })
  }
  


}

