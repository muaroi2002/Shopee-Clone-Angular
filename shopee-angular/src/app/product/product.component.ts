import { ProductService } from './../product-service/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: any[] = [];

  constructor(private router: Router,
    private productService : ProductService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  viewProductDetail(id: number): void {
    this.router.navigate(['/product-detail', id]);
  }
}
