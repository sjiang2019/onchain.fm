import { Token } from "../models/token";
import SongListing from "../components/SongListing";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { QueueState } from "../hooks/useQueue";
import SongDisplay from "../components/SongDisplay";
import Text from "../components/Text";

interface QueueViewProps {
  queueState: QueueState;
  handleCloseQueueView: () => void;
}

export default function QueueView(props: QueueViewProps): JSX.Element {
  const handleAddToUserQueueFromGlobalQueue = (song: Token) => {
    props.queueState.removeFromGlobalQueue(song);
    props.queueState.addToUserQueue(song);
  };
  const song = props.queueState.currentLoadedSong?.song;
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
              onChangeCurrentSong={(song: Token) => {
                props.queueState.removeFromUserQueue(song);
                props.queueState.handleSetCurrentSong(song);
              }}
              addToUserQueue={props.queueState.addToUserQueue}
              removeFromQueue={props.queueState.removeFromUserQueue}
            />
          </View>
        )}
        <Text style={{ fontSize: 18, paddingLeft: 16 }}>similar</Text>
        <SongListing
          songs={props.queueState.globalQueue}
          onChangeCurrentSong={(song: Token) => {
            props.queueState.removeFromGlobalQueue(song);
            props.queueState.handleSetCurrentSong(song);
          }}
          addToUserQueue={handleAddToUserQueueFromGlobalQueue}
          removeFromQueue={props.queueState.removeFromGlobalQueue}
        />
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
