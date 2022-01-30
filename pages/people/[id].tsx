import { useRouter } from "next/router";
import type { NextPage } from "next";
import Page from "../../src/layout/Page";
import { SWAPI_API_PEOPLE } from "../../src/services/api";
import Link from "next/link";
import Profile from "../../src/components/Profile";
import useFetch from "../../src/hooks/useFetch";

const Person: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, error } = useFetch(`${SWAPI_API_PEOPLE}/2`);

  return (
    <Page>
      <Link href="/">
        <a>Bcka</a>
      </Link>
      {data && <Profile {...(data as Person)} />}
    </Page>
  );
};

export default Person;
