import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

const students = [
  {
    id: '1',
    firstName: 'Melina',
    surname: 'Salihu',
    birthdayDate: '15/04/2008',
    hobbies: ['Reading', 'Listening to music', 'Travelling', 'Drawing'],
  },
  {
    id: '2',
    firstName: 'Arta',
    surname: 'Hoxha',
    birthdayDate: '20/09/2007',
    hobbies: ['Painting', 'Dancing', 'Swimming'],
  },
  {
    id: '3',
    firstName: 'Ela',
    surname: 'Sadiku',
    birthdayDate: '11/02/2008',
    hobbies: ['Cooking', 'Shopping', 'Watching series'],
  },
];

const StudentInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Personal Information</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.text}>First Name: {item.firstName}</Text>
            <Text style={styles.text}>Surname: {item.surname}</Text>
            <Text style={styles.text}>Birthday Date: {item.birthdayDate}</Text>

            <Text style={styles.subtitle}>Hobbies:</Text>
            {item.hobbies.map((hobby, index) => (
              <Text key={`${item.id}-${index}`} style={styles.hobby}>
                • {hobby}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#30475E',
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#222831',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#30475E',
    marginTop: 10,
    marginBottom: 5,
  },
  hobby: {
    fontSize: 17,
    color: '#222831',
    backgroundColor: '#DDEBF7',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
});

export default StudentInfoScreen;
