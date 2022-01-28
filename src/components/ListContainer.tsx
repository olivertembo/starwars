import React from "react";
import { Box } from "@mui/system";
import { Paper, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  margin: `15px auto`,
  textAlign: "left",
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(2px)",
  color: theme.palette.text.secondary,
  minHeight: "600px",
}));
interface ListContainerProps {
  children: React.ReactNode;
}
export default function ListContainer({ children }: ListContainerProps) {
  return (
    <StyledBox elevation={4} sx={{ minWidth: 275 }}>
      {children}
    </StyledBox>
  );
}
