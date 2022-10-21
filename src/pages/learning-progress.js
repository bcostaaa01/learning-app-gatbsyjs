import * as React from "react";
import Layout from "../components/layout";
import { Topics } from "../components/topics";

export const LearningProgress = () => {
  return (
    <>
      <Layout heading="Learning Progress"></Layout>
      <Topics></Topics>
    </>
  );
};

export default LearningProgress;

export const Head = () => <title>Learning Progress</title>;
