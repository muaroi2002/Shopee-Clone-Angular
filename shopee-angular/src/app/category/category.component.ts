import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories = [
    {
      name: 'Thời trang nam',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/category/phone.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Máy ảnh &  Máy quay phim',
      url: '../../assets/category/photogra.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép nam',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép Nữ',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thời trang nam',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/category/phone.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Máy ảnh & Máy quay phim',
      url: '../../assets/category/photogra.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép nam',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép Nữ',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thời trang nam',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/category/phone.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Máy ảnh & Máy quay phim',
      url: '../../assets/category/photogra.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thời trang nữ',
      url: '../../assets/category/fashion.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/category/phone.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Máy ảnh & Máy quay phim',
      url: '../../assets/category/photogra.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Điện thoại và phụ kiện',
      url: '../../assets/category/phone.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Máy ảnh & Máy quay phim',
      url: '../../assets/category/photogra.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép nam',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép Nữ',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Thiết bị điện tử',
      url: '../../assets/category/tv.png',
      alt: 'Thời trang nam',
    },
    {
      name: 'Giày dép nam',
      url: '../../assets/category/shoes.png',
      alt: 'Thời trang nam',
    },
  ];

  currentPosition: number = 0;
  slideWidth: number = 800;

  slideLeft() {
    if (this.currentPosition < 0) {
      this.currentPosition += this.slideWidth;
    }
    console.log(this.currentPosition);
  }

  slideRight() {
    const maxSlide = (this.categories.length - 1) * this.slideWidth * -1;
    if (this.currentPosition > maxSlide) {
      this.currentPosition -= this.slideWidth;
    }
    if (this.currentPosition < maxSlide) {
      this.currentPosition = maxSlide;
    }
    console.log(this.currentPosition);
  }

}
