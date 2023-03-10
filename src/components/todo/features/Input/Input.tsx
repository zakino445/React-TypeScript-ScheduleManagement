import { FC } from "react";
import "./Input.css";

type Props = {
  text: string;
  onChangeAddText: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ text, onChangeAddText }) => {
  return (
    <input
      type="text"
      placeholder="入力"
      value={text}
      onChange={onChangeAddText}
      title="挑戦すること"
      className="input"
    />
  );
};
