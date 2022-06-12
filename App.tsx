import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import Player from "./components/Player";
import { QueueState, useQueue } from "./hooks/useQueue";
import { useSearch } from "./hooks/useSearch";
import QueueView from "./views/QueueView";
import SearchView from "./views/SearchView";
import SongInfoView from "./views/SongInfoView";

const client = new ApolloClient({
  uri: "https://api.zora.co/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const queueState: QueueState = useQueue();
  const [isQueueViewOpen, setIsQueueViewOpen] = useState(false);
  const [isSongInfoViewOpen, setIsSongInfoViewOpen] = useState(false);
  const [hasSetAudioMode, setHasSetAudioMode] = useState(false);
  const searchState = useSearch();
  useEffect(() => {
    const setUpSound = async () => {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
      });
    };
    if (!hasSetAudioMode) {
      setUpSound();
      setHasSetAudioMode(true);
    }
  });
  return (
    <RootSiblingParent>
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <StatusBar />
          <View style={styles.screen}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flex: 1,
              }}
            >
              {isSongInfoViewOpen && queueState.currentLoadedSong != null && (
                <SongInfoView song={queueState.currentLoadedSong.song} />
              )}
              {isQueueViewOpen && (
                <QueueView
                  queueState={queueState}
                  handleCloseQueueView={() => setIsQueueViewOpen(false)}
                />
              )}
              {!isSongInfoViewOpen && !isQueueViewOpen && (
                <SearchView searchState={searchState} queueState={queueState} />
              )}
            </View>
            <View style={styles.player}>
              <Player
                queueState={queueState}
                onChangeIsSongInfoViewOpen={() => {
                  setIsSongInfoViewOpen(!isSongInfoViewOpen);
                  setIsQueueViewOpen(false);
                }}
                handleToggleQueueView={() => {
                  if (!isQueueViewOpen) {
                    setIsQueueViewOpen(true);
                    setIsSongInfoViewOpen(false);
                  } else {
                    setIsQueueViewOpen(false);
                  }
                }}
              />
            </View>
          </View>
        </View>
      </ApolloProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d2d2d",
    alignItems: "center",
    flex: 1,
  },
  screen: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  player: {
    width: "100%",
    alignItems: "center",
    height: 200,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: -2 },
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: "black",
  },
});
