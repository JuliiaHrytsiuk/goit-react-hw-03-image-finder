import React from "react";
import { LoadMoreButton, LoadMoreContainer } from "./Button.styled";

const Button = ({ onClick }) => {
  return (
    <LoadMoreContainer>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </LoadMoreContainer>
  );
};

export default Button;
