import React from "react";
import { StyledBadge } from "./style";

const Badge = ({ text }: { text: string }) => {
  return (
    <StyledBadge className="badge">
      <p>{text}</p>
    </StyledBadge>
  );
};

export default Badge;
