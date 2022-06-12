import { useState } from "react";
import { Token } from "../models/token";

export interface QueueState {
  history: Array<Token>;
  addToHistory: (song: Token) => void;
  popFromHistory: () => Token | null;
  userQueue: Array<Token>;
  addToUserQueue: (song: Token) => void;
  removeFromUserQueue: (songIdx: number) => void;
  popFromUserQueue: () => Token | null;
  globalQueue: Array<Token>;
  setGlobalQueue: (songs: Array<Token>) => void;
  removeFromGlobalQueue: (songIdx: number) => void;
  popFromGlobalQueue: () => Token | null;
}

export default function useQueue(): QueueState {
  const [history, setHistory] = useState<Array<Token>>([]);
  const [userQueue, setUserQueue] = useState<Array<Token>>([]);
  const [globalQueue, setGlobalQueue] = useState<Array<Token>>([]);

  // History
  const addToHistory = (song: Token) => {
    setHistory((curHistory: Array<Token>) => [...curHistory, song]);
  };

  const popFromHistory = (): Token | null => {
    if (history.length > 0) {
      const song = history[history.length - 1];
      if (song != null) {
        setHistory((curHistory) => [...curHistory.slice(0, -1)]);
        return song;
      }
    }
    return null;
  };

  // User Queue
  const addToUserQueue = (song: Token) => {
    setUserQueue((curUserQueue) => [...curUserQueue, song]);
  };
  const removeFromUserQueue = (songIdx: number) => {
    setUserQueue((curUserQueue) =>
      curUserQueue.filter((s, idx) => idx != songIdx)
    );
  };
  const popFromUserQueue = (): Token | null => {
    if (userQueue.length > 0) {
      const song = userQueue[0];
      setUserQueue((curUserQueue) => [...curUserQueue.slice(1)]);
      return song;
    }
    return null;
  };

  // Global Queue
  const removeFromGlobalQueue = (songIdx: number) => {
    setGlobalQueue((curGlobalQueue) =>
      curGlobalQueue.filter((s, idx) => idx != songIdx)
    );
  };
  const popFromGlobalQueue = (): Token | null => {
    if (globalQueue.length > 0) {
      const song = globalQueue[0];
      setGlobalQueue((curGlobalQueue) => [...curGlobalQueue.slice(1)]);
      return song;
    }
    return null;
  };

  return {
    history,
    addToHistory,
    popFromHistory,
    userQueue,
    addToUserQueue,
    removeFromUserQueue,
    popFromUserQueue,
    globalQueue,
    setGlobalQueue,
    removeFromGlobalQueue,
    popFromGlobalQueue,
  };
}
