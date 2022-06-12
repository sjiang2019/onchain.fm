import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { useToast } from "../hooks/useToast";
import { Token } from "../models/token";
import SongDisplay from "./SongDisplay";
import Text from "./Text";

interface SongListItemProps {
  isLoading: boolean;
  song: Token;
  onChangeSong: () => void;
  addToUserQueue: (song: Token) => void;
  removeFromQueue?: () => void;
}

export default function SongListItem(props: SongListItemProps): JSX.Element {
  const { displayToast } = useToast();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!props.isLoading) {
          props.onChangeSong();
        }
      }}
      disabled={props.isLoading}
    >
      <SongDisplay song={props.song} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            props.addToUserQueue(props.song);
            displayToast("added to queue", "success");
          }}
          style={{ marginRight: 20 }}
        >
          <Text style={{ fontSize: 24 }}>＋</Text>
        </TouchableOpacity>
        {props.removeFromQueue != null && (
          <TouchableOpacity
            style={{ paddingTop: Platform.OS === "web" ? 2 : 6 }}
            onPress={() => {
              props.removeFromQueue!();
            }}
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
