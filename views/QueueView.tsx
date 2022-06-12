import { Token } from "../models/token";
import SongListing from "../components/SongListing";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PlayerState } from "../hooks/usePlayer";
import SongDisplay from "../components/SongDisplay";
import Text from "../components/Text";

interface QueueViewProps {
  playerState: PlayerState;
  handleCloseQueueView: () => void;
}

export default function QueueView(props: QueueViewProps): JSX.Element {
  const handleAddToUserQueueFromGlobalQueue = (song: Token) => {
    props.playerState.removeFromGlobalQueue(song);
    props.playerState.addToUserQueue(song);
  };
  const song = props.playerState.currentLoadedSong?.song;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity
          onPress={() => props.handleCloseQueueView()}
          style={{ marginBottom: 24, paddingLeft: 16, marginTop: 10 }}
        >
          <Text style={{ fontSize: 24 }}>✕</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, paddingLeft: 16 }}>now playing</Text>

        {song && (
          <View style={{ padding: 16 }}>
            <SongDisplay song={song} />
          </View>
        )}
        {props.playerState.userQueue.length > 0 && (
          <View>
            <Text style={{ fontSize: 18, paddingLeft: 16 }}>up next</Text>
            <SongListing
              songs={props.playerState.userQueue}
              onChangeCurrentSong={async (song: Token) => {
                const didSetSong = await props.playerState.handleSetCurrentSong(
                  song
                );
                if (didSetSong) {
                  props.playerState.removeFromUserQueue(song);
                }
              }}
              addToUserQueue={props.playerState.addToUserQueue}
              removeFromQueue={props.playerState.removeFromUserQueue}
              isLoading={props.playerState.isLoading}
            />
          </View>
        )}
        {props.playerState.currentLoadedSong?.song != null &&
          props.playerState.globalQueue.length > 0 && (
            <View>
              <Text style={{ fontSize: 18, paddingLeft: 16 }}>similar</Text>
              <SongListing
                songs={props.playerState.globalQueue}
                onChangeCurrentSong={async (song: Token) => {
                  const didSetSong =
                    await props.playerState.handleSetCurrentSong(song);
                  if (didSetSong) {
                    props.playerState.removeFromGlobalQueue(song);
                  }
                }}
                addToUserQueue={handleAddToUserQueueFromGlobalQueue}
                removeFromQueue={props.playerState.removeFromGlobalQueue}
                isLoading={props.playerState.isLoading}
              />
            </View>
          )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center", flex: 1, height: "100%" },
  safeAreaView: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
});
