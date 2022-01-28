import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ display: "block", textAlign: "center", width: "100%" }}>
      <CircularProgress sx={{ textAlign: "center" }} />
    </Box>
  );
}
