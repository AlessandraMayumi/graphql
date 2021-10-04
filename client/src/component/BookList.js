import {
  useQuery,
  gql
} from "@apollo/client";


const BOOK_LIST = gql`
  query GetBookList {
    books {
      id
      name
    }
  }
`;

function BookList() {

  const { loading, error, data } = useQuery(BOOK_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ id, name }) => (
      <div>
        <li key={id}>{name}</li>
      </div>
    ));
}
  
export default BookList;