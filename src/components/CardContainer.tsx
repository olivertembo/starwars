import React from "react";
import Link from "next/link";
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

interface CardContainerProps {
  id: number;
  name: string;
  height: string;
  mass: string;
  url: string;
}

export default function CardContainer({
  id,
  name,
  height,
  mass,
}: CardContainerProps) {
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
      <CardActions>
        <Link href={`/people/${id}`} passHref>
          <CustomButton>MORE</CustomButton>
        </Link>
      </CardActions>
    </StyledCard>
  );
}
