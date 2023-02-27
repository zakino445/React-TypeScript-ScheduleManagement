import { FC } from "react";
import { AddField } from "../todo/features/AddField/AddField";
import { ChallengeArea } from "../todo/features/ChallengeArea/ChallengeArea";
import { CompleteArea } from "../todo/features/CompleteArea/CompleteArea";
import { Header } from "../ui/Layouts/Header";

export const SelfManagement: FC = () => {
  return (
    <>
      <Header />
      <AddField />
      <ChallengeArea />
      <CompleteArea />
    </>
  );
};
