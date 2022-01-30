import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

interface PaginationProps {
  previous: boolean;
  next: boolean;
  previousText?: string;
  nextText?: string;
  handlePrevious: () => void;
  handleNext: () => void;
}

export default function Pagination({
  previous,
  next,
  previousText = "Previous",
  nextText = "Next",
  handlePrevious,
  handleNext,
}: PaginationProps) {
  return (
    <StyledPagination>
      <Button
        onClick={handlePrevious}
        disabled={previous}
      >
        {previousText}
      </Button>
      <Button onClick={handleNext} disabled={next}>
        {nextText}
      </Button>
    </StyledPagination>
  );
}

const StyledPagination = styled(Box)({
  dispaly: "block",
  textAlign: "center",
  marginTop: "10px",
  "&.button": {
    margin: "0 10px" 
  }
});
