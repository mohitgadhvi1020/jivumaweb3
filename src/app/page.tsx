import React from 'react';
import fs from 'fs';
import path from 'path';
import ProductCard from './components/ProductCard';
import HeroSection from './components/HeroSection';

import { Product } from './types';

// Helper function to get products
async function getProductsData(): Promise<Product[]> {
  try {
    // Read the products from the JSON file
    const filePath = path.join(process.cwd(), 'src/app/data/products.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products: Product[] = JSON.parse(fileContents);
    return products;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProductsData();

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <HeroSection />
      
      {/* Premium Products Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-jivuma-warm-white to-jivuma-cream">
        <div className="container-premium">
          {/* Premium Section Header */}
          <div className="text-center mb-16">
            <span className="text-jivuma-primary font-body font-medium text-lg tracking-wide uppercase">
              Our Collection
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-semibold text-jivuma-brown mt-4 mb-6">
              Premium Spice Mixes
            </h2>
            <div className="w-24 h-1 bg-gradient-premium mx-auto mb-6"></div>
            <p className="text-jivuma-brown/80 text-xl max-w-3xl mx-auto font-body leading-relaxed">
              Discover our handcrafted collection of authentic Indian spice blends, each recipe perfected over generations to deliver restaurant-quality flavors in your home kitchen.
            </p>
          </div>
          
          {/* Premium Products Grid - 3 Products Per Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          

          {/* Premium Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 shadow-premium">
              <span className="text-jivuma-brown font-body">
                Can't find what you're looking for?
              </span>
              <a
                href="/contact"
                className="text-jivuma-primary font-body font-semibold hover:text-jivuma-gold transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
