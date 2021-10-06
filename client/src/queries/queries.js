import {
    gql
} from "@apollo/client";

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

export { getBooksQuery, getAuthorsQuery };