import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Product from "../components/Product";
import products from "../data/products.json";

const ProductScreen = (props) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Online Shop</Text>
                <Text style={styles.subtitle}>Recommendation</Text>
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Product
                            name={item.name}
                            price={item.price}
                            emoji={item.emoji}
                            color={item.color}
                            onPress={() => props.onSelect(item)}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // page centers the phone-sized container on wide screens
    page: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
    },
    container: {
        flex: 1,
        width: "100%",
        maxWidth: 480,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 8,
    },
    subtitle: {
        fontWeight: "bold",
        color: "gray",
        marginLeft: 8,
        marginTop: 4,
        marginBottom: 12,
    },
});

export default ProductScreen;
