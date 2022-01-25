import type { NextPage } from "next";
import Head from "next/head";
import Page from "../src/layout/Page";
import Search from "../src/components/Search";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Page>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        STARWARS UNIVERSE
      </Typography>
      <Search
        value={`Hello World`}
        placeholder="search companies"
        location="/user/companies"
      />
    </Page>
  );
};

export default Home;
