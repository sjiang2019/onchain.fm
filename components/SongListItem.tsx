import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Token } from "../models/token";
import SongDisplay from "./SongDisplay";
import Text from "./Text";

interface SongListItemProps {
  song: Token;
  onChangeSong: (song: Token) => void;
  addToUserQueue: (song: Token) => void;
  removeFromQueue?: (song: Token) => void;
}

export default function SongListItem(props: SongListItemProps): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onChangeSong(props.song);
      }}
    >
      <SongDisplay song={props.song} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => props.addToUserQueue(props.song)}
          style={{ marginRight: 20 }}
        >
          <Text style={{ fontSize: 24 }}>＋</Text>
        </TouchableOpacity>
        {props.removeFromQueue != null && (
          <TouchableOpacity
            style={{ paddingTop: 6 }}
            onPress={() => props.removeFromQueue!(props.song)}
          >
            <Text style={{ fontSize: 20 }}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "100%",
    alignItems: "flex-start",
  },
});
