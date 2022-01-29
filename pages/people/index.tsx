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

const Person = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <>
      <h1>Person: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Person;
