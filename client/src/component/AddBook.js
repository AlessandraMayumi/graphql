import {
    useQuery,
    gql
} from "@apollo/client";

import { getAuthorsQuery } from "../queries/queries"

function AddBook() {

    function DisplayAuthors() {
        const { loading, error, data } = useQuery(getAuthorsQuery);
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option disabled>Error :(</option>;
        return data.authors.map(author => {
            return <option key={author.id} value={author.id}>{author.name}</option>
        })
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {DisplayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;