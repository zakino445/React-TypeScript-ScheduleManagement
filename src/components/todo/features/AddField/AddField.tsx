import { FC, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./AddField.css";

export const AddField: FC = () => {
  const [addText, setAddText] = useState("");

  const onChangeAddText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAddText(event.target.value);

  return (
    <div className="addField-wrapper">
      <div className="addField-input-wrapper">
        <Input onChangeAddText={onChangeAddText} addText={addText} />
      </div>
      <div className="addField-button-wrapper">
        <Button text={"追加"} />
      </div>
    </div>
  );
};
