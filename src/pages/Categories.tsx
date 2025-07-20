import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/mockData';
import { useNavigate, useParams } from 'react-router-dom';

export const Categories: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getCategoryName = (id: string) => {
    if (id === 'all') return 'All Products';
    return categories.find(c => c.id === id)?.name || 'Unknown Category';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{getCategoryName(selectedCategory)}</h1>
          <p className="text-xl text-white/90">
            Discover amazing products in {getCategoryName(selectedCategory).toLowerCase()}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Products
                  <Badge className="ml-auto">{products.length}</Badge>
                </Button>
                {categories.map((category) => {
                  const count = products.filter(p => p.category === category.id).length;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                      <Badge className="ml-auto">{count}</Badge>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Under $50
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      $50 - $100
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      $100 - $500
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      $500+
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Special Offers</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      On Sale
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Featured
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard 
                    product={product} 
                    onProductClick={() => navigate(`/product/${product.id}`)}
                  />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl font-semibold mb-4">No products found</p>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or browse all categories
                </p>
                <Button onClick={() => setSelectedCategory('all')}>
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};