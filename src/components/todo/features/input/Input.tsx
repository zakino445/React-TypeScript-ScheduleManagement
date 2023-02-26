import { FC } from "react";
import "./input.css";

export const Input: FC = () => {
  return (
    <div className="input-box">
      <label>
        挑戦すること：
        <input type="text" placeholder="入力" className="input" />
      </label>
    </div>
  );
};
