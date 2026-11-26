import { useState } from 'react';
import ProductScreen from './challenge/screen/ProductScreen';
import DetailsScreen from './challenge/screen/DetailsScreen';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <DetailsScreen
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return <ProductScreen onSelect={setSelectedProduct} />;
}