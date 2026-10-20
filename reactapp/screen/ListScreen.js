import React from "react";
import {Text, View, StyleSheet,FlatList} from "react-native";

const students = [
    {name:"Dion", surname: "Konjuhi", age:"32"},
    {name:"Liron", surname: "Aliu", age:"32"},
    {name:"Reina", surname: "Beadini", age:"20"},
]

const ListScreen = (props) =>{
    return(
        <View>
            <Text style = {styles.Text}>List of Students</Text>
            <FlatList   
            horizontal = {true}
            showsVerticalScrollIndicator = {false}
            keyExtractor={student => student.name}
            data = {students}
            renderItem={({item}) => {
                return <Text>{item.name} {item.surname} - {item.age}</Text>
            }}
            />          
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

export default ListScreen;