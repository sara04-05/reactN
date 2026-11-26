import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Design of ONE product card
const Product = (props) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.img} />
            <Text style={styles.name}>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text style={styles.price}>${props.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        margin: 16,
        padding: 16,
        elevation: 2,
    },
    img: {
        width: "100%",
        height: 180,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        marginTop: 10,
    },
});

export default Product;
