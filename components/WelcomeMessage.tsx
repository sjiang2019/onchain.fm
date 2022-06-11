import { SafeAreaView, StyleSheet, View } from "react-native";
import { useFetchMusicNfts } from "../hooks/useFetchMusicNfts";
import { Token } from "../models/token";
import SongListing from "./SongListing";
import Text from "./Text";

export default function WelcomeMessage(props: {
  addToUserQueue: (song: Token) => void;
  onChangeCurrentSong: (song: Token | null) => void;
  isLoading: boolean;
}): JSX.Element {
  const {
    loading,
    error,
    data: musicNfts,
  } = useFetchMusicNfts(undefined, "steev.eth");
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ width: "80%", alignItems: "center", marginTop: 18 }}>
          <Text style={{ fontSize: 18, marginBottom: 18 }}>
            welcome to onchain.fm
          </Text>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={{ fontSize: 16, marginBottom: 12 }}>
              ❀ search for a collection by name or address
            </Text>
            <Text style={{ fontSize: 16 }}>
              ❀ search for an owner by ens or address
            </Text>
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.safeAreaView}>
        <SongListing
          songs={loading || error ? [] : musicNfts}
          onChangeCurrentSong={props.onChangeCurrentSong}
          addToUserQueue={props.addToUserQueue}
          isLoading={props.isLoading}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: 32,
    width: "100%",
  },
});
