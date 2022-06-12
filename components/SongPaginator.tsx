import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Token } from "../models/token";
import SongListing from "./SongListing";
import Text from "./Text";

interface SongPaginatorProps {
  songs: Array<Token>;
  onChangeCurrentSong: (song: Token) => void;
  addToUserQueue: (song: Token) => void;
  isLoading: boolean;
  offset: number;
  setOffset: (setOffsetFn: (offset: number) => number) => void;
}

export default function SongPaginator(props: SongPaginatorProps): JSX.Element {
  const limit = 10;
  const [currentPage, setCurrentPage] = useState<Array<Token>>([]);

  useEffect(() => {
    setCurrentPage(props.songs.slice(0, props.offset + limit));
  }, [props.offset, props.songs]);

  return (
    <SongListing
      onChangeCurrentSong={(songIdx: number) =>
        props.onChangeCurrentSong(currentPage[songIdx])
      }
      addToUserQueue={(songIdx: number) =>
        props.addToUserQueue(currentPage[songIdx])
      }
      isLoading={props.isLoading}
      loadMoreButton={
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={() => props.setOffset((curOffset) => curOffset + limit)}
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
