import { Component } from '@angular/core';
import { NavbarWrapperComponent } from './../navbar-wrapper/navbar-wrapper.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarWrapperComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
