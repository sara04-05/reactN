import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const RemoteList = ({ title, endpoint, fields, getImageUri }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }
        const data = await response.json();
        if (!cancelled) setItems(data);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loading && <ActivityIndicator size="large" color="#2563eb" />}
      {error && <Text style={styles.error}>Could not load data: {error}</Text>}
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        initialNumToRender={10}
        windowSize={5}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.id}>#{item.id}</Text>
            {getImageUri ? (
              <Image source={{ uri: getImageUri(item) }} style={styles.image} />
            ) : null}
            {fields.map((field) => (
              <Text key={field} style={styles.text}>
                {item[field]}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f3f4f6" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  row: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },
  id: { fontWeight: "700", color: "#2563eb", marginBottom: 4 },
  text: { fontSize: 15, color: "#111827" },
  image: { width: 100, height: 100, borderRadius: 8, marginBottom: 8 },
  error: { color: "#b91c1c", marginBottom: 10 },
});

export default RemoteList;
