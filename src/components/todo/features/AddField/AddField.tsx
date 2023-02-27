import { FC } from "react";
import { Button } from "../Button/Button";
import { Input } from "../input/Input";
import "./AddField.css";

export const AddField: FC = () => {
  return (
    <div className="addField-wrapper">
      <div className="input-wrapper">
        <Input />
      </div>
      <div className="button-wrapper">
        <Button />
      </div>
    </div>
  );
};
