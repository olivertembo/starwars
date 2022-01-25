import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
//import backgroundImage from './src/assets/images/background.png';
import Image from "next/image";
import Container from "@mui/material/Container";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Page({ children }: Props) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 36%), rgb(0 0 0 / 36%)), url("/assets/images/background.png")`,
        backgroundColor: "#000",
        height: "100vh",
        backgroundSize: "cover",
        padding: "30px 0",
      }}
    >
      {" "}
      <Container>{children}</Container>
    </Box>
  );
}

const styledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
