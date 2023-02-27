import { FC } from "react";
import "./Button.css";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => {
  return (
    <button name="add" className="button">
      {text}
    </button>
  );
};
