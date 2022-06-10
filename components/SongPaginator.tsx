import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Token } from "../models/token";
import SongListing from "./SongListing";
import Text from "./Text";

interface SongPaginatorProps {
  songs: Array<Token>;
  onChangeCurrentSong: (song: Token) => void;
  addToUserQueue: (song: Token) => void;
}

export default function SongPaginator(props: SongPaginatorProps): JSX.Element {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<Array<Token>>([]);

  useEffect(() => {
    setCurrentPage(props.songs.slice(0, offset + limit));
  }, [offset, props.songs]);

  return (
    <SongListing
      {...props}
      loadMoreButton={
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={() => setOffset((curOffset) => curOffset + limit)}
        >
          <Text style={styles.loadMoreText}>load more</Text>
        </TouchableOpacity>
      }
      hasNextPage={props.songs.length > currentPage.length}
      songs={currentPage}
    />
  );
}

const styles = StyleSheet.create({
  loadMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  loadMoreText: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },
});
