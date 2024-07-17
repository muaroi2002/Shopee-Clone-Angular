import { NavbarWrapperComponent } from './../navbar-wrapper/navbar-wrapper.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
 imageUrl: string ="https://cf.shopee.vn/file/vn-11134258-7r98o-lxpmj9kmwdej32"
 buttonclick() {
  console.log('Button clicked');
 }
}
