import React from "react";
import RemoteList from "../components/RemoteList";

const ChallengePhotosScreen = () => (
  <RemoteList
    title="Photos"
    endpoint="https://jsonplaceholder.typicode.com/photos"
    fields={["title"]}
    getImageUri={(item) => `https://picsum.photos/seed/${item.id}/100`}
  />
);

export default ChallengePhotosScreen;
