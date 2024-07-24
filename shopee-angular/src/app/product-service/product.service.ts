import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products=[
    {
      id:1,
      name: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
      subImages: [
        '../../assets/products/subImage/sub1.jpg',
        '../../assets/products/subImage/sub2.jpg',
        '../../assets/products/subImage/sub3.jpg',
        '../../assets/products/subImage/sub4.jpg',
        '../../assets/products/subImage/sub5.jpg',
        '../../assets/products/subImage/sub6.jpg',
      ],
    },
    {
      id:2,
      name: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:3,
      name: 'Nước uống colagen Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:4,
      name: 'Chuột Máy Tính Không Dây Bluetooth Ziyou X2 PRO VIP Mouse LED RGB cho Máy tính, Laptop PC',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:5,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:6,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:7,
      name: 'Chuột Máy Tính Không Dây Bluetooth Ziyou X2 PRO VIP Mouse LED RGB cho Máy tính, Laptop PC',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:8,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
      description: 'Nước Tẩy Trang La Roche Posay 400ml Da Dầu Da Và Nhạy Cảm',
    },
    {
      id:9,
      name: 'Chuột Gaming Không Dây Bluetooth Attack Shark X11 Chip PRO PAW3311 Có Dock Sạc LED, 22000 DPI',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:10,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:11,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:12,
      name: 'Chuột Gaming Không Dây Bluetooth Attack Shark X11 Chip PRO PAW3311 Có Dock Sạc LED, 22000 DPI',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:13,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:14,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:15,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:16,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:17,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:18,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:19,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:20,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:21,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:22,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:23,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:24,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:25,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:26,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:27,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:28,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:29,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:30,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:31,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:32,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:33,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:34,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
    {
      id:35,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',

    },
    {
      id:36,
      name: 'Thời trang nam',
      url: '../../assets/products/product3.jpg',
      alt: 'Thời trang nam',
      cost: 418000,
      soldOut: 'Đã bán 1000+',
    },
  ]

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
