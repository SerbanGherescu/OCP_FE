import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/commons/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) { }

  /* ngOnInit - de la pornirea serverului*/ 
  ngOnInit(): void{ 
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
