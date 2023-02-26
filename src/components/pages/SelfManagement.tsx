import { FC } from "react";
import { Input } from "../todo/features/input/Input";
import { Header } from "../ui/layouts/Header";

export const SelfManagement: FC = () => {
  return (
    <>
      <Header />
      <Input />
    </>
  );
};
