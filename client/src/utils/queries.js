// IMPORT GQL TAG TO PARSEQUERY STRING
import gql from 'graphql-tag';

// use the me query set up using Apollo Server.
export const GET_ME = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;