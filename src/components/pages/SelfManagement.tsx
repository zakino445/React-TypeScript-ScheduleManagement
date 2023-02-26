import { FC } from "react";
import { InputFunction } from "../todo/features/inputfunction/InputFunction";
import { Header } from "../ui/layouts/Header";

export const SelfManagement: FC = () => {
  return (
    <>
      <Header />
      <InputFunction />
    </>
  );
};
