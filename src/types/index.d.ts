interface Person {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  url: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  homeworld: string;
  species: string;
  starships: string[];
  vehicles: string[];
}

interface People {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
  pagination: {
    next_page: string;
  };
}

interface App {
  people: People;
  query: string;
  loading: boolean;
}

interface AppContextInterface {
  appData: App;
  setAppData: (appData: App) => void;
}
