import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const YELLOW = "#FFD700";

const projects = [
  { id: "1", color: "#1E5FD8", title: "Learn from Industry Experts" },
  { id: "2", color: "#0F2038", title: "WordPress" },
  { id: "3", color: "#7B3FE4", title: "Mobile App" },
];

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.topTitle}>App</Text>
      </View>

      {/* Blue header with avatar */}
      <View style={styles.header}>
        <Image source={require("../assets/avatar1.jpg")} style={styles.avatar} resizeMode="contain" />
      </View>

      {/* Overlapping profile card */}
      <View style={styles.card}>
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.role}>UI/UX Designer</Text>
        <Text style={styles.bio}>
          We're passionate about creating beautiful desing for startups & leading brands
        </Text>
        <TouchableOpacity style={styles.hireBtn} onPress={() => console.log("Hire pressed")}>
          <Text style={styles.hireText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>

      {/* Projects */}
      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>PROJECTS</Text>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={projects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 22 }}
        renderItem={({ item }) => (
          <View style={[styles.project, { backgroundColor: item.color }]}>
            <Text style={styles.projectText}>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  backArrow: { fontSize: 28, marginRight: 30 },
  topTitle: { fontSize: 22, fontWeight: "500" },
  header: {
    backgroundColor: "#6EC1E4",
    height: 300,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: "70%", height: "90%" },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 45,
    marginTop: -40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    alignItems: "center",
    // shadow (iOS) + elevation (Android)
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  role: { fontSize: 18, marginBottom: 6 },
  bio: { fontSize: 18, textAlign: "center", marginBottom: 16 },
  hireBtn: {
    backgroundColor: YELLOW,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  hireText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  projectsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    marginTop: 30,
    marginBottom: 20,
  },
  projectsTitle: { fontSize: 20, fontWeight: "bold" },
  viewAllBtn: {
    backgroundColor: YELLOW,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  viewAllText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  project: {
    width: 190,
    height: 180,
    borderRadius: 18,
    marginRight: 16,
    padding: 14,
    justifyContent: "center",
  },
  projectText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default ProfileScreen;
