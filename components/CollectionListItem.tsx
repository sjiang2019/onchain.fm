import { Collection } from "../models/collection";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SongDisplay from "./SongDisplay";
import Text from "./Text";

interface CollectionListItemProps {
  collection: Collection;
  onChangeCollection: (collection: Collection | null) => void;
}

export default function CollectionListItem(
  props: CollectionListItemProps
): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onChangeCollection(props.collection);
      }}
    >
      <View style={styles.view}>
        <View>
          <Text style={{ fontSize: 14 }} ellipsizeMode="tail" numberOfLines={1}>
            {props.collection.name ?? "untitled"}
          </Text>
        </View>
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
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
  },
});
