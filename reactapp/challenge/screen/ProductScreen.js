import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import Product from "../components/Product";
import products from "../data/products.json"; // product data

// Screen that shows all products
const ProductScreen = () => {
    return (
        <FlatList
            style={styles.list}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={<Text style={styles.title}>Products</Text>}
            renderItem={({ item }) => (
                <Product
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        marginTop: 50,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default ProductScreen;
