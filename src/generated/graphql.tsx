import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteNote: Scalars['Boolean'];
  newNote: Note;
  signin: UserAuth;
  signup: UserAuth;
  toggleFavorite: ToggleFavoritedAnswer;
  updateNote: Note;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID'];
};


export type MutationNewNoteArgs = {
  content: Scalars['String'];
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateNoteArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type Note = {
  __typename?: 'Note';
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  favoriteCount: Scalars['Int'];
  favoritedBy?: Maybe<Array<User>>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type NoteFeed = {
  __typename?: 'NoteFeed';
  cursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  notes: Array<Maybe<Note>>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  me: User;
  note: Note;
  noteFeed?: Maybe<NoteFeed>;
  notes: Array<Note>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryNoteArgs = {
  id: Scalars['ID'];
};


export type QueryNoteFeedArgs = {
  cursor?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type ToggleFavoritedAnswer = {
  __typename?: 'ToggleFavoritedAnswer';
  favorited?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  email: Scalars['String'];
  favorites: Array<Note>;
  id: Scalars['ID'];
  notes: Array<Note>;
  username: Scalars['String'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  token: Scalars['String'];
  user: User;
};

export type NewNoteMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type NewNoteMutation = { __typename?: 'Mutation', newNote: { __typename?: 'Note', content: string } };

export type ToggleFavoriteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToggleFavoriteMutation = { __typename?: 'Mutation', toggleFavorite: { __typename?: 'ToggleFavoritedAnswer', id: string, favorited?: boolean | null | undefined } };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'UserAuth', token: string, user: { __typename?: 'User', username: string, email: string, avatar: string } } };

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'UserAuth', token: string, user: { __typename?: 'User', username: string, email: string, avatar: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', username: string, avatar: string, email: string } };


export const NewNoteDocument = gql`
    mutation newNote($content: String!) {
  newNote(content: $content) {
    content
  }
}
    `;
export type NewNoteMutationFn = Apollo.MutationFunction<NewNoteMutation, NewNoteMutationVariables>;

/**
 * __useNewNoteMutation__
 *
 * To run a mutation, you first call `useNewNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newNoteMutation, { data, loading, error }] = useNewNoteMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useNewNoteMutation(baseOptions?: Apollo.MutationHookOptions<NewNoteMutation, NewNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewNoteMutation, NewNoteMutationVariables>(NewNoteDocument, options);
      }
export type NewNoteMutationHookResult = ReturnType<typeof useNewNoteMutation>;
export type NewNoteMutationResult = Apollo.MutationResult<NewNoteMutation>;
export type NewNoteMutationOptions = Apollo.BaseMutationOptions<NewNoteMutation, NewNoteMutationVariables>;
export const ToggleFavoriteDocument = gql`
    mutation toggleFavorite($id: ID!) {
  toggleFavorite(id: $id) {
    id
    favorited
  }
}
    `;
export type ToggleFavoriteMutationFn = Apollo.MutationFunction<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;

/**
 * __useToggleFavoriteMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteMutation, { data, loading, error }] = useToggleFavoriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>(ToggleFavoriteDocument, options);
      }
export type ToggleFavoriteMutationHookResult = ReturnType<typeof useToggleFavoriteMutation>;
export type ToggleFavoriteMutationResult = Apollo.MutationResult<ToggleFavoriteMutation>;
export type ToggleFavoriteMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;
export const SigninDocument = gql`
    mutation signin($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    user {
      username
      email
      avatar
    }
    token
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $username: String!, $password: String!) {
  signup(email: $email, password: $password, username: $username) {
    user {
      username
      email
      avatar
    }
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    avatar
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;