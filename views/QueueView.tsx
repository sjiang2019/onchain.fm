import SongListing from "../components/SongListing";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PlayerState } from "../hooks/usePlayer";
import SongDisplay from "../components/SongDisplay";
import Text from "../components/Text";
import { QueueState } from "../hooks/useQueue";

interface QueueViewProps {
  playerState: PlayerState;
  queueState: QueueState;
  handleCloseQueueView: () => void;
}

export default function QueueView(props: QueueViewProps): JSX.Element {
  const handleAddToUserQueueFromGlobalQueue = (songIdx: number) => {
    const song = props.queueState.globalQueue[songIdx];
    props.queueState.addToUserQueue(song);
    props.queueState.removeFromGlobalQueue(songIdx);
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
        {props.queueState.userQueue.length > 0 && (
          <View>
            <Text style={{ fontSize: 18, paddingLeft: 16 }}>up next</Text>
            <SongListing
              songs={props.queueState.userQueue}
              onChangeCurrentSong={async (songIdx: number) => {
                const song = props.queueState.userQueue[songIdx];
                const didSetSong = await props.playerState.handleSetCurrentSong(
                  song
                );
                if (didSetSong) {
                  props.queueState.removeFromUserQueue(songIdx);
                }
              }}
              addToUserQueue={(songIdx: number) =>
                props.queueState.addToUserQueue(
                  props.queueState.userQueue[songIdx]
                )
              }
              removeFromQueue={props.queueState.removeFromUserQueue}
              isLoading={props.playerState.isLoading}
            />
          </View>
        )}
        {props.playerState.currentLoadedSong?.song != null &&
          props.queueState.globalQueue.length > 0 && (
            <View>
              <Text style={{ fontSize: 18, paddingLeft: 16 }}>similar</Text>
              <SongListing
                songs={props.queueState.globalQueue}
                onChangeCurrentSong={async (songIdx: number) => {
                  const song = props.queueState.globalQueue[songIdx];
                  const didSetSong =
                    await props.playerState.handleSetCurrentSong(song);
                  if (didSetSong) {
                    props.queueState.removeFromGlobalQueue(songIdx);
                  }
                }}
                addToUserQueue={handleAddToUserQueueFromGlobalQueue}
                removeFromQueue={props.queueState.removeFromGlobalQueue}
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
