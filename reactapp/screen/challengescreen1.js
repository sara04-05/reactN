import React from "react";
import RemoteList from "../components/RemoteList";

const ChallengePostsScreen = () => (
  <RemoteList
    title="Posts"
    endpoint="https://jsonplaceholder.typicode.com/posts"
    fields={["title"]}
  />
);

export default ChallengePostsScreen;
