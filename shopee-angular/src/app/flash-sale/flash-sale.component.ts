import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-flash-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.css']
})
export class FlashSaleComponent implements OnInit, OnDestroy {
  products = [
    {
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/products/product4.jpg',
      alt: 'Thời trang nam',
      cost: 518000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/products/product5.jpg',
      alt: 'Thời trang nam',
      cost: 430000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Máy ảnh &  Máy quay phim',
      url: '../../assets/products/product6.jpg',
      alt: 'Thời trang nam',
      cost: 350000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/products/product7.jpg',
      alt: 'Thời trang nam',
      cost: 430000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Máy ảnh &  Máy quay phim',
      url: '../../assets/products/product5.jpg',
      alt: 'Thời trang nam',
      cost: 290000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/products/product1.png',
      alt: 'Thời trang nam',
      cost: 230000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/products/product4.jpg',
      alt: 'Thời trang nam',
      cost: 518000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/products/product5.jpg',
      alt: 'Thời trang nam',
      cost: 430000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/products/product4.jpg',
      alt: 'Thời trang nam',
      cost: 518000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/products/product5.jpg',
      alt: 'Thời trang nam',
      cost: 430000,
      soldOut: 'Đang bán chạy',
    },
    {
      name: 'Máy ảnh &  Máy quay phim',
      url: '../../assets/products/product2.png',
      alt: 'Thời trang nam',
      cost: 355000,
      soldOut: 'Đang bán chạy',
    },
  ];

  currentPosition: number = 0;
  slideWidth: number = 800;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  slideLeft() {
    if (this.currentPosition < 0) {
      this.currentPosition += this.slideWidth;
    }
    console.log(this.currentPosition);
  }

  slideRight() {
    const maxSlide = (this.products.length - 1) * this.slideWidth * -1;
    if (this.currentPosition > maxSlide) {
      this.currentPosition -= this.slideWidth;
    }
    if (this.currentPosition < maxSlide) {
      this.currentPosition = maxSlide;
    }
    console.log(this.currentPosition);
  }

  startTimer() {
    const targetTime = new Date().getTime() + 2 * 60 * 60 * 1000;

    this.subscription = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.subscription.unsubscribe();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    });
  }
}
