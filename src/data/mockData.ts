import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'eletrônicos',
    name: 'Eletrônicos',
    description: 'Gadgets e dispositivos tecnológicos mais recentes',
    image: '/placeholder.svg'
  },
  {
    id: 'moda',
    name: 'Moda',
    description: 'Roupas e acessórios da moda',
    image: '/placeholder.svg'
  },
  {
    id: 'casa-jardim',
    name: 'Casa e Jardim',
    description: 'Itens lindos para seu espaço',
    image: '/placeholder.svg'
  }
];

export const products: Product[] = [
  // Eletrônicos
  {
    id: '1',
    name: 'Smartphone Premium',
    description: 'Smartphone flagship mais recente com câmera avançada',
    price: 2699,
    originalPrice: 2999,
    image: '/placeholder.svg',
    category: 'eletrônicos',
    stock: 15,
    featured: true,
    discounted: true
  },
  {
    id: '2',
    name: 'Fones Sem Fio',
    description: 'Fones sem fio com cancelamento de ruído',
    price: 899,
    image: '/placeholder.svg',
    category: 'eletrônicos',
    stock: 25,
    featured: true
  },
  {
    id: '3',
    name: 'Smartwatch',
    description: 'Smartwatch fitness com GPS',
    price: 1199,
    originalPrice: 1349,
    image: '/placeholder.svg',
    category: 'eletrônicos',
    stock: 8,
    discounted: true
  },
  
  // Moda
  {
    id: '4',
    name: 'Camiseta de Algodão',
    description: 'Camiseta confortável de algodão premium',
    price: 89,
    image: '/placeholder.svg',
    category: 'moda',
    stock: 50,
    featured: true
  },
  {
    id: '5',
    name: 'Jaqueta Jeans',
    description: 'Jaqueta jeans clássica para todas as ocasiões',
    price: 269,
    originalPrice: 360,
    image: '/placeholder.svg',
    category: 'moda',
    stock: 12,
    discounted: true
  },
  {
    id: '6',
    name: 'Tênis Esportivo',
    description: 'Tênis confortável para corrida',
    price: 449,
    image: '/placeholder.svg',
    category: 'moda',
    stock: 20
  },
  
  // Casa e Jardim
  {
    id: '7',
    name: 'Vaso de Cerâmica',
    description: 'Lindo vaso de cerâmica artesanal',
    price: 135,
    image: '/placeholder.svg',
    category: 'casa-jardim',
    stock: 30,
    featured: true
  },
  {
    id: '8',
    name: 'Luminária LED',
    description: 'Luminária LED ajustável com carregamento USB',
    price: 237,
    originalPrice: 297,
    image: '/placeholder.svg',
    category: 'casa-jardim',
    stock: 18,
    discounted: true
  },
  {
    id: '9',
    name: 'Almofada Decorativa',
    description: 'Almofada decorativa macia',
    price: 75,
    image: '/placeholder.svg',
    category: 'casa-jardim',
    stock: 45
  }
];