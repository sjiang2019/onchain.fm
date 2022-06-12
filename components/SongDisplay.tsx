import imageLoading from "../assets/image-loading.png";
import { Image, View } from "react-native";
import { Token } from "../models/token";
import Text from "./Text";

export default function SongDisplay(props: { song: Token }): JSX.Element {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "flex-start", width: 220 }}
    >
      <View style={{ marginRight: 10 }}>
        <Image
          defaultSource={imageLoading}
          source={{ uri: props.song.imageUri }}
          style={{ height: 33, width: 33, borderRadius: 4 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 14 }} ellipsizeMode="tail" numberOfLines={1}>
          {props.song.name ?? "untitled"}
        </Text>
        <Text
          style={{ fontSize: 14, color: "gray" }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {props.song.collectionName ?? "unknown collection"}
        </Text>
      </View>
    </View>
  );
}
