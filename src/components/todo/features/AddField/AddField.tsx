import { FC } from "react";
import { Button } from "../Button/Button";
import { Input } from "../input/Input";
import "./AddField.css";

export const AddField: FC = () => {
  return (
    <div className="additional">
      <div className="input-box">
        <Input />
      </div>
      <div className="wrapper">
        <Button />
      </div>
    </div>
  );
};
