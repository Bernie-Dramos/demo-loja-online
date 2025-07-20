import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest tech gadgets and devices',
    image: '/placeholder.svg'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: '/placeholder.svg'
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Beautiful items for your living space',
    image: '/placeholder.svg'
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Premium Smartphone',
    description: 'Latest flagship smartphone with advanced camera',
    price: 899,
    originalPrice: 999,
    image: '/placeholder.svg',
    category: 'electronics',
    stock: 15,
    featured: true,
    discounted: true
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Noise-canceling wireless headphones',
    price: 299,
    image: '/placeholder.svg',
    category: 'electronics',
    stock: 25,
    featured: true
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with GPS',
    price: 399,
    originalPrice: 449,
    image: '/placeholder.svg',
    category: 'electronics',
    stock: 8,
    discounted: true
  },
  
  // Fashion
  {
    id: '4',
    name: 'Cotton T-Shirt',
    description: 'Comfortable premium cotton t-shirt',
    price: 29,
    image: '/placeholder.svg',
    category: 'fashion',
    stock: 50,
    featured: true
  },
  {
    id: '5',
    name: 'Denim Jacket',
    description: 'Classic denim jacket for all occasions',
    price: 89,
    originalPrice: 120,
    image: '/placeholder.svg',
    category: 'fashion',
    stock: 12,
    discounted: true
  },
  {
    id: '6',
    name: 'Sneakers',
    description: 'Comfortable running sneakers',
    price: 149,
    image: '/placeholder.svg',
    category: 'fashion',
    stock: 20
  },
  
  // Home & Garden
  {
    id: '7',
    name: 'Ceramic Plant Pot',
    description: 'Beautiful handcrafted ceramic pot',
    price: 45,
    image: '/placeholder.svg',
    category: 'home-garden',
    stock: 30,
    featured: true
  },
  {
    id: '8',
    name: 'LED Desk Lamp',
    description: 'Adjustable LED desk lamp with USB charging',
    price: 79,
    originalPrice: 99,
    image: '/placeholder.svg',
    category: 'home-garden',
    stock: 18,
    discounted: true
  },
  {
    id: '9',
    name: 'Throw Pillow',
    description: 'Soft decorative throw pillow',
    price: 25,
    image: '/placeholder.svg',
    category: 'home-garden',
    stock: 45
  }
];