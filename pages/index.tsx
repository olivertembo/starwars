import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useState } from "react";
import Page from "../src/layout/Page";
import Search from "../src/components/Search";
import { Stack, Typography } from "@mui/material";
import { SWAPI_API_PEOPLE } from "../src/services/api";
import CardContainer from "../src/components/CardContainer";
import ListContainer from "../src/components/ListContainer";
import Loading from "../src/components/Loading";
import useDebounce from "../src/hooks/useDebounce";
import Pagination from "../src/components/Pagination";
import { AppContext } from "../src/contexts/AppContext";

const Home: NextPage = () => {
  const [results, setResults] = useState<People | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setSearchQuery] = useState(""); // a default query from context
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pagination, setPagination] = useState({
    previous: false,
    previousURL: "",
    nextURL: "",
    next: false,
  });

  const debouncedSearchQuery = useDebounce(query, 300);

  const searchFromAPI: any = async (q: string) => {
    setIsSearching(true);
    setData([]);
    setError("");
    try {
      // fetch results from api
      fetch(`${SWAPI_API_PEOPLE}?search=${q}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
          setIsSearching(false);
          setPagination({
            ...pagination,
            previous: data.previous !== null,
            previousURL: data.previous,
            nextURL: data.next,
            next: data.next !== null,
          });
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
  };

  const handleFetchMore = () => {
    setLoading(true);
    if (pagination.next && pagination.nextURL) {
      const nextURL = pagination.nextURL.split("search=")[1];
      setSearchQuery(nextURL);
      setSearchQuery(nextURL);
    }
  };

  const handlePrevious = () => {
    setLoading(true);
    if (pagination.previous && pagination.previousURL) {
      const previousURL = pagination.previousURL.split("search=")[1];
      setSearchQuery(previousURL);
    }
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
                name={person.name}
                height={person.height}
                mass={person.mass}
                url={person.url}
              />
            ))}
        </Stack>
        {data && (
          <Pagination
            previous={pagination.previous}
            next={pagination.next}
            handlePrevious={handlePrevious}
            handleNext={handleFetchMore}
          />
        )}
      </ListContainer>
    </Page>
  );
};

export default Home;
