import React from "react";  
import { View, Text, StyleSheet,Button,TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter , counterT = 0;
    return (
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button
                title="Click Me"
                color="pink"
                onPress={()=>console.log("Button Clicked", counter++)}
            />
            <TouchableOpacity
                style={styles.TouchableBtn}
                onPress={() => console.log("Touchable Button Clicked", counterT++)}
            >
                <Text style={styles.btnText}>Click this button</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
  textStyle: {
    textStyle: "center",
    marginTop: 10,
    fontSize: 15,
    marginBottom: 10
  },
  TouchableBtn: {
    backgroundColor: "pink",
    marginVertical: 15,
    paddingVertical: 20,
    borderRadius: 6,
    marginHorizontal: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ButtonScreen;