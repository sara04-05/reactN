import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Design of ONE product card
const Product = (props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <View style={[styles.imageBox, { backgroundColor: props.color }]}>
                <Text style={styles.heart}>♡</Text>
                <Image source={{ uri: props.image }} style={styles.img} />
            </View>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>${props.price}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
    },
    imageBox: {
        borderRadius: 16,
        padding: 10,
    },
    heart: {
        textAlign: "right",
        fontSize: 18,
        color: "red",
    },
    img: {
        width: "100%",
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontWeight: "bold",
        marginTop: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 4,
    },
    price: {
        color: "orange",
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    btnText: {
        color: "white",
        fontSize: 12,
    },
});

export default Product;
