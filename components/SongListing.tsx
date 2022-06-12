import { FlatList } from "react-native";
import { Token } from "../models/token";
import SongListItem from "./SongListItem";

interface SongListingProps {
  songs: Array<Token>;
  onChangeCurrentSong: (songIdx: number) => void;
  addToUserQueue: (songIdx: number) => void;
  removeFromQueue?: (songIdx: number) => void;
  hasNextPage?: boolean;
  loadMoreButton?: JSX.Element;
  isLoading: boolean;
}

export default function SongListing(props: SongListingProps): JSX.Element {
  return (
    <FlatList
      data={props.songs}
      renderItem={({ item, index }) => (
        <SongListItem
          isLoading={props.isLoading}
          song={item}
          onChangeSong={() => props.onChangeCurrentSong(index)}
          addToUserQueue={() => props.addToUserQueue(index)}
          removeFromQueue={
            props.removeFromQueue != null
              ? () => props.removeFromQueue!(index)
              : undefined
          }
        />
      )}
      keyExtractor={(song: Token, idx: number) =>
        `${song.collectionAddress}-${song.tokenId}-${idx}`
      }
      ListFooterComponent={
        props.hasNextPage === true ? props.loadMoreButton : undefined
      }
    />
  );
}
