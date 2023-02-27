import { FC } from "react";
import "./Button.css";

type Props = {
  text: string;
};

export const Button: FC<Props> = (props) => {
  const { text } = props;
  return (
    <button name="add" className="button">
      {text}
    </button>
  );
};
