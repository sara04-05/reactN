import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Product from "../components/Product";
import products from "../data/products.json";

const ProductScreen = (props) => {
    return (
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
                        image={item.image}
                        color={item.color}
                        onPress={() => props.onSelect(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 8,
    },
    subtitle: {
        fontWeight: "bold",
        marginLeft: 8,
        marginVertical: 12,
    },
});

export default ProductScreen;
