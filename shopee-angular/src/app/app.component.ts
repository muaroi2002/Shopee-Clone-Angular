import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarWrapperComponent } from "./navbar-wrapper/navbar-wrapper.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from "./banner/banner.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomepageComponent, NavbarWrapperComponent, BannerComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shopee-angular';
  constructor(private router:Router, private viewportScroller: ViewportScroller) { }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
