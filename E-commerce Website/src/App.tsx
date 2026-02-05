import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard, Product } from './components/ProductCard';
import { Cart, CartItem } from './components/Cart';

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2MzkwNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'True Wireless Earbuds Pro',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYzOTYxNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    name: 'Smart Watch Ultra',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2MzkyNDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 4,
    name: 'Professional Laptop',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM4OTQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 5,
    name: 'DSLR Camera Kit',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjM5NDg4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 6,
    name: 'Flagship Smartphone',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1732998369893-af4c9a4695fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2Mzg2ODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Phones',
    rating: 4.8,
    reviews: 412,
  },
  {
    id: 7,
    name: 'Pro Tablet',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYzOTU0NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.5,
    reviews: 167,
  },
  {
    id: 8,
    name: 'Portable Bluetooth Speaker',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1629555258982-b920af8da52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYzOTY1MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.4,
    reviews: 234,
  },
  {
    id: 9,
    name: 'Mechanical Gaming Keyboard',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1705488387173-b3e4890259ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzYzOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.7,
    reviews: 289,
  },
  {
    id: 10,
    name: 'Wireless Gaming Mouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdXNlfGVufDF8fHx8MTc2Mzg2NjQ0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.6,
    reviews: 203,
  },
  {
    id: 11,
    name: 'RGB Gaming Headset',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1677086813101-496781a0f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc2MzkxNzU0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    rating: 4.5,
    reviews: 178,
  },
  {
    id: 12,
    name: '4K Ultra HD Monitor 27"',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1761954090578-f440c37ac4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NjM5NjUzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 13,
    name: 'HD Webcam 1080p',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJjYW18ZW58MXx8fHwxNzYzOTcwNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.3,
    reviews: 421,
  },
  {
    id: 14,
    name: 'USB Podcast Microphone',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1657121576152-d492866543a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwcG9kY2FzdHxlbnwxfHx8fDE3NjM4NzA5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 15,
    name: 'Portable Power Bank 20000mAh',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmt8ZW58MXx8fHwxNzYzODQ5OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.4,
    reviews: 892,
  },
  {
    id: 16,
    name: 'Premium Phone Case',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYzODg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.2,
    reviews: 567,
  },
  {
    id: 17,
    name: 'Fitness Tracker Band',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwxfHx8fDE3NjM4ODkzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    rating: 4.3,
    reviews: 445,
  },
  {
    id: 18,
    name: '4K Drone with Camera',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNhbWVyYXxlbnwxfHx8fDE3NjM5MTc3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.6,
    reviews: 134,
  },
  {
    id: 19,
    name: 'Gaming Console Pro',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2MzkzMzY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    rating: 4.9,
    reviews: 678,
  },
  {
    id: 20,
    name: 'VR Headset Pro',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXR8ZW58MXx8fHwxNzYzOTcwNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    rating: 4.7,
    reviews: 223,
  },
  {
    id: 21,
    name: 'USB-C Cable 3-Pack',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1572721546624-05bf65ad7679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZXxlbnwxfHx8fDE3NjM5NjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: 22,
    name: 'External SSD 1TB',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1613070541337-b40942ee6527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcm5hbCUyMGhhcmQlMjBkcml2ZXxlbnwxfHx8fDE3NjM5NzA0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Storage',
    rating: 4.8,
    reviews: 456,
  },
  {
    id: 23,
    name: 'SD Memory Card 128GB',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602525968752-43f2d69250b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZCUyMG1lbW9yeSUyMGNhcmR8ZW58MXx8fHwxNzYzOTcwNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Storage',
    rating: 4.6,
    reviews: 789,
  },
  {
    id: 24,
    name: 'Camera Tripod Pro',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1694660857079-4f78ab126a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlwb2QlMjBjYW1lcmF8ZW58MXx8fHwxNzYzOTcwNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.4,
    reviews: 234,
  },
  {
    id: 25,
    name: 'Laptop Backpack',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1554412664-6e7b242f969d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBiYWd8ZW58MXx8fHwxNzYzOTcwNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviews: 678,
  },
  {
    id: 26,
    name: 'Wireless Charging Pad',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGNoYXJnZXJ8ZW58MXx8fHwxNzYzOTQyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.3,
    reviews: 543,
  },
  {
    id: 27,
    name: 'Action Camera 4K',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1677172954692-90cf8bdc91e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzYzOTYyNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.6,
    reviews: 321,
  },
  {
    id: 28,
    name: 'All-in-One Printer',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyfGVufDF8fHx8MTc2Mzk3MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.2,
    reviews: 267,
  },
  {
    id: 29,
    name: 'WiFi 6 Router',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3V0ZXIlMjB3aWZpfGVufDF8fHx8MTc2Mzk3MDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Networking',
    rating: 4.7,
    reviews: 389,
  },
  {
    id: 30,
    name: 'Drawing Tablet',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1572532350840-f682a3cf9dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMHRhYmxldHxlbnwxfHx8fDE3NjM5NzA0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.8,
    reviews: 198,
  },
  {
    id: 31,
    name: 'Mini Projector 1080p',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0b3J8ZW58MXx8fHwxNzYzOTcwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.3,
    reviews: 276,
  },
  {
    id: 32,
    name: 'LED Ring Light',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzYzOTcwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviews: 412,
  },
  {
    id: 33,
    name: 'Noise Cancelling Earbuds',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYzOTYxNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.7,
    reviews: 345,
  },
  {
    id: 34,
    name: 'Studio Headphones',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2MzkwNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 35,
    name: 'Portable SSD 2TB',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1613070541337-b40942ee6527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcm5hbCUyMGhhcmQlMjBkcml2ZXxlbnwxfHx8fDE3NjM5NzA0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Storage',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 36,
    name: 'Ultrawide Monitor 34"',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1761954090578-f440c37ac4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NjM5NjUzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 37,
    name: 'Ergonomic Mouse',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdXNlfGVufDF8fHx8MTc2Mzg2NjQ0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.4,
    reviews: 423,
  },
  {
    id: 38,
    name: 'Compact Keyboard',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1705488387173-b3e4890259ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzYzOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.6,
    reviews: 312,
  },
  {
    id: 39,
    name: 'Smart Home Speaker',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1629555258982-b920af8da52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYzOTY1MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.5,
    reviews: 567,
  },
  {
    id: 40,
    name: 'Budget Smartphone',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1732998369893-af4c9a4695fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2Mzg2ODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Phones',
    rating: 4.2,
    reviews: 789,
  },
  {
    id: 41,
    name: 'Premium Smartphone',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1732998369893-af4c9a4695fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2Mzg2ODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Phones',
    rating: 4.9,
    reviews: 523,
  },
  {
    id: 42,
    name: 'Mirrorless Camera',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjM5NDg4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 43,
    name: 'Smart Watch Sport',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2MzkyNDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    rating: 4.4,
    reviews: 678,
  },
  {
    id: 44,
    name: 'Gaming Laptop',
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM4OTQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 45,
    name: 'Business Laptop',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM4OTQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.6,
    reviews: 456,
  },
  {
    id: 46,
    name: 'Tablet 10.5"',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYzOTU0NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.5,
    reviews: 321,
  },
  {
    id: 47,
    name: 'HD Camcorder',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjM5NDg4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.3,
    reviews: 187,
  },
  {
    id: 48,
    name: 'Soundbar with Subwoofer',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1629555258982-b920af8da52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYzOTY1MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.6,
    reviews: 298,
  },
  {
    id: 49,
    name: 'USB Hub 7-Port',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1572721546624-05bf65ad7679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZXxlbnwxfHx8fDE3NjM5NjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.4,
    reviews: 876,
  },
  {
    id: 50,
    name: 'Desk Lamp LED',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzYzOTcwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.3,
    reviews: 567,
  },
  {
    id: 51,
    name: 'Gaming Chair',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1705488387173-b3e4890259ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzYzOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    rating: 4.7,
    reviews: 432,
  },
  {
    id: 52,
    name: 'Streaming Microphone',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1657121576152-d492866543a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwcG9kY2FzdHxlbnwxfHx8fDE3NjM4NzA5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.8,
    reviews: 321,
  },
  {
    id: 53,
    name: 'Screen Protector 2-Pack',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYzODg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.2,
    reviews: 1456,
  },
  {
    id: 54,
    name: 'Car Phone Mount',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYzODg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviews: 934,
  },
  {
    id: 55,
    name: 'Fast Charger 65W',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGNoYXJnZXJ8ZW58MXx8fHwxNzYzOTQyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.6,
    reviews: 723,
  },
  {
    id: 56,
    name: 'Mesh WiFi System',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3V0ZXIlMjB3aWZpfGVufDF8fHx8MTc2Mzk3MDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Networking',
    rating: 4.7,
    reviews: 267,
  },
  {
    id: 57,
    name: 'Camera Lens Kit',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjM5NDg4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 58,
    name: 'Monitor Arm Mount',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1761954090578-f440c37ac4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NjM5NjUzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviews: 534,
  },
  {
    id: 59,
    name: 'Bluetooth Adapter',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1572721546624-05bf65ad7679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZXxlbnwxfHx8fDE3NjM5NjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.3,
    reviews: 1289,
  },
  {
    id: 60,
    name: 'Webcam Cover 6-Pack',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJjYW18ZW58MXx8fHwxNzYzOTcwNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.1,
    reviews: 2345,
  },
  {
    id: 61,
    name: 'Cable Management Kit',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1572721546624-05bf65ad7679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZXxlbnwxfHx8fDE3NjM5NjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.4,
    reviews: 1876,
  },
  {
    id: 62,
    name: 'Mini Drone',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNhbWVyYXxlbnwxfHx8fDE3NjM5MTc3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    rating: 4.2,
    reviews: 456,
  },
  {
    id: 63,
    name: 'Smart Display 8"',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYzOTU0NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    rating: 4.4,
    reviews: 678,
  },
  {
    id: 64,
    name: 'Studio Monitor Speakers',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1629555258982-b920af8da52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYzOTY1MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 65,
    name: 'Cooling Pad for Laptop',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM4OTQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.3,
    reviews: 789,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl">No products found</p>
            <p className="mt-2">Try adjusting your filters or search query</p>
          </div>
        )}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}