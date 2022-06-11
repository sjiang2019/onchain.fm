import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CollectionFetcher from "../components/CollectionFetcher";
import SearchInput from "../components/SearchInput";
import SongFetcher from "../components/SongFetcher";
import WelcomeMessage from "../components/WelcomeMessage";
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
        {submitted == null && (
          <WelcomeMessage
            onChangeCurrentSong={props.queueState.handleSetCurrentSong}
            addToUserQueue={props.queueState.addToUserQueue}
            isLoading={props.queueState.isLoading}
          />
        )}
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
            isLoading={props.queueState.isLoading}
          />
        )}
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
