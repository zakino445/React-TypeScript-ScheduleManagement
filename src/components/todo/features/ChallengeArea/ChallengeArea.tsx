import { FC } from "react";
import { Button } from "../Button/Button";
import "./ChallengeArea.css";

export const ChallengeArea: FC = () => {
  return (
    <div className="challengeArea">
      <p className="challengeArea-title">挑戦中</p>
      <ul className="challengeArea-list">
        <li className="challengeArea-list-text">
          <span className="challengeArea-list-text-size">仮置き</span>
          <Button text={"達成"} />
          <Button text={"失敗"} />
        </li>
      </ul>
    </div>
  );
};
