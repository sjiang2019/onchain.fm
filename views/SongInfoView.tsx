import imageLoading from "../assets/image-loading.png";
import { Token } from "../models/token";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../components/Text";
import { useState } from "react";

interface SongInfoViewProps {
  song: Token;
}
export default function SongInfoView(props: SongInfoViewProps): JSX.Element {
  const song = props.song;
  const [showMetadata, setShowMetadata] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={styles.header}>
            <Text style={{ fontSize: 24, marginBottom: 24 }}>{song.name}</Text>
            <Image
              defaultSource={imageLoading}
              source={{ uri: song?.imageUri }}
              style={{ width: 256, height: 256 }}
            />
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
  header: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
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
