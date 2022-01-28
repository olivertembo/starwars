import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Page from "../src/layout/Page";
import Search from "../src/components/Search";
import { Stack, Typography } from "@mui/material";
import useFetch from "../src/hooks/useFetch";
import { SWAPI_API_PEOPLE } from "../src/services/api";
import CardContainer from "../src/components/CardContainer";
import ListContainer from "../src/components/ListContainer";
import Loading from "../src/components/Loading";

const Home: NextPage = () => {
  // Fetch data from the server
  const { data, error } = useFetch(SWAPI_API_PEOPLE);
  const [loading, setLoading] = useState(false);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  if (!data) return <Loading />;

  return (
    <Page>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        STARWARS PEOPLE
      </Typography>
      <Search value={``} placeholder="search..." location="/user/companies" />

      <ListContainer>
        <Loading />
        <Stack spacing={3}>
          <CardContainer />
          <CardContainer />
        </Stack>
      </ListContainer>
    </Page>
  );
};

export default Home;
