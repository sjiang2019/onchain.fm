import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CollectionFetcher from "../components/CollectionFetcher";
import SearchInput from "../components/SearchInput";
import SongFetcher from "../components/SongFetcher";
import Text from "../components/Text";
import { QueueState } from "../hooks/useQueue";
import { SearchState } from "../hooks/useSearch";
import { Collection } from "../models/collection";
import { isAddressLike, isEnsLike } from "../utils";

const shouldQueryByOwner = (
  query: string | null,
  selectedCollection: Collection | null
): boolean => {
  if (query == null || query.length === 0) {
    return false;
  }
  if (selectedCollection != null) {
    return false;
  }
  return isEnsLike(query) || isAddressLike(query);
};

function WelcomeMessage(): JSX.Element {
  return (
    <View style={{ width: "90%", alignItems: "center", marginTop: 18 }}>
      <Text style={{ fontSize: 18, marginBottom: 18 }}>
        welcome to onchain.fm
      </Text>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: 16, marginBottom: 12 }}>
          ❀ search for a collection by name or address
        </Text>
        <Text style={{ fontSize: 16 }}>
          ❀ search for an owner by ENS or address
        </Text>
      </View>
    </View>
  );
}

interface SearchViewProps {
  searchState: SearchState;
  queueState: QueueState;
}

export default function SearchView(props: SearchViewProps): JSX.Element {
  const { query, onChangeQuery, submitted, onChangeSubmitted } =
    props.searchState;
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const handleChangeSubmitted = (query: string | null) => {
    setSelectedCollection(null);
    onChangeSubmitted(query);
  };

  const owner = shouldQueryByOwner(submitted, selectedCollection)
    ? submitted
    : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <View style={{ width: "100%" }}>
          <SearchInput
            text={query}
            onChangeText={onChangeQuery}
            onChangeSubmittedText={handleChangeSubmitted}
          />
        </View>
      </View>
      <View style={styles.fetcherContainer}>
        {selectedCollection == null && submitted != null && (
          <CollectionFetcher
            submitted={submitted}
            onChangeSelectedCollection={setSelectedCollection}
          />
        )}
        {(selectedCollection != null || owner != null) && submitted != null && (
          <SongFetcher
            collection={selectedCollection ?? undefined}
            ownerAddress={owner ?? undefined}
            onChangeSelectedSong={props.queueState.handleSetCurrentSong}
            addToUserQueue={props.queueState.addToUserQueue}
            handleChangeGlobalQueue={props.queueState.setGlobalQueue}
          />
        )}
        {submitted == null && <WelcomeMessage />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    height: "100%",
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  fetcherContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
