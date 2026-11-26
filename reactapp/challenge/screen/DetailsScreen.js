import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const sizes = ["S", "M", "L", "XL"];

// Screen that shows ONE product in detail
const DetailsScreen = (props) => {
    const product = props.product;
    const [size, setSize] = useState("M");

    return (
        <View style={styles.page}>
        <View style={styles.container}>
            {/* Top bar */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={props.onBack}>
                    <Text style={styles.icon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Details</Text>
                <Text style={styles.icon}>👜</Text>
            </View>

            {/* Product image */}
            <View style={[styles.imageBox, { backgroundColor: product.color }]}>
                <Text style={styles.emoji}>{product.emoji}</Text>
            </View>

            {/* Name and price */}
            <View style={styles.row}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.stock}>Available in stock</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <View style={styles.sizes}>
                    {sizes.map((item) => (
                        <TouchableOpacity
                            key={item}
                            style={[styles.size, size === item && styles.sizeSelected]}
                            onPress={() => setSize(item)}
                        >
                            <Text style={size === item && styles.sizeSelectedText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Text style={styles.desc}>{product.description}</Text>

            {/* Add to cart */}
            <TouchableOpacity style={styles.cartBtn}>
                <Text style={styles.cartBtnText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        paddingHorizontal: 20,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        fontSize: 22,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    imageBox: {
        borderRadius: 24,
        padding: 20,
        marginVertical: 20,
    },
    emoji: {
        fontSize: 140,
        textAlign: "center",
        paddingVertical: 30,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    stock: {
        color: "gray",
        fontSize: 12,
    },
    price: {
        fontSize: 28,
        fontWeight: "bold",
        color: "orange",
    },
    sizes: {
        flexDirection: "row",
    },
    size: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 6,
    },
    sizeSelected: {
        backgroundColor: "red",
        borderColor: "red",
    },
    sizeSelectedText: {
        color: "white",
    },
    desc: {
        color: "gray",
        marginTop: 8,
    },
    cartBtn: {
        backgroundColor: "red",
        borderRadius: 14,
        padding: 16,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 30,
    },
    cartBtnText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default DetailsScreen;
