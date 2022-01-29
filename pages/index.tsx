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
import useDebounce from "../src/hooks/useDebounce";

const Home: NextPage = () => {
  const [results, setResults] = useState<People | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setSearchQuery] = useState(""); // a default query from context
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const debouncedSearchQuery = useDebounce(query, 500);

  const searchFromAPI: any = async (q: string) => {
    setIsSearching(true);
    setData([]);
    setError("");
    try {
      // const response = await fetch("https://swapi.dev/api/people/?search=" + q);
      // const data = await response.json();
      // setData(data.results);
      // setIsSearching(false);

      // fetch results from api
      fetch("https://swapi.dev/api/people/?search=" + q)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //setResults(data);
          setData(data.results);
          setIsSearching(false);
        });
    } catch (error) {
      console.log("eee");
      alert("Ops Something went wrong");
      setIsSearching(false);
    }
  };

  const debounceCalled = async () => {
    if (debouncedSearchQuery) {
      await searchFromAPI(debouncedSearchQuery);
    } else {
      setIsSearching(false);
      setData([]);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
    // get people from api search
    // fetch results from api
    // fetch("https://swapi.dev/api/people/?search=" + event.target.value)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setResults(data);
    //   });
  };

  const handleFetchMore = () => {
    setLoading(true);
    console.log("fetching more");
  };

  useEffect(() => {
    debounceCalled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (query) {
      /** first call, searchquery Exists, call github API*/
      searchFromAPI(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  return (
    <Page>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        STARWARS PEOPLE
      </Typography>
      <Search
        value={query}
        placeholder="search..."
        location="/user/companies"
        onChange={onChange}
      />

      <ListContainer>
        <Stack spacing={3}>
          {!data && <Loading />}

          {data &&
            data.map((person: Person, index) => (
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
        {data && (
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
