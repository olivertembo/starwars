import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Page from "../../src/layout/Page";
import Search from "../../src/components/Search";
import { Stack, Typography } from "@mui/material";
import useFetch from "../../src/hooks/useFetch";
import { SWAPI_API_PEOPLE } from "../../src/services/api";
import CardContainer from "../../src/components/CardContainer";
import ListContainer from "../../src/components/ListContainer";
import Loading from "../../src/components/Loading";
import Link from "next/link";
import Profile from "../../src/components/Profile";

const Person: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <Page>
      <h1>Person: {id}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Profile name="Luke Skywalker" height="172" mass="77" id={2} url="sdf" />
    </Page>
  );
};

export default Person;
