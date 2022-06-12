import { Sound } from "expo-av/build/Audio";
import { useEffect } from "react";
import { View } from "react-native";
import { QueueState } from "../hooks/useQueue";
import PlayerControls from "./PlayerControls";

const playSound = async (sound: Sound | null) => {
  if (sound != null) {
    await sound.playAsync();
  }
};

const pauseSong = async (sound: Sound | null) => {
  if (sound != null) {
    await sound.pauseAsync();
  }
};

interface PlayerProps {
  queueState: QueueState;
  onChangeIsSongInfoViewOpen: () => void;
  handleToggleQueueView: () => void;
}

export default function Player(props: PlayerProps): JSX.Element {
  const sound = props.queueState.currentLoadedSong?.sound;

  useEffect(() => {
    if (sound != null) {
      if (props.queueState.isPlaying) {
        playSound(sound);
      } else {
        pauseSong(sound);
      }
    }
  }, [props.queueState.isPlaying, sound]);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <PlayerControls
        queueState={props.queueState}
        onChangeIsPlayerOpen={props.onChangeIsSongInfoViewOpen}
        handleToggleQueueView={props.handleToggleQueueView}
      />
    </View>
  );
}
