import { ApolloError, gql, useQuery } from "@apollo/client";
import { Collection } from "../models/collection";

export const CollectionsQuery: string = `
    query FindCollection($collectionAddresses: [String!]!) {
      collections(pagination: {limit: 50}, where: {collectionAddresses: $collectionAddresses}) {
        nodes {
          address
          description
          name
        }
      }
    }
`;

export function useFetchCollectionsByAddress(
  query: string | null,
  shouldPerformQuery: boolean
): { loading: boolean; error?: ApolloError; data: Array<Collection> } {
  const { loading, error, data } = useQuery(gql(CollectionsQuery), {
    variables: {
      collectionAddresses: [query],
    },
    skip: !shouldPerformQuery,
  });

  return {
    loading,
    error,
    data:
      data == null
        ? []
        : data.collections.nodes.map((res: any) => ({
            collectionAddress: res.address,
            description: res.description,
            name: res.name,
          })),
  };
}
