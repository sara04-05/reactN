import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Product from "../components/Product";
import products from "../data/products.json";

const ProductScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.title}>Products</Text>
            {products.map((item) => (
                <Product
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 40,
    },
});

export default ProductScreen;
