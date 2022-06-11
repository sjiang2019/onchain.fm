import { FlatList } from "react-native";
import { Token } from "../models/token";
import SongListItem from "./SongListItem";

interface SongListingProps {
  songs: Array<Token>;
  onChangeCurrentSong: (song: Token) => void;
  addToUserQueue: (song: Token) => void;
  removeFromQueue?: (song: Token) => void;
  hasNextPage?: boolean;
  loadMoreButton?: JSX.Element;
  isLoading: boolean;
}

export default function SongListing(props: SongListingProps): JSX.Element {
  return (
    <FlatList
      data={props.songs}
      renderItem={({ item }) => (
        <SongListItem
          isLoading={props.isLoading}
          song={item}
          onChangeSong={props.onChangeCurrentSong}
          addToUserQueue={props.addToUserQueue}
          removeFromQueue={props.removeFromQueue}
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
