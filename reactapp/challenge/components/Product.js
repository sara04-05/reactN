import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Design of ONE product card
const Product = (props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <View style={[styles.imageBox, { backgroundColor: props.color }]}>
                <Text style={styles.heart}>♡</Text>
                <Text style={styles.emoji}>{props.emoji}</Text>
            </View>
            <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Buy</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "50%",
        padding: 8,
    },
    imageBox: {
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 14,
        paddingBottom: 18,
    },
    heart: {
        textAlign: "right",
        fontSize: 18,
        color: "#e53935",
    },
    emoji: {
        fontSize: 64,
        textAlign: "center",
        marginTop: 4,
    },
    name: {
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 4,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
        marginLeft: 4,
    },
    price: {
        color: "#f59e0b",
        fontWeight: "bold",
        fontSize: 16,
    },
    btn: {
        backgroundColor: "black",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 5,
    },
    btnText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
});

export default Product;
