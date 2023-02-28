import { FC } from "react";
import "./Input.css";

type Props = {
  addText: string;
  onChangeAddText: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ addText, onChangeAddText }) => {
  return (
    <input
      type="text"
      placeholder="入力"
      value={addText}
      onChange={onChangeAddText}
      title="挑戦すること"
      className="input"
    />
  );
};
