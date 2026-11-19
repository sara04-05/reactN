import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

class PostsScreen extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const jsonData = await data.json();
    this.setState({ posts: jsonData });
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Photos</Text>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={posts}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Image
                source={{ uri: `https://picsum.photos/seed/${item.id}/100` }}
                style={styles.image}
              />
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  row: { marginBottom: 12 },
  image: { width: 100, height: 100 },
});

export default PostsScreen;