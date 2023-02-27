import { FC } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./AddField.css";

export const AddField: FC = () => {
  return (
    <div className="addField-wrapper">
      <div className="addField-input-wrapper">
        <Input />
      </div>
      <div className="addField-button-wrapper">
        <Button />
      </div>
    </div>
  );
};
