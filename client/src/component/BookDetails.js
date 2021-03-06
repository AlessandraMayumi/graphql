import {
    useQuery,
} from "@apollo/client";
import { getBookQuery } from "../queries/queries";


function BookDetails({bookId}) {    
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: { id: bookId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <div id="book-details">
            <h2>{data.book.name}</h2>
            <p>{data.book.author.name}</p>
            <p>All books by this author</p>
            <ul className="other-books">
                {data.book.author.books.map(b => {
                    return <li key={b.id}>{b.name}</li>
                })}
            </ul>
        </div>
    );
};

export default BookDetails;