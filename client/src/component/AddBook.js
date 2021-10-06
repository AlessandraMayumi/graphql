import {
    useQuery,
    useMutation
} from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const [addBook, { data, loading, error }] = useMutation(addBookMutation);

    const onSubmitForm = (e) => {
        e.preventDefault();

        addBook({variables: {name: name, genre: genre, authorId: authorId}});
    };

    function DisplayAuthors() {
        const { loading, error, data } = useQuery(getAuthorsQuery);
        
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option disabled>Error :(</option>;

        return data.authors.map(author => {
            return <option key={author.id} value={author.id}>{author.name}</option>
        });
    };

    return (
        <form id="add-book" 
            onSubmit={e => onSubmitForm(e)}
        >
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)} />
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {DisplayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    );
};

export default AddBook;