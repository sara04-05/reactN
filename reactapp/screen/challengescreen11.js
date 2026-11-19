import React from "react";
import RemoteList from "../components/RemoteList";

const ChallengeCommentsScreen = () => (
  <RemoteList
    title="Comments"
    endpoint="https://jsonplaceholder.typicode.com/comments"
    fields={["name"]}
  />
);

export default ChallengeCommentsScreen;
