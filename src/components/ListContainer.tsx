import React from "react";
import { Box } from "@mui/system";
import { Paper, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
  return <StyledBox sx={{ minWidth: 275 }}>{children}</StyledBox>;
}
