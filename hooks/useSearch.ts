import { useState } from "react";
import { Collection } from "../models/collection";
import { normalizeText } from "../utils";

export interface SearchState {
  query: string | null;
  onChangeQuery: (query: string | null) => void;
  submitted: string | null;
  onChangeSubmitted: (result: string | null) => void;
  selectedCollection: Collection | null;
  setSelectedCollection: (collection: Collection | null) => void;
  offset: number;
  setOffset: (setOffsetFn: (offset: number) => number) => void;
}

export function useSearch(): SearchState {
  const [query, setQuery] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  return {
    query: query,
    onChangeQuery: (query: string | null) => setQuery(query),
    submitted: submitted,
    onChangeSubmitted: (submitted: string | null) => {
      setSelectedCollection(null);
      setOffset(0);
      if (submitted != null) {
        setSubmitted(normalizeText(submitted));
      } else {
        setSubmitted(null);
      }
    },
    selectedCollection,
    setSelectedCollection,
    offset,
    setOffset,
  };
}
