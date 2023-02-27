import { FC } from "react";
import "./Input.css";

export const Input: FC = () => {
  return (
    <div className="input-box">
      <input type="text" placeholder="入力" title="挑戦すること" className="input" />
    </div>
  );
};
