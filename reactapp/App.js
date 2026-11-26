<<<<<<< HEAD
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './screen/ProfileScreen';
import PostScreen from './screen/PostsScreen';

>>>>>>> 6ba90b01095df39a4e83659a196213eb0699b141
import { useState } from 'react';
import ProductScreen from './challenge/screen/ProductScreen';
import DetailsScreen from './challenge/screen/DetailsScreen';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
<<<<<<< HEAD
=======

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
>>>>>>> 6ba90b01095df39a4e83659a196213eb0699b141

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