import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CustomButton from "./CustomButton";

const StyledCard = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(2px)",
  color: theme.palette.text.secondary,
}));

export default function CardContainer() {
  return (
    <StyledCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Lucas Skywalker
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton>MORE</CustomButton>
      </CardActions>
    </StyledCard>
  );
}
