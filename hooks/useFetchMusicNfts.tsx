import { ApolloError, gql, useQuery } from "@apollo/client";
import { Collection } from "../models/collection";
import { Token } from "../models/token";

export const MusicNFTSearchQuery: string = `
    query MusicNFTs($collectionAddresses: [String!], $ownerAddresses: [String!]) {
        tokens(
          pagination: {limit: 500}, 
          where: {collectionAddresses: $collectionAddresses, ownerAddresses: $ownerAddresses}, 
          filter: {mediaType: AUDIO}
        ) {
        nodes {
          token {
              collectionAddress
              tokenId
              name
              collectionName
              owner
              description
              content {
                mediaEncoding {
                    ... on AudioEncodingTypes {
                        original
                    }
                  }
              }
              image {
                  mediaEncoding {
                    ... on ImageEncodingTypes {
                        thumbnail
                      }
                  }
              }
              metadata
          }
        }
      }
    }
`;

export function useFetchMusicNfts(
  collection?: Collection,
  ownerAddress?: string
): { loading: boolean; error?: ApolloError; data: Array<Token> } {
  const collectionAddresses =
    collection == null ? undefined : [collection.collectionAddress];
  const ownerAddresses = ownerAddress == null ? undefined : [ownerAddress];
  const { loading, error, data } = useQuery(gql(MusicNFTSearchQuery), {
    variables: {
      collectionAddresses: collectionAddresses,
      ownerAddresses: ownerAddresses,
    },
    skip: collection == null && ownerAddress == null,
  });

  return {
    loading,
    error,
    data:
      data == null
        ? []
        : data.tokens.nodes.map((res: any): Token => {
            const token = res.token;
            return {
              collectionAddress: token.collectionAddress,
              tokenId: token.tokenId,
              name: token.name,
              collectionName: token.collectionName,
              owner: token.owner,
              description: token.description,
              audioUri: token.content.mediaEncoding.original,
              imageUri: token.image.mediaEncoding.thumbnail,
              metadata: token.metadata,
            };
          }),
  };
}
