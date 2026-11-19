import React from "react";
import RemoteList from "../components/RemoteList";

const ChallengePhotosScreen = () => (
  <RemoteList
    title="Photos"
    endpoint="https://jsonplaceholder.typicode.com/photos"
    fields={["title"]}
    imageField="url"
  />
);

export default ChallengePhotosScreen;
