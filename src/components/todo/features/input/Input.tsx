import { FC } from "react";
import "./input.css";

export const Input: FC = () => {
  return (
    <div className="input-box">
      <input type="text" placeholder="入力" title="挑戦することを入力" className="input" />
    </div>
  );
};
