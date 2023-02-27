import { FC } from "react";
import { Button } from "../Button/Button";
import "./CompleteArea.css";

export const CompleteArea: FC = () => {
  return (
    <div className="completeArea">
      <p className="completeArea-title">達成</p>
      <ul className="completeArea-list">
        <li className="completeArea-list-text">仮置き</li>
        <li>
          <Button text={"削除"} />
        </li>
      </ul>
    </div>
  );
};
