import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useState } from "react";
import Page from "../src/layout/Page";
import Search from "../src/components/Search";
import { Button, Stack, Typography, Box } from "@mui/material";
import useFetch from "../src/hooks/useFetch";
import { SWAPI_API_PEOPLE } from "../src/services/api";
import CardContainer from "../src/components/CardContainer";
import ListContainer from "../src/components/ListContainer";
import Loading from "../src/components/Loading";

const Home: NextPage = () => {
  // Fetch data from the server
  const { data, error } = useFetch<People>(SWAPI_API_PEOPLE);
  const [results, setResults] = useState<People | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const handleFetchMore = () => {
    setLoading(true);
    console.log("fetching more");
  };

  useEffect(() => {
    if (data) {
      setResults(data.results);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <Page>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        STARWARS PEOPLE
      </Typography>
      <Search
        value={searchValue}
        placeholder="search..."
        location="/user/companies"
        onChange={onChange}
      />

      <ListContainer>
        <Stack spacing={3}>
          {!data && <Loading />}

          {data?.results &&
            data.results.map((person: Person, index) => (
              <CardContainer
                key={person.url}
                id={index + 1}
                name={person.name}
                height={person.height}
                mass={person.mass}
                url={person.url}
              />
            ))}
        </Stack>
        {data?.results && (
          <Box
            sx={{ dispaly: "block", textAlign: "center", marginTop: "10px" }}
          >
            <Button
              onClick={handleFetchMore}
              disabled={true}
              sx={{ margin: "0 10px" }}
            >
              Previous
            </Button>
            <Button onClick={handleFetchMore} disabled={false}>
              Next
            </Button>
          </Box>
        )}
      </ListContainer>
    </Page>
  );
};

export default Home;
