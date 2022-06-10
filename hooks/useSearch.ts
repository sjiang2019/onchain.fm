import { useState } from "react";
import { normalizeText } from "../utils";

export interface SearchState {
  query: string | null;
  onChangeQuery: (query: string | null) => void;
  submitted: string | null;
  onChangeSubmitted: (result: string | null) => void;
}

export function useSearch(): SearchState {
  const [query, setQuery] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);

  return {
    query: query,
    onChangeQuery: (query: string | null) => setQuery(query),
    submitted: submitted,
    onChangeSubmitted: (submitted: string | null) => {
      if (submitted != null) {
        setSubmitted(normalizeText(submitted));
      }
    },
  };
}
