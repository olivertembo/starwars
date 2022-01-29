interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  url: string;
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
