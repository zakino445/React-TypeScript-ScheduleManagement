import { FC } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./SearchField.css";

export const SearchField: FC = () => {
  return (
    <div className="additional">
      <Input />
      <Button />
    </div>
  );
};
