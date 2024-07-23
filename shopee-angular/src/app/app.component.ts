import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarWrapperComponent } from "./navbar-wrapper/navbar-wrapper.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomepageComponent, NavbarWrapperComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopee-angular';
}
