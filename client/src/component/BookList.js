import {
  useQuery,
} from "@apollo/client";

import { getBooksQuery } from "../queries/queries"


function BookList() {

  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ id, name }) => (
    <div>
      <li key={id}>{name}</li>
    </div>
  ));
}

export default BookList;