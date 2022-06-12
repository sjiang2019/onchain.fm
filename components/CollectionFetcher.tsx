import { View } from "react-native";
import { useFetchCollectionsByAddress } from "../hooks/useFetchCollectionsByAddress";
import { useFetchCollectionsByName } from "../hooks/useFetchCollectionsByName";
import { Collection } from "../models/collection";
import { isAddressLike, isEnsLike } from "../utils";
import CollectionListing from "./CollectionListing";
import Text from "./Text";

const shouldSearchCollectionsByName = (query: string | null): boolean => {
  if (query == null || query.length === 0) {
    return false;
  }
  if (isAddressLike(query) || isEnsLike(query)) {
    return false;
  }
  return true;
};

const shouldSearchCollectionsByAddress = (query: string | null): boolean => {
  if (query == null || query.length === 0) {
    return false;
  }
  return isAddressLike(query);
};

interface CollectionFetcherProps {
  submitted: string | null;
  onChangeSelectedCollection: (collection: Collection | null) => void;
}

export default function CollectionFetcher(
  props: CollectionFetcherProps
): JSX.Element {
  const {
    loading: queriedCollectionsLoading,
    error: queriedCollectionsError,
    data: queriedCollections,
  } = useFetchCollectionsByAddress(
    props.submitted,
    shouldSearchCollectionsByAddress(props.submitted)
  );
  const {
    loading: searchedCollectionsLoading,
    error: searchedCollectionsError,
    data: searchedCollections,
  } = useFetchCollectionsByName(
    props.submitted,
    shouldSearchCollectionsByName(props.submitted)
  );
  const collections =
    queriedCollections.length > 0 ? queriedCollections : searchedCollections;
  return (
    <View>
      {queriedCollectionsLoading || searchedCollectionsLoading ? (
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          ❀ ❀ ❀ searching collections ❀ ❀ ❀
        </Text>
      ) : queriedCollectionsError || searchedCollectionsError ? (
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          we encountered an error :{"("}
        </Text>
      ) : (
        collections &&
        collections.length > 0 && (
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ fontSize: 24, padding: 8 }}>collections</Text>
            <CollectionListing
              collections={collections}
              onChangeCollection={props.onChangeSelectedCollection}
            />
          </View>
        )
      )}
    </View>
  );
}
