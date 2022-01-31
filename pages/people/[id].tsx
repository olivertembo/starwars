import { useRouter } from "next/router";
import type { NextPage } from "next";
import Page from "../../src/layout/Page";
import { SWAPI_API_PEOPLE } from "../../src/services/api";
import Link from "next/link";
import Profile from "../../src/components/Profile";
import useFetch from "../../src/hooks/useFetch";
import Button from "@mui/material/Button";

const Person: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const urlAPI = `${SWAPI_API_PEOPLE}${id}`;
  const { data, error } = useFetch(urlAPI);

  if (error || !id) {
    return <div>Error: {error}</div>;
  }

  return (
    <Page>
      <Link href="/" passHref>
        <Button href="/">Home</Button>
      </Link>
      {data && <Profile {...(data as Person)} />}
    </Page>
  );
};

export default Person;
