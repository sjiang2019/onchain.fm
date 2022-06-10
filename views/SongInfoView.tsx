import { Token } from "../models/token";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../components/Text";
import { useState } from "react";

function SongInfoNav(props: {
  isLooping: boolean;
  onClickLoopButton: (isLooping: boolean) => void;
  handleOpenQueueView: () => void;
}): JSX.Element {
  return (
    <View style={styles.songInfoNav}>
      <TouchableOpacity
        onPress={() => props.onClickLoopButton(!props.isLooping)}
        style={{ paddingLeft: 16, marginBottom: 10 }}
      >
        <Text
          style={{
            fontSize: Platform.OS === "web" ? 24 : 42,
            lineHeight: Platform.OS === "web" ? 24 : 36,
            color: props.isLooping ? "#9B59B6" : "white",
          }}
        >
          ⟳
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.handleOpenQueueView()}
        style={{ paddingRight: 16, marginBottom: 10 }}
      >
        <Text
          style={{
            fontSize: 32,
            lineHeight: 32,
          }}
        >
          ≡
        </Text>
      </TouchableOpacity>
    </View>
  );
}

interface SongInfoViewProps {
  song: Token;
  isLooping: boolean;
  onClickLoop: (isLooping: boolean) => void;
  handleOpenQueueView: () => void;
}
export default function SongInfoView(props: SongInfoViewProps): JSX.Element {
  const song = props.song;
  const [showMetadata, setShowMetadata] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <SongInfoNav
          isLooping={props.isLooping}
          onClickLoopButton={props.onClickLoop}
          handleOpenQueueView={props.handleOpenQueueView}
        />
        <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View
            style={{ width: "100%", alignItems: "center", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 24, marginBottom: 12 }}>{song.name}</Text>
            {song?.imageUri && (
              <Image
                source={{ uri: song?.imageUri }}
                style={{ width: 256, height: 256 }}
              />
            )}
          </View>
          <Text style={{ fontSize: 18 }}>
            {song.collectionName} #{song.tokenId}
          </Text>
          <Text style={{ marginBottom: 12 }}>{song.collectionAddress}</Text>
          <Text style={{ marginBottom: 12 }}>Owner: {song.owner}</Text>
          <Text style={{ marginBottom: 20 }}>{song.description}</Text>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.showMetadataButton}
              onPress={() => setShowMetadata(!showMetadata)}
            >
              <Text style={styles.showMetadataText}>
                {showMetadata ? "hide raw metadata" : "show raw metadata"}
              </Text>
            </TouchableOpacity>
            {showMetadata && (
              <Text style={{ marginBottom: 24 }}>
                {JSON.stringify(song.metadata, null, 2)}
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    height: "100%",
  },
  safeAreaView: {
    flex: 1,
    width: "100%",
  },
  songInfoNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-start",
    marginTop: 10,
  },
  showMetadataButton: {
    width: "80%",
    maxWidth: 256,
    alignItems: "center",
    marginBottom: 36,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  showMetadataText: {
    fontSize: 18,
    lineHeight: 18,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
