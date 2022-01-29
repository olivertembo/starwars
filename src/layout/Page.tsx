import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

interface Props {
  children: React.ReactNode;
}
export default function Page({ children }: Props) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 36%), rgb(0 0 0 / 36%)), url("/assets/images/background.png")`,
        backgroundColor: "#000",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "30px 0",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {" "}
      <Container>{children}</Container>
    </Box>
  );
}
