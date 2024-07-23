import { NavbarWrapperComponent } from './../navbar-wrapper/navbar-wrapper.component';
import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FlashSaleComponent } from "../flash-sale/flash-sale.component";
import { BannerComponent } from "../banner/banner.component";
import { ProductComponent } from "../product/product.component";
@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [CategoryComponent, FlashSaleComponent, BannerComponent, ProductComponent],
})
export class HomepageComponent {
 imageUrl: string ="https://cf.shopee.vn/file/vn-11134258-7r98o-lxpmj9kmwdej32"
 buttonclick() {
  console.log('Button clicked');
 }
}
