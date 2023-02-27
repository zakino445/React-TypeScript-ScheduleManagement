import { FC } from "react";
import { Button } from "../../todo/features/Button/Button";
import "./ChallengeArea.css";

export const ChallengeArea: FC = () => {
  return (
    <div className="challengeArea">
      <p className="challengeArea-title">挑戦中</p>
      <ul className="challengeArea-list">
        <li className="challengeArea-list-text">仮置き</li>
        <Button text={"達成"} />
        <Button text={"失敗"} />
      </ul>
    </div>
  );
};
