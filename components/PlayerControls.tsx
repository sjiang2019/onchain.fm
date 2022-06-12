import { AVPlaybackStatusSuccess } from "expo-av";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { PlayerState } from "../hooks/usePlayer";
import Text from "./Text";
import { formatMs } from "../utils";

function TrackSlider(props: {
  curMs: number;
  endMs: number;
  onSlidingStart: () => void;
  onSlidingComplete: (value: number) => void;
}): JSX.Element {
  return (
    <Slider
      style={{ backgroundColor: "rgba(255,255,255,0)" }}
      minimumTrackTintColor="#5c5c5c00"
      maximumTrackTintColor="#5c5c5c00"
      thumbTintColor="#5c5c5c"
      minimumValue={0}
      maximumValue={props.endMs}
      value={props.curMs}
      tapToSeek={true}
      onSlidingStart={props.onSlidingStart}
      onSlidingComplete={props.onSlidingComplete}
    />
  );
}

interface PlayerControlProps {
  playerState: PlayerState;
  onChangeIsPlayerOpen: () => void;
  handleToggleQueueView: () => void;
}

export default function PlayerControls(props: PlayerControlProps): JSX.Element {
  const [curMs, setCurMs] = useState(0);
  const [endMs, setEndMs] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const status = props.playerState.soundStatus as AVPlaybackStatusSuccess;
    if (status != null && !isSliding) {
      const duration =
        status.durationMillis != null && !isNaN(status.durationMillis)
          ? status.durationMillis
          : 1;
      setCurMs(status.positionMillis);
      setEndMs(duration);
    }
  }, [props.playerState.soundStatus, setCurMs, setEndMs, isSliding]);

  const nowPlaying = props.playerState.currentLoadedSong
    ? `${props.playerState.currentLoadedSong.song.collectionName}: ${props.playerState.currentLoadedSong.song.name}`
    : "~ vibing to silence ~";
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.sliderView}>
        <TrackSlider
          curMs={curMs}
          endMs={endMs}
          onSlidingStart={() => setIsSliding(true)}
          onSlidingComplete={async (value: number) => {
            await props.playerState.currentLoadedSong?.sound.setPositionAsync(
              value
            );
            setIsSliding(false);
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            if (props.playerState.currentLoadedSong != null) {
              props.onChangeIsPlayerOpen();
            }
          }}
          disabled={
            props.playerState.currentLoadedSong == null ||
            props.playerState.isLoading
          }
          style={styles.container}
        >
          <View style={styles.view}>
            <View style={{ alignItems: "center", paddingLeft: 10 }}>
              <Text style={{ fontSize: 12 }} numberOfLines={1}>
                {formatMs(curMs)}
              </Text>
            </View>
            <View style={{ width: 240, alignItems: "center" }}>
              <Text
                style={{ fontSize: 16 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {nowPlaying}
              </Text>
            </View>
            <View style={{ alignItems: "center", paddingRight: 10 }}>
              <Text style={{ fontSize: 12 }} numberOfLines={1}>
                {formatMs(endMs - curMs)}
              </Text>
            </View>
          </View>
          <View style={styles.controlsView}>
            <TouchableOpacity
              onPress={() =>
                props.playerState.setIsLooping(!props.playerState.isLooping)
              }
              style={{ paddingTop: 4, paddingLeft: 12, paddingRight: 12 }}
            >
              <Text
                style={{
                  fontSize: Platform.OS === "web" ? 24 : 42,
                  lineHeight: Platform.OS === "web" ? 48 : 48,
                  color: props.playerState.isLooping ? "#9B59B6" : "white",
                }}
              >
                ⟳
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.playerState.handlePlayPreviousSong()}
              disabled={props.playerState.isLoading}
            >
              <Text style={{ fontSize: 48 }}>🌜</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (props.playerState.currentLoadedSong != null) {
                  props.playerState.setIsPlaying(!props.playerState.isPlaying);
                }
              }}
              disabled={props.playerState.currentLoadedSong == null}
            >
              {props.playerState.isPlaying ? (
                <Text style={{ fontSize: 48 }}>🌝</Text>
              ) : (
                <Text style={{ fontSize: 48 }}>🌞</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.playerState.handlePlayNextSong()}
              disabled={props.playerState.isLoading}
            >
              <Text style={{ fontSize: 48 }}>🌛</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.handleToggleQueueView}
              style={{ paddingLeft: 12, paddingRight: 12 }}
            >
              <Text
                style={{
                  fontSize: 32,
                  lineHeight: 48,
                }}
              >
                ≡
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderView: {
    marginTop: Platform.OS === "web" ? -10 : -20,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  view: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  controlsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 30,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});
