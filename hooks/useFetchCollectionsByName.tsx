import { ApolloError, gql, useQuery } from "@apollo/client";
import { Collection } from "../models/collection";

export const CollectionSearchQuery: string = `
    query Search($query: String!) {
      search(pagination: {limit: 50}, query: {text: $query}, filter: {entityType: COLLECTION}) {
        nodes {
          collectionAddress
          description
          name
        }
      }
    }
`;

export function useFetchCollectionsByName(
  query: string | null,
  shouldPerformQuery: boolean
): { loading: boolean; error?: ApolloError; data: Array<Collection> } {
  const { loading, error, data } = useQuery(gql(CollectionSearchQuery), {
    variables: {
      query: query,
    },
    skip: !shouldPerformQuery,
  });

  return {
    loading,
    error,
    data:
      data == null
        ? []
        : data.search.nodes.map((res: any) => ({
            collectionAddress: res.collectionAddress,
            description: res.description,
            name: res.name,
          })),
  };
}
