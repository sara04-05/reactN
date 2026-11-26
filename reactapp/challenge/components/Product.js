import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Product = ({ name, description, price, image }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.img} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ddd",
        elevation: 2,
    },
    img: {
        width: "100%",
        height: 180,
    },
    info: {
        padding: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    desc: {
        color: "#555",
        marginTop: 4,
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#2e7d32",
    },
});

export default Product;
