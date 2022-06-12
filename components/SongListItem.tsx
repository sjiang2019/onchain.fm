import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useToast } from "../hooks/useToast";
// import Toast from "react-native-toast-message";
import { Token } from "../models/token";
import SongDisplay from "./SongDisplay";
import Text from "./Text";

interface SongListItemProps {
  isLoading: boolean;
  song: Token;
  onChangeSong: (song: Token) => void;
  addToUserQueue: (song: Token) => void;
  removeFromQueue?: (song: Token) => void;
}

export default function SongListItem(props: SongListItemProps): JSX.Element {
  const { displayToast } = useToast();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!props.isLoading) {
          props.onChangeSong(props.song);
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
            style={{ paddingTop: 6 }}
            onPress={() => {
              props.removeFromQueue!(props.song);
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
