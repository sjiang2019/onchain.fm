import { FlatList, SafeAreaView } from "react-native";
import { Collection } from "../models/collection";
import CollectionListItem from "./CollectionListItem";

interface CollectionListingProps {
  collections: Array<Collection>;
  onChangeCollection: (collection: Collection | null) => void;
}

export default function CollectionListing(
  props: CollectionListingProps
): JSX.Element {
  return (
    <SafeAreaView>
      <FlatList
        data={props.collections}
        renderItem={({ item }) => (
          <CollectionListItem
            collection={item}
            onChangeCollection={props.onChangeCollection}
          />
        )}
        keyExtractor={(collection: Collection) => collection.collectionAddress}
      />
    </SafeAreaView>
  );
}
