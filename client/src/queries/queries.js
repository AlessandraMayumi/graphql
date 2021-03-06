import {
    gql
} from "@apollo/client";

const getBookQuery = gql`
    query Book($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;

const getBooksQuery = gql`
{
    books {
        id
        name
    }
}
`;

const getAuthorsQuery = gql`
{
    authors {
    id
    name
    }
}
`;

const addBookMutation = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        id
        name
    }
}
`;

export { getBookQuery, getBooksQuery, getAuthorsQuery, addBookMutation };