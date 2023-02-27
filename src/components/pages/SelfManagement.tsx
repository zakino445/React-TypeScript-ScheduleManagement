import { FC } from "react";
import { AddField } from "../todo/features/AddField/AddField";
import { Header } from "../ui/layouts/Header";

export const SelfManagement: FC = () => {
  return (
    <>
      <Header />
      <AddField />
    </>
  );
};
