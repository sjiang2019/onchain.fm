import { Sound } from "expo-av/build/Audio";
import { useEffect } from "react";
import { View } from "react-native";
import { PlayerState } from "../hooks/usePlayer";
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
  playerState: PlayerState;
  onChangeIsSongInfoViewOpen: () => void;
  handleToggleQueueView: () => void;
}

export default function Player(props: PlayerProps): JSX.Element {
  const sound = props.playerState.currentLoadedSong?.sound;

  useEffect(() => {
    if (sound != null) {
      if (props.playerState.isPlaying) {
        playSound(sound);
      } else {
        pauseSong(sound);
      }
    }
  }, [props.playerState.isPlaying, sound]);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <PlayerControls
        playerState={props.playerState}
        onChangeIsPlayerOpen={props.onChangeIsSongInfoViewOpen}
        handleToggleQueueView={props.handleToggleQueueView}
      />
    </View>
  );
}
