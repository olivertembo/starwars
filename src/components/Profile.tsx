import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CustomButton from "./CustomButton";



export default function Profile({ name, height, mass }: Person) {
  return (
    <StyledCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          height: {height}
          <br />
          mass: {mass}
          <br />
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(2px)",
  color: theme.palette.text.secondary,
}));