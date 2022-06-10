export interface Token {
  collectionAddress: string;
  tokenId: string;
  owner: string;
  name?: string;
  collectionName?: string;
  description?: string;
  audioUri?: string;
  imageUri?: string;
  metadata?: JSON;
}
