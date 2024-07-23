import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnInit, OnDestroy {
  @Input() images=[
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lx0xunqnw8gr07_xxhdpi', alt: 'Image 1' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxt6yu79hjo992_xxhdpi', alt: 'Image 2' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxrxvh093kd5ca_xxhdpi', alt: 'Image 3' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxt773w1utp536_xxhdpi', alt: 'Image 4' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxrxseb13g7v94_xxhdpi', alt: 'Image 5' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxt75p4e5djv25_xxhdpi', alt: 'Image 6' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxrxzt5elom3fe_xxhdpi', alt: 'Image 7' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxry1m13nobff9_xxhdpi', alt: 'Image 8' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxry3e83pt5l45_xxhdpi', alt: 'Image 9' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxs04wxykcezcd_xxhdpi', alt: 'Image 10' },
    { url: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxs05i1dp0wr0f_xxhdpi', alt: 'Image 11' }
  ];
  indicatorsVisible: boolean = true;
  animationSpeed: number = 400;
  autoPlay: boolean = true;
  autoPlaySpeed: number = 2000;
  currentSlide = 0;
  private subscription: Subscription = new Subscription();
  hidden = false;

  next() {
    let currentSlide = (this.currentSlide + 1) % this.images.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      this.subscription = new Subscription();
      const autoPlaySubscription = interval(this.autoPlaySpeed).subscribe(() => {
        this.next();
      });
      this.subscription.add(autoPlaySubscription);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
