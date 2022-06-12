import { Sound } from "expo-av/build/Audio";
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from "expo-av";
import { useEffect, useState } from "react";
import { Token } from "../models/token";
import { useToast } from "./useToast";

export interface LoadedSong {
  song: Token;
  sound: Sound;
}

export interface QueueState {
  userQueue: Array<Token>;
  globalQueue: Array<Token>;
  addToUserQueue: (song: Token) => void;
  setGlobalQueue: (songs: Array<Token>) => void;
  addToHistory: (song: Token) => void;
  handlePlayPreviousSong: () => void;
  handlePlayNextSong: () => void;
  currentLoadedSong: LoadedSong | null;
  handleSetCurrentSong: (song: Token | null) => Promise<boolean>;
  removeFromUserQueue: (song: Token) => void;
  removeFromGlobalQueue: (song: Token) => void;
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

export function useQueue(): QueueState {
  const { displayToast } = useToast();
  const [history, setHistory] = useState<Array<Token>>([]);
  const [userQueue, setUserQueue] = useState<Array<Token>>([]);
  const [globalQueue, setGlobalQueue] = useState<Array<Token>>([]);
  const [currentLoadedSong, setCurrentLoadedSong] = useState<LoadedSong | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus | null>(null);
  const [songJustFinished, setSongJustFinished] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // History
  const addToHistory = (song: Token) => {
    setHistory((curHistory: Array<Token>) => [...curHistory, song]);
  };

  // Queueing
  const addToUserQueue = (song: Token) => {
    setUserQueue((curUserQueue) => [...curUserQueue, song]);
  };
  const removeFromUserQueue = (song: Token) => {
    setUserQueue((curUserQueue) => curUserQueue.filter((s) => s != song));
  };
  const removeFromGlobalQueue = (song: Token) => {
    setGlobalQueue((curGlobalQueue) => curGlobalQueue.filter((s) => s != song));
  };

  // Playback
  const handleSetCurrentSong = async (song: Token | null): Promise<boolean> => {
    let didSuccessfullySetSong = false;

    if (song != null && song.audioUri != null && !isLoading) {
      try {
        setIsLoading(true);
        const { sound } = await fetchSoundWithTimeout(song.audioUri, 3000);
        console.log("sound", sound);
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
        displayToast(`audio encoding for ${song.name} in progress`, "error");
      } finally {
        setIsLoading(false);
      }
    }
    return didSuccessfullySetSong;
  };

  const handlePlayPreviousSong = () => {
    if (history.length > 0) {
      const song = history[history.length - 1];
      if (song != null) {
        handleSetCurrentSong(song);
        setHistory((curHistory) => [...curHistory.slice(0, -1)]);
      }
    }
    return null;
  };

  const handlePlayNextSong = () => {
    if (currentLoadedSong != null) {
      addToHistory(currentLoadedSong.song);
    }
    if (userQueue.length > 0) {
      const song = userQueue[0];
      if (song != null) {
        handleSetCurrentSong(song);
        setUserQueue((curUserQueue) => [...curUserQueue.slice(1)]);
      }
    } else if (globalQueue.length > 0) {
      const song = globalQueue[0];
      if (song != null) {
        handleSetCurrentSong(song);
        setGlobalQueue((curGlobalQueue) => [...curGlobalQueue.slice(1)]);
      }
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
    userQueue,
    globalQueue,
    addToUserQueue,
    setGlobalQueue,
    addToHistory,
    handlePlayPreviousSong,
    handlePlayNextSong,
    currentLoadedSong,
    handleSetCurrentSong,
    removeFromUserQueue,
    removeFromGlobalQueue,
    isPlaying,
    setIsPlaying,
    soundStatus,
    isLooping,
    setIsLooping,
    isLoading,
  };
}
