import {
  useQuery,
} from "@apollo/client";
import { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";


function BookList() {
  const [selectedId, setSelectedId] = useState('');

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const bookList = () => {
    return data.books.map(({ id, name }) => (
      <li key={id} onClick={() => { setSelectedId(id) }}>{name}</li>
    ));
  };

  return (
    <div>
      <ul id="book-list">
        {bookList()}
      </ul>
      {selectedId ? <BookDetails bookId={selectedId} /> : <p>Select a book</p>}
    </div>
  );
};

export default BookList;