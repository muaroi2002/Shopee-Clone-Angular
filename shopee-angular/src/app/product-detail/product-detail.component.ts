import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;
  product: any = null;
  mainImageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
      if(this.product){
        this.mainImageUrl = this.product.url;
      }
    }
  }
  updateMainImageUrl(url: string):void {
    this.mainImageUrl = url;
  }
}
