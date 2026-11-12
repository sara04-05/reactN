import React from "react";
import {View, Image, Text, Stylesheet} from "react-native";

const Project = (props) =>{
    return(
        <View style={styles.container}>
            <Image source={props.first} style={styles.img}/>
            <Image source={props.second} style ={styles.img}/>
        </View>
    );
}

const styles = Stylesheet.create({

    container:{
        flexdirection: "row",
        justifyContent: "space-around",
        marginVertical: 20
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 10
    }
})


export default Project