import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './screen/ProfileScreen';
import PostScreen from './screen/PostsScreen';

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); 