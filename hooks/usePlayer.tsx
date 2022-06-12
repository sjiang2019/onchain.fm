import { Sound } from "expo-av/build/Audio";
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from "expo-av";
import { useEffect, useState } from "react";
import { Token } from "../models/token";
import { useToast } from "./useToast";
import useQueue, { QueueState } from "./useQueue";

export interface LoadedSong {
  song: Token;
  sound: Sound;
}

export interface PlayerState {
  handlePlayPreviousSong: () => void;
  handlePlayNextSong: () => void;
  currentLoadedSong: LoadedSong | null;
  handleSetCurrentSong: (song: Token | null) => Promise<boolean>;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  soundStatus: AVPlaybackStatus | null;
  isLooping: boolean;
  setIsLooping: (isLooping: boolean) => void;
  isLoading: boolean;
}

function fetchSoundWithTimeout(
  audioUri: string,
  timeoutMs: number
): Promise<{ sound: Sound; status: AVPlaybackStatus }> {
  return new Promise(function (resolve, reject) {
    Audio.Sound.createAsync({
      uri: audioUri,
    }).then(resolve, reject);
    setTimeout(reject, timeoutMs);
  });
}

export function usePlayer(queueState: QueueState): PlayerState {
  const { displayToast } = useToast();
  const [currentLoadedSong, setCurrentLoadedSong] = useState<LoadedSong | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus | null>(null);
  const [songJustFinished, setSongJustFinished] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const { addToHistory, popFromHistory, popFromUserQueue, popFromGlobalQueue } =
  // useQueue();

  // Playback
  const handleSetCurrentSong = async (song: Token | null): Promise<boolean> => {
    let didSuccessfullySetSong = false;

    if (song != null && song.audioUri != null && !isLoading) {
      try {
        setIsLoading(true);
        const { sound } = await fetchSoundWithTimeout(song.audioUri, 3000);
        if (sound != null) {
          setCurrentLoadedSong({ song: song, sound: sound });
          didSuccessfullySetSong = true;
          setIsPlaying(true);
          sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
            setSoundStatus(status);
            if ((status as AVPlaybackStatusSuccess).didJustFinish === true) {
              setSongJustFinished(true);
            }
          });
        }
      } catch (e) {
        displayToast(
          `audio encoding for ${song.name} in progress`,
          "error",
          2000
        );
      } finally {
        setIsLoading(false);
      }
    }
    return didSuccessfullySetSong;
  };

  const handlePlayPreviousSong = () => {
    const song = queueState.popFromHistory();
    if (song != null) {
      handleSetCurrentSong(song);
    } else {
      replayCurrentSong();
    }
  };

  const handlePlayNextSong = () => {
    if (currentLoadedSong != null) {
      queueState.addToHistory(currentLoadedSong.song);
    }
    const song =
      queueState.popFromUserQueue() ?? queueState.popFromGlobalQueue();
    if (song != null) {
      handleSetCurrentSong(song);
    }
  };

  const replayCurrentSong = () => {
    if (currentLoadedSong != null) {
      handleSetCurrentSong(currentLoadedSong.song);
    }
  };

  useEffect(() => {
    if (songJustFinished) {
      if (isLooping) {
        replayCurrentSong();
      } else {
        handlePlayNextSong();
      }
      setSongJustFinished(false);
    }
  }, [songJustFinished, setSongJustFinished]);

  useEffect(() => {
    if (currentLoadedSong?.sound != null) {
      return () => {
        currentLoadedSong.sound.unloadAsync();
      };
    }
  }, [currentLoadedSong?.sound]);
  return {
    handlePlayPreviousSong,
    handlePlayNextSong,
    currentLoadedSong,
    handleSetCurrentSong,
    isPlaying,
    setIsPlaying,
    soundStatus,
    isLooping,
    setIsLooping,
    isLoading,
  };
}
