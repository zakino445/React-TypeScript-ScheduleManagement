import { FC } from "react";
import { SearchField } from "../todo/features/SearchField/SearchField";
import { Header } from "../ui/Layouts/Header";

export const SelfManagement: FC = () => {
  return (
    <>
      <Header />
      <SearchField />
    </>
  );
};
