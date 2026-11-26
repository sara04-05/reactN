import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const sizes = ["S", "M", "L", "XL"];

// Screen that shows ONE product in detail
const DetailsScreen = (props) => {
    const product = props.product;
    const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);

    const total = (product.price * quantity).toFixed(2);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Top bar */}
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.roundBtn} onPress={props.onBack}>
                            <Text style={styles.icon}>←</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Details</Text>
                        <TouchableOpacity style={styles.roundBtn}>
                            <Text style={styles.icon}>👜</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Product picture */}
                    <View style={[styles.imageBox, { backgroundColor: product.color }]}>
                        <TouchableOpacity style={styles.heartBtn} onPress={() => setLiked(!liked)}>
                            <Text style={styles.heart}>{liked ? "♥" : "♡"}</Text>
                        </TouchableOpacity>
                        <Text style={styles.emoji}>{product.emoji}</Text>
                    </View>

                    {/* Name, stock and rating */}
                    <View style={styles.row}>
                        <Text style={styles.name}>{product.name}</Text>
                        <View style={styles.stockBadge}>
                            <Text style={styles.stockText}>● In stock</Text>
                        </View>
                    </View>
                    <Text style={styles.rating}>★ 4.8  (120 reviews)</Text>

                    {/* Size */}
                    <Text style={styles.label}>Size</Text>
                    <View style={styles.sizes}>
                        {sizes.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.size, size === item && styles.sizeSelected]}
                                onPress={() => setSize(item)}
                            >
                                <Text style={[styles.sizeText, size === item && styles.sizeSelectedText]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Description */}
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.desc}>{product.description}</Text>
                </ScrollView>

                {/* Bottom bar: quantity, total and Add to cart */}
                <View style={styles.bottomBar}>
                    <View style={styles.row}>
                        <View style={styles.quantity}>
                            <TouchableOpacity
                                style={styles.qtyBtn}
                                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Text style={styles.qtyBtnText}>−</Text>
                            </TouchableOpacity>
                            <Text style={styles.qtyNumber}>{quantity}</Text>
                            <TouchableOpacity
                                style={styles.qtyBtn}
                                onPress={() => setQuantity(quantity + 1)}
                            >
                                <Text style={styles.qtyBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.price}>${total}</Text>
                    </View>
                    <TouchableOpacity style={styles.cartBtn}>
                        <Text style={styles.cartBtnText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
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
        paddingHorizontal: 20,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    roundBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        fontSize: 18,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    imageBox: {
        borderRadius: 28,
        marginVertical: 20,
        paddingVertical: 30,
    },
    heartBtn: {
        position: "absolute",
        top: 14,
        right: 14,
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    heart: {
        fontSize: 20,
        color: "#e53935",
    },
    emoji: {
        fontSize: 150,
        textAlign: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    stockBadge: {
        backgroundColor: "#e6f4ea",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    stockText: {
        color: "#2e7d32",
        fontSize: 12,
        fontWeight: "bold",
    },
    rating: {
        color: "#f59e0b",
        marginTop: 6,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 8,
    },
    sizes: {
        flexDirection: "row",
    },
    size: {
        width: 48,
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    sizeSelected: {
        backgroundColor: "#e53935",
        borderColor: "#e53935",
    },
    sizeText: {
        fontWeight: "bold",
    },
    sizeSelectedText: {
        color: "white",
    },
    desc: {
        color: "#666",
        lineHeight: 22,
        marginBottom: 20,
    },
    bottomBar: {
        paddingTop: 12,
        paddingBottom: 24,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    quantity: {
        flexDirection: "row",
        alignItems: "center",
    },
    qtyBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
    },
    qtyBtnText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    qtyNumber: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
    },
    price: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#f59e0b",
    },
    cartBtn: {
        backgroundColor: "#e53935",
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 14,
    },
    cartBtnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default DetailsScreen;
