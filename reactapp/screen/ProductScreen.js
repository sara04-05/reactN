import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Product from "../components/Product";
import products from "../data/products.json";

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 50,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default ProductScreen;
