import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ChallengeStudents from "./challengestudents";
import ChallengePosts from "./challengescreen1";
import ChallengeComments from "./challengescreen11";
import ChallengePhotos from "./challengescreen111";

const tabs = [
  { name: "Students", Screen: ChallengeStudents },
  { name: "Posts", Screen: ChallengePosts },
  { name: "Comments", Screen: ChallengeComments },
  { name: "Photos", Screen: ChallengePhotos },
];

const ChallengeScreen = () => {
  const [active, setActive] = useState(0);
  const { Screen } = tabs[active];

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, active === index && styles.tabActive]}
            onPress={() => setActive(index)}
          >
            <Text style={[styles.tabText, active === index && styles.tabTextActive]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Screen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: "#f3f4f6" },
  tabs: { flexDirection: "row", paddingHorizontal: 20, flexWrap: "wrap" },
  tab: {
    backgroundColor: "#dfe7f5",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 8,
  },
  tabActive: { backgroundColor: "#2563eb" },
  tabText: { color: "#1f2937", fontWeight: "600" },
  tabTextActive: { color: "#ffffff" },
});

export default ChallengeScreen;
