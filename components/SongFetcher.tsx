import { SafeAreaView, View } from "react-native";
import { useFetchMusicNfts } from "../hooks/useFetchMusicNfts";
import { Collection } from "../models/collection";
import { Token } from "../models/token";
import SongPaginator from "./SongPaginator";
import Text from "./Text";

interface SongFetcherProps {
  onChangeSelectedSong: (song: Token | null) => void;
  addToUserQueue: (song: Token) => void;
  handleChangeGlobalQueue: (songs: Array<Token>) => void;
  collection?: Collection;
  ownerAddress?: string;
}

const GLOBAL_QUEUE_SIZE = 25;

export default function SongFetcher(props: SongFetcherProps): JSX.Element {
  const {
    loading,
    error,
    data: musicNfts,
  } = useFetchMusicNfts(props.collection, props.ownerAddress);

  const handleChangeCurrentSong = (song: Token) => {
    props.onChangeSelectedSong(song);
    if (musicNfts.length > 0) {
      const startIdx = musicNfts.indexOf(song) + 1;
      const nextSongs = musicNfts.slice(startIdx, startIdx + GLOBAL_QUEUE_SIZE);
      let prevSongs = [];
      const endIdx = Math.min(
        GLOBAL_QUEUE_SIZE - nextSongs.length,
        startIdx - 1
      );
      if (GLOBAL_QUEUE_SIZE > nextSongs.length) {
        for (let i = 0; i < endIdx; i++) {
          const song = musicNfts[i];
          if (!nextSongs.includes(song)) {
            prevSongs.push(song);
          }
        }
      }
      props.handleChangeGlobalQueue([...nextSongs, ...prevSongs]);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {loading ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>❀ ❀ ❀ searching music ❀ ❀ ❀</Text>
        </View>
      ) : error ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>we encountered an error :{"("}</Text>
        </View>
      ) : musicNfts.length > 0 ? (
        <SongPaginator
          songs={musicNfts}
          onChangeCurrentSong={handleChangeCurrentSong}
          addToUserQueue={props.addToUserQueue}
        />
      ) : (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>no music found :{"("}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
